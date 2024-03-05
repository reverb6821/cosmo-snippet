import http from '@/api/instance'

import { ProductProps } from './Product.properties'

const getAll = () => {
  return http.get('api/v1/products');
};

const get =(id: number) => {
  return http.get(`api/v1/products/${id}`);
};

const create = (data: ProductProps) => {
  return http.post('api/v1/products', data);
};

const update = (id: number, data: ProductProps) => {
  return http.put(`api/v1/products/${id}`, data);
};

const remove = (id: number) => {
  return http.delete(`api/v1/products/${id}`);
};

const ProductService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default ProductService;