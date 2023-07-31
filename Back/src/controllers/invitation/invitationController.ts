import { Invitation } from "../../interfaces/invitation";
import generateToken from "../../utils/generateTokenInvitation";

const sendMailController = async(body: Invitation) => {
    const token = await generateToken(body)
    return token
}


export { sendMailController}