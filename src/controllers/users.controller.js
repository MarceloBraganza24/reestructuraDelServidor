import { saveUserService, getUserService } from '../services/users.service.js';
import { createHash, generateToken, isValidPassword } from "../utils.js";

//aca van las validaciones (ej: que si o si lleguen los datos requeridos)

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if( !email || !password) return res.status(400).send('incomplete values');
        const user = await getUserService(email);
        if(!user) return res.status(400).send('incorrect credentials');
        const comparePassword = isValidPassword(password, user.password);
        if(!comparePassword) return res.status(400).send('incorrect credentials');
        const accessToken = generateToken(user);
        res.cookie('TokenJWT', accessToken, { maxAge: 60 * 60 * 1000 }).send({ data: accessToken });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const register = async (req, res) => {
    try {
        const { first_name ,last_name, role, email, password } = req.body;
        if(!first_name || !last_name || !role || !email || !password) return res.status(400).send('incomplete values');
        const existsUser = await getUserService(email);
        if(existsUser) return res.status(400).send('user already exists');
        const hashedPassword = createHash(password);
        const newUser = {
            ...req.body
        }
        newUser.password = hashedPassword;
        await saveUserService(newUser);
        res.send({ payload: newUser });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export {
    register,
    login
}