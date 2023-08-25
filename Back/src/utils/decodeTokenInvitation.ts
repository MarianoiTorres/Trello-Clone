import jwt from 'jsonwebtoken'

const decodedInvitation = async(token: string) => {
    try {
        console.log(token);
        
        const decodedToken = jwt.decode(token, {complete: true } )
        return decodedToken?.payload
    } catch (error) {
        return {message: 'Error al decodificar el token'}
    }
}

export default decodedInvitation