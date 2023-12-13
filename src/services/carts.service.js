import Carts from '../dao/dbManagers/carts.manager.js';

const cartsManager = new Carts();

//aca va la lógica de negocio
//(ej: para agregar un producto al carrito debemos validar el stock)
//(ej: purchase order: envio de email con los productos comprados)

const getCartsService = async (page) => {
    const products = await cartsManager.getAll(page);
    return products;
}

const saveCartService = async (user) => {
    await cartsManager.save(user);
    return user;
}

export {
    getCartsService,
    saveCartService
}