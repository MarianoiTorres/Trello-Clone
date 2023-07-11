import { hash, compare } from "bcryptjs";

const encrypt = async(password: string, ) => {
    const passwordHash = await hash(password, 5)
    return passwordHash
};

const verify = async(password: string, passwordHash: string) => {
    const isCorrect = await compare(password, passwordHash)
    return isCorrect
};

export { encrypt, verify };
