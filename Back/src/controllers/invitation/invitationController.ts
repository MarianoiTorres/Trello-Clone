import { Invitation } from "../../interfaces/invitation";
import decodedInvitation from "../../utils/decodeTokenInvitation";
import generateToken from "../../utils/generateTokenInvitation";
import axios from "axios";

const sendMailController = async(body: Invitation) => {
    const token = await generateToken(body)
    const url = `http://localhost:4200/accept-board/${token}`
    return url
}

const decodedController = async(token: string) => {
    const decodedToken = await decodedInvitation(token)
    return decodedToken
}


export { sendMailController, decodedController}