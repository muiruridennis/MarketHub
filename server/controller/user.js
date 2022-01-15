import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();


import User from "../model/UserModel.js";

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    try {
        if (!(firstName && lastName && email && password && confirmPassword)) {
            return res.status(422).json({ message: "All fields are required." });
        };
        // check if user already exist
        // Validate if user exist in our database
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User Already Exist. Please Login" });
        if (password !== confirmPassword) return res.status(400).json({ message: "password does not match!" });
        const hashedPassword = await bcrypt.hash(password, 12); // hashing a password. it's  advisablec not to storec password'sc as plain texts in the server database
        const newUser = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" })
        res.status(201).json({ message: "user saved successfully", newUser, token });

    } catch (error) {
        res.status(500).json({ message: "Opps! Something went wrong!" });

    }

};

export const signIn = async (req, res) => {
    // Get user input
    const { email, password } = req.body;
    try {
        if (!(email && password)) {
            res.status(400).send("All input is required");
          }
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "user does not exist" });
        const passwordIsCorrect = await bcrypt.compare(password, existingUser.password);
        if (!passwordIsCorrect) return res.status(400).json({ message: "Invalid credentiaals" });
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
        return res.status(200).json({ newUser: existingUser, token: token });

    } catch (error) {
        res.status(500).json({ message: "opps! something went wrong!" });
        console.log(error);

    }

};
