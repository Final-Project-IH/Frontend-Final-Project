import { createHttp } from "./BaseService";

const unauthenticatedHttp = createHttp(false);

export const listCategories = () =>
  unauthenticatedHttp.get("/products/category");

/* Fashion */

export const categoryFashion = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/fashion`);

export const categoryDetailClothes = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/fashion/clothes`);

export const categoryDetailAccesories = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/fashion/accesories`);

export const categoryDetailShoes = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/fashion/shoes`);

/* Home */

export const categoryHome = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/home`);

export const categoryDetailDecoration = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/home/decoration`);

export const categoryDetailFurniture = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/home/furniture`);

export const categoryDetailKitchenware = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/kitchenware`);

/* Art */

export const categoryArt = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/art`);

export const categoryDetailPrints = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/art/prints`);

export const categoryDetailPhotography = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/art/photography`);

export const categoryDetailFrames = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/art/frames`);

export const categoryDetailBooks = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/art/books`);

export const categoryDetailMusic = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/art/music`);

/* Antiques */

export const categoryAntiques = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/antiques`);

export const categoryDetailAntiquesHome = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/antiques/home-decoration`);

export const categoryDetailAntiquesArt = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/antiques/art-frames`);

export const categoryDetailAntiquesFashion = (id) =>
  unauthenticatedHttp.get(`/products/category/${id}/fashion-accesories`);
