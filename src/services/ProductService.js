import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const listProduct = () => unauthenticatedHttp.get("/products");
export const productDetail = (id) => unauthenticatedHttp.get(`/products/${id}`);

export const createProduct = (productData) =>
  authenticatedHttp.post("/new-product", productData);

export const createBid = (id, offer) =>
  authenticatedHttp.post(`/products/${id}/createBid`, {offer});

export const changeStatus = (id) =>
  unauthenticatedHttp.post(`/products/${id}/changeStatus`);

export const updateFavorite = (id) => authenticatedHttp.post(`/products/${id}/favorites`)
