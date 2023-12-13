import { getCartsService, saveCartService  } from '../services/carts.service.js';

const getAll = async (req, res) => {
    try {
        const carts = await getCartsService();
        res.send(carts);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const save = async (req, res) => {
    try {
        const { products } = req.body;
        if(!products) {
            return res.status(400).send('incomplete values');
        }
        const result = await saveCartService({ products });
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export {
    getAll,
    save
}