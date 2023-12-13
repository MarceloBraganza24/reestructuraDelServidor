import Users from '../dao/dbManagers/users.manager.js';

const usersManager = new Users();

//aca va la lógica de negocio
//(ej: para agregar un producto al carrito debemos validar el stock)
//(ej: purchase order: envio de email con los productos comprados)

const getUserService = async (email) => {
    const user = await usersManager.getByEmail(email);
    return user;
}

const saveUserService = async (user) => {
    await usersManager.save(user);
    return user;
}

export {
    getUserService,
    saveUserService
}