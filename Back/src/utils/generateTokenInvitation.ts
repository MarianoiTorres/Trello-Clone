import jwt from 'jsonwebtoken'
import { Invitation } from '../interfaces/invitation'

const generateToken = async(invitation: Invitation) => {
    return jwt.sign({
        projectId: invitation.projectId,
        userCreator: invitation.userCreator,
    },
    process.env.JWT_SECRETKEY!,
    {
        expiresIn: "5m"
    })
} 

export default generateToken