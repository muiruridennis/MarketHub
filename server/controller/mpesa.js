import express from "express";
import Payment from "../model/mpesamodel.js";
import axios from 'axios';
import dotenv from "dotenv";
import moment from "moment";
import base64 from "base-64";

dotenv.config();

const router = express.Router();

export const lipaNaMpesaOnline = async (req, res) => {
    const token = req.token;
    const auth = `Bearer ${token}`;
    const phoneNumber = process.env.PHONE_NUMBER
    const bs_short_code = process.env.lipa_na_mpesa_shortcode;
    const passkey = process.env.lipa_na_mpesa_passkey;
    const url = process.env.lipa_na_mpesa_url;
    const timeStamp = moment().format("YYYYMMDDHHmmss");
    // let auth = "Basic " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

    let password = base64.encode(bs_short_code + passkey + timeStamp); 

    try {
        const { data } = await axios.post(url,

            {
                "BusinessShortCode": bs_short_code,
                "Password": password,
                "Timestamp": timeStamp,
                "TransactionType": "CustomerPayBillOnline",
                "Amount": '1',
                "PartyA": phoneNumber,
                "PartyB": bs_short_code,
                "PhoneNumber": phoneNumber,
                "CallBackURL": 'https://7ab9-102-219-208-82.ngrok.io/mpesa/stkcallback',
                "AccountReference": "Sales Maker",
                "TransactionDesc": "Payment of tour"
            },
            {
                'headers': {
                    "Authorization": auth
                }
            }).catch(console.log);
        return (
            res.status(200).json({
                success: true,
                message: data
            })
        )

    } catch (error) {
        return res.status(404).json({ success: false, message: "bad request" });
        // console.log(error);
    };
};

export const validation = async (req, res) => {
    await console.log('....................... validation .............');
    await console.log(req.body)
};

export const confirmation = async (req, res) => {
    await console.log('....................... confirmation .............');
    await console.log(req.body)
};


export const lipaNaMpesaOnlineCallback = async (req, res) => {
    // let message = req.body.Body.stkCallback['ResultDesc'];
    let message = req.body.Body;
    // await console.log('....................... callback .............');
    // console.log(message);

    // return res.send({
    //     success: true,
    //     message
    // });
   try {
           return res.send({  success: true, message });
       
   } catch (error) {
       console.log(error)
   }
};
