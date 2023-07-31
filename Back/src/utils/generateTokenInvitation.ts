import jwt from 'jsonwebtoken'
import { Invitation } from '../interfaces/invitation'

const generateToken = async(invitation: Invitation) => {
    return jwt.sign({
        projectId: invitation.projectId,
        userCreator: invitation.userCreator,
    },
    'good',
    {
        expiresIn: "1d"
    })
} 

export default generateToken