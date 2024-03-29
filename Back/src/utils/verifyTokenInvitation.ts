import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'


const verifyTokenInvitation = async(req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);
    
    jwt.verify(token!, process.env.JWT_SECRETKEY!, (err: Error | null, decodedToken: any) => {
        if(err){
            console.log(err);
            
           return res.status(401).json({message: 'TOKEN EXPIRADO'})
        }
        console.log('llega al next');
        console.log(decodedToken);
        
        next()
    })
    
}

export default verifyTokenInvitation