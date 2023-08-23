"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailController = exports.decodedController = exports.generateLinkController = void 0;
const projectModel_1 = __importDefault(require("../../models/projectModel"));
const decodeTokenInvitation_1 = __importDefault(require("../../utils/decodeTokenInvitation"));
const generateTokenInvitation_1 = __importDefault(require("../../utils/generateTokenInvitation"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const generateLinkController = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, generateTokenInvitation_1.default)(body);
    const url = `http://localhost:4200/accept-board/${token}`;
    return url;
});
exports.generateLinkController = generateLinkController;
const sendMailController = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.email,
            pass: process.env.pass,
        },
    });
    const bodyForToken = {
        projectId: body.projectId,
        userCreator: body.userCreator
    };
    const token = yield (0, generateTokenInvitation_1.default)(bodyForToken);
    const url = `http://localhost:4200/accept-board/${token}`;
    const project = yield projectModel_1.default.findById(body.projectId);
    const mailOptions = {
        from: 'Remitente <marianxtorres@gmail.com>',
        to: body.userInvited,
        subject: `Invitacion a ${project.name}`,
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
        }
        else {
            console.log('Correo enviado:', info.response);
        }
    });
});
exports.sendMailController = sendMailController;
const decodedController = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = yield (0, decodeTokenInvitation_1.default)(token);
    return decodedToken;
});
exports.decodedController = decodedController;
//# sourceMappingURL=invitationController.js.map