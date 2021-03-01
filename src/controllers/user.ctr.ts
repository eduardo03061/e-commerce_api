import { RequestHandler } from 'express';
import User from '../models/user.models';

export const createUser: RequestHandler = async (req,res)=>{
    try {
        const user = new User(req.body);
  
        const userSave = await user.save();
        
        res.json(userSave);
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error',
            error
        });
    }
};

export const getUsers: RequestHandler = (req,res)=>{
    res.json("getting User");
};

export const updateUser: RequestHandler = (req,res)=>{
    res.json("update User");
};