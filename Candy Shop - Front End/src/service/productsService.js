import axios from '../custom-axios/axios'
import Proizvod from "../model/Proizvod";

const productsService = {
    fetchProducts: () => {
        return axios.get("/products")
            .then((result) => {
                return result.data.map((productJSON) => {
                    return Object.assign(new Proizvod(), productJSON);
                })
            })
    },
    getProduct: (idProizvod) => {
        return axios.get(`/products/${idProizvod}`)
            .then((result) => {
                return Object.assign(new Proizvod(), result.data);
            })
    },
    createProduct: (productData) => {
        return axios.post("/products", productData);
    },
    createOrder: (orderData) => {
        return axios.post("/products/order", orderData);
    },
    fetchRecommendedProducts: (idProizvod) => {
        return axios.get("/products/recommended")
            .then((result) => {
                   return result.data.map((productJSON) => {
                         return Object.assign(new Proizvod(), productJSON);
                   })
            })
    },

};


export default productsService;
