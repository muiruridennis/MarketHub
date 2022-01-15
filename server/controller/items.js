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
        res.status(409).json({ message: error.message})
        console.error(error);
        
    }


}; 
export const getItems = async (req, res) => {
    const {page}= req.query;
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // helps get the startrting index of every pager
        const total = await Item.countDocuments({});
        const items = await Item.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: items, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
        
        
        
    } catch (error) {
        res.status(404).json({ message: error.message});
        
    }
};
// we use Querry when querring some data   /item?page=1-->Page=1
// we use PARAMS if you want to get spacific resource --> /item/123 -->id=123 
export const getItemsBySearch = async (req, res) => {
    const {searchQuery} = req.query;
    try {
        const title = new RegExp(searchQuery, "i"); //i stands for the ignore the case 
        const items = await Item.find({title });
        res.json({data: items});
        
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
 
};

export const getItem = async (req, res) => {
    const {id} = req.params;
    try {
        const item = await Item.findById(id);
         res.status(200).json(item);
        
        
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
 
};


export default router