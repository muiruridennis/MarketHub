import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();




// what next() middleware is used for
// eg. one wants to like a post 
//clicks the like button => auth middleware (next) => like controller

const auth = async (req, res, next) => {
    
    try {
      const token = req.headers.authorization.split(" ")[1];  
      console.log(token);
      // how to get token from client side
        const isCustomAuth = token.length < 500; //checking if its a custom auth
    
        let decodedData;
    
        if (token && isCustomAuth) {      
          decodedData = jwt.verify(token, process.env.SECRET_KEY);
    
          req.userId = decodedData?.id;// user id
        } else {
          decodedData = jwt.decode(token); // google token
    
          req.userId = decodedData?.sub;
        }    
    
        next();
        
    } catch (error) {
        console.error(error)
        
    }
}
export default auth;