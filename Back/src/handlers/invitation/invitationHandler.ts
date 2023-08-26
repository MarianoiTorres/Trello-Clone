import { Request, Response } from "express";
import {
  decodedController,
  generateLinkController,
  sendMailController,
} from "../../controllers/invitation/invitationController";

const generateLink = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const sentMail = await generateLinkController(body);
    res.status(200).json(sentMail);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const sendMailWithLink = async (req: Request, res: Response) => {
  try {
    const {body} = req 
    const sentMail = await sendMailController(body)
    res.status(200).json(sentMail);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getPayload = async (req: Request, res: Response) => {
  console.log('oo');
  
  try {
    console.log('hola');
    
    const { body } = req;
    console.log(body);
    
    const payload = await decodedController(body.token);
    res.status(200).json(payload);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { generateLink, getPayload, sendMailWithLink };
