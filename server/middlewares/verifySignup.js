import UserModel from '../models/users-model.js'

export const checkduplicateUserName = async (req, res, next) => {

    const user = await UserModel.findOne({UserName: req.body.UserName})
    if(user) return res.json({message: 'The user already exists'})

    next();
}