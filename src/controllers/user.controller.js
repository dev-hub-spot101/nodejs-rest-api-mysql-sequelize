import User from '../models/users';

import Sequelize from 'sequelize';

const Op = Sequelize.Op;

export async function getAllUsers(req, res){
    try{
        let getusers =await User.findAll({});

        if(getusers && getusers.length>0){
            res.status(200).json({
                success: true,
                data: getusers,
                message: "Users found successfully"
            }) 
        }else{
            res.status(200).json({
                success: false,
                message: "Users not found!"
            }) 
        }

    } catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

export async function getUserById(req, res){
    try{
        let getusers =await User.findOne({
            where:{
                id: req.params.id
            }
        });
        if(getusers){
            res.status(200).json({
                success: true,
                data: getusers,
                message: "User found successfully"
            }) 
        }else{
            res.status(200).json({
                success: false,
                message: "User not found!"
            }) 
        }

    } catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

export async function saveUser(req, res){
    try{
        console.log("req.body", req.body)
        let getusers =await User.create(req.body);
        if(getusers){
            res.status(200).json({
                success: true,
                data: getusers,
                message: "Users Created successfully"
            }) 
        }else{
            res.status(200).json({
                success: false,
                message: "Users not created!"
            }) 
        }

    } catch(err){

        res.status(500).json({
            success: false,
            error:err,
            message: "Something went wrong!"
        })
    }
}

export async function deleteUserById(req, res){
    try{
        let getusers =await User.destroy({
            where:{
                id: req.params.id
            }
        });
        if(getusers){
            res.status(200).json({
                success: true,
                message: "Users deleted successfully"
            }) 
        }else{
            res.status(200).json({
                success: false,
                message: "Users not deleted!"
            }) 
        }

    } catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}

export async function updateUserById(req, res){
    try{
        let getusers =await User.findOne({
            where:{
                id:req.params.id
            }
        });
        if(getusers){
            getusers.update(req.body);

            res.status(200).json({
                success: true,
                data: getusers,
                message: "Users updated successfully"
            }) 
        }else{
            res.status(200).json({
                success: false,
                message: "Users not updated!"
            }) 
        }

    } catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}


export async function fileupload(req, res){
    try{
        console.log("req.files", req.file);
        res.status(200).json({
            success: false,
           data:req.file
        }) 
    } catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}