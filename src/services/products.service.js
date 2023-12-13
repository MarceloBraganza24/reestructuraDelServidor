import Products from '../dao/dbManagers/products.manager.js';

const productsManager = new Products();

//aca va la lógica de negocio
//(ej: para agregar un producto al carrito debemos validar el stock)
//(ej: purchase order: envio de email con los productos comprados)

const getProductsService = async (page) => {
    const products = await productsManager.getAll(page);
    return products;
}

const saveProductService = async (user) => {
    await productsManager.save(user);
    return user;
}

export {
    getProductsService,
    saveProductService
}