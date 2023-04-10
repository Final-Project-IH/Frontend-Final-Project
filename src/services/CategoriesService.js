import { createHttp } from './BaseService';

const unauthenticatedHttp = createHttp(false);

export const listCategories = () => unauthenticatedHttp.get('/products/category');

