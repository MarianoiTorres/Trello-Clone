import { Invitation } from "../../interfaces/invitation";
import ProjectModel from "../../models/projectModel";
import decodedInvitation from "../../utils/decodeTokenInvitation";
import generateToken from "../../utils/generateTokenInvitation";
import nodemailer from 'nodemailer'

const generateLinkController = async (body: Invitation) => {
  const token = await generateToken(body);
  const url = `http://localhost:4200/accept-board/${token}`;
  return url;
};

const sendMailController = async (body: any) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'practiceapplications0@gmail.com', 
      pass: process.env.pass, 
    },
  });

  const bodyForToken = {
    projectId: body.projectId,
    userCreator: body.userCreator,
    userInvited: body.userInvited
  }
 
  const token = await generateToken(bodyForToken);
  const url = `http://localhost:4200/accept-board/${token}`

  const project = await ProjectModel.findById(body.projectId)

  const mailOptions = {
    from: 'Remitente <practiceapplications0@gmail.com>', 
    to: body.userInvited, 
    subject: `Invitacion a ${project!.name}`,
    html: `<!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f2f2f2;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
            }
      
            .container {
              text-align: center;
              max-width: 600px;
              padding: 20px;
              background-color: #E1E5E7;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
      
            img {
              max-width: 50%;
              height: auto;
              border-radius: 5px;
              margin-bottom: 10px;
              background-color: none;
            }
      
            h1 {
              color: #68A8C6;
              margin-bottom: 10px;
            }
      
            h4 {
              color: #767575;
            }
      
            button {
              background-color: #68A8C6;
              color: #fff;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 20px;
            }

          </style>
         </head>
         <body>
           <div class="container">
             <h1>
                Mariano te ha invitado a fomar parte de su tablero de tareas
             </h1>
       
             <div >
               <p>
                Únase a él en Trello para colaborar, gestionar proyectos y alcanzar nuevos picos de productividad
                </p>
                 <br />
                  <a href=${url}><button>Ir al tablero</button></a>
                <br>
            </div>
             
           </div>
         </body>
       </html>`,
    
    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

const decodedController = async (token: string) => {
  const decodedToken = await decodedInvitation(token);
  console.log(decodedToken);
  
  return decodedToken;
};

export { generateLinkController, decodedController, sendMailController };
