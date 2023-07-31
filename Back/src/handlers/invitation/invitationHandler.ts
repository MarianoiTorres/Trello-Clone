import { Request, Response } from "express";
import { sendMailController } from "../../controllers/invitation/invitationController";

const sendMailHandler = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const sentMail = await sendMailController(body);
    res.status(200).json(sentMail);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { sendMailHandler };
