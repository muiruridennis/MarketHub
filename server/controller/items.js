import mongoose from "mongoose";
import express from "express";

import Item from "../model/itemModel.js";
const router = express.Router();

export const CreateItem = async (req, res) => {
    const item = req.body;
    const newPostItem = new Item({ ...item, addedDate:new Date().toISOString()})
    try {
        await newPostItem.save();
        res.status(201).json(newPostItem);
        
        
    } catch (error) {
        res.status(409).jsson({ message: error.message})
        console.error(error);
        
    }


}; 
export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items)
        
    } catch (error) {
        res.status(404).json({ message: error.message});
        
    }
};
// we use Querry when querring some data   /item?page=1-->Page=1
// we use PARAMS if you want to get spacific resource --> /item/123 -->id=123 
export const getItemsBySearch = async (req, res) => {
    const searchQuery = req.query
    try {
        const title= new RegExp(searchQuery, "i");
        const items = await Item.find({ $or: [{title}]});
        res.json({data: items});
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
};

export default router