import axios from 'axios';
import dotenv from "dotenv";
import base64 from "base-64";
dotenv.config(); 

const getOAuthToken = async ( req, res, next ) =>{

    let consumer_key = process.env.consumer_key;
    let consumer_secret = process.env.consumer_secret;

    let url = process.env.oauth_token_url;

    //form a buffer of the consumer key and secret
    // let buffer = new Buffer.from(consumer_key+":"+consumer_secret);
    let buffer = base64.encode(consumer_key+":"+consumer_secret)
    let auth = `Basic ${buffer}`;

    try{

        let {data} = await axios.get(url,{
            'headers':{
                "Authorization":auth
            }
        });

        req.token = data['access_token']; 

         return next();

    }catch(err){
        res.status(401).json({message:err['response']['statusText'] });
    }
    
};
export default getOAuthToken; 