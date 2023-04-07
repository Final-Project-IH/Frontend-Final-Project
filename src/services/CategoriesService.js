import { createHttp } from './BaseService';

const unauthenticatedHttp = createHttp(false);

export const listCategories = () => unauthenticatedHttp.get('/products/category');

export const categoryDetail = (id) => unauthenticatedHttp.get(`/products/category/${id}`)

export const categoryDetailClothes = (id) => unauthenticatedHttp.get(`/products/category/${id}/clothes`)

export const categoryDetailAccesories = (id) => unauthenticatedHttp.get(`/products/category/${id}/accesories`)

export const categoryDetailShoes = (id) => unauthenticatedHttp.get(`/products/category/${id}/shoes`)