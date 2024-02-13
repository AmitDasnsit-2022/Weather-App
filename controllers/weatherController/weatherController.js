import express from 'express';
import mongoose from 'mongoose';
import weatherModel from '../../modules/weather.js';

/**
 * @description Getting weather report API
 */

export const weatherAPI = async (req,res) => {
    try{
        const data = 
        return res.status(200).json({data})
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server error"})
    }
}