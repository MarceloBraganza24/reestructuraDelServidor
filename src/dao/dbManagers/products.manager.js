import { productsModel } from '../dbManagers/models/products.model.js'

export default class Products {
    constructor() {
        console.log('Working products with DB...');
    }

    getAll = async (page) => {
        const products = await productsModel.paginate({}, {limit: 5, page, lean: true});
        return products; 
    }

    save = async (product) => {
        const result = await productsModel.create(product);
        return result;
    }
}