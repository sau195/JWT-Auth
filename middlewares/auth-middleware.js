import jwt  from "jsonwebtoken";
import UserModel from "../models/User.js";

const checkUserAuth=async(req,res,next)=>{
    let token
    const {authorization}=req.headers
    if(authorization && authorization.startsWith("Bearer"))
    {
        try{
            token=authorization.split(" ")[1]

            const {User_ID}=jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.user=await UserModel.findById(User_ID).select("-password")
            next()

        }
        catch(error)
        {
            console.log(error);
            res.send({"status":"failed","message":"Unauthorized User"})
        }
        if(!token)
        {
            res.send({"status":"failed","message":"No token"})

        }
    }

}

export default checkUserAuth