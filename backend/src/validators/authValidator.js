import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/serverConfig.js';

export async function isLoggedIn(req,res,next){
    const token = req.cookies["authToken"];
    if(!token){
        return res.status(401).json({success: false,
            data: {},
            error: "Not authenticated",
            message: "No Auth Token provided"
        });
    }


const decoded = jwt.verify(token, JWT_SECRET);

if(!decoded){
    return res.status(401).json({success: false,
        data: {},
        error: "Not authenticated",
        message: "Invalid Token provided"
    });
}
 
req.user = {
    email : decoded.email,
    id: decoded.id
};
next();

}


