import { Invitation } from "../../interfaces/invitation";
import decodedInvitation from "../../utils/decodeTokenInvitation";
import generateToken from "../../utils/generateTokenInvitation";
import nodemailer from "nodemailer";
import axios from "axios";

const generateLinkController = async (body: Invitation) => {
  const token = await generateToken(body);
  const url = `http://localhost:4200/accept-board/${token}`;
  return url;
};

const sendMailController = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "marianxtorres@gmail.com",
      pass: "M1.a2.R3.i4.A5.n6.O7",
    },
  });

  const mailOptions = {
    from: "marianxtorres@gmail.com",
    to: "marianotorres699@gmail.com",
    subject: "Invitacion a unirte a un tablero",
    text: "Este es el contenido del correo electrónico.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo:", error);
    } else {
      console.log("Correo enviado:", info.response);
    }
  });
};

const decodedController = async (token: string) => {
  const decodedToken = await decodedInvitation(token);
  return decodedToken;
};

export { generateLinkController, decodedController, sendMailController };
