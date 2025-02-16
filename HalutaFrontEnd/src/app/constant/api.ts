export const Url = 'http://localhost:8080';

export const endPoints = '/api/public/';

export const authenticate = {
  signIn: endPoints + 'auth/login',
  signUp: endPoints + 'auth/signup',
};

export const product = {
  getAll: endPoints + 'product/get-all',
};

export const objectApi = {
  product: Url + `/product/`,
  cart: Url + `/cart/`,
  cartItem: Url + `/cartItem/`,
  order: Url + `/order/`,
  orderDetail: Url + `/orderDetail/`,
  customer: Url + `/customer/`,
  login: Url + `/api/v1/auth/signin`,
  user: Url + `/api/v1/auth/`,
  loginRefreshToken: Url + `/api/v1/auth/refresh`,
};

export const apiProduct = {
  getProductSale: objectApi.product + `getProductSale/`,
  getProductWarehouse: objectApi.product + `getProductWarehouse/`,
  updateProductQuantity: objectApi.product + `updateQuantity/`,
  addProduct: objectApi.product + `addProduct`,
  updatePrice: objectApi.product + `updatePrice/`,
};

export const apiCart = {
  getCart: objectApi.cart + `getCart/`,
  updateCart: objectApi.cart + `updateCart/`,
};

export const apiCartItem = {
  addCartItem: objectApi.cartItem + `addCartItem`,
  deleteCartItem: objectApi.cartItem + `deleteCartItem/`,
  deleteAllCartItem: objectApi.cartItem + `deleteAllCartItem/`,
  updateQuantity: objectApi.cartItem + `updateQuantity/`,
  updateRate: objectApi.cartItem + `updateRate/`,
  updateIsPlus: objectApi.cartItem + `updateIsPlus/`,
};

export const apiCustomer = {
  getCustomer: objectApi.customer + `getCustomer`,
  addCustomer: objectApi.customer + `addCustomer`,
};

export const apiOrder = {
  getOrder: objectApi.order + `getOrder/`,
  getOrderAll: objectApi.order + `getOrderAll/`,
  addOrder: objectApi.order + `addOrder/`,
};

export const apiOrderDetail = {
  getOrderDetail: objectApi.orderDetail + `getOrderDetail/`,
};

export const apiUser = {
  getAllAccount: objectApi.user + `getAllUser`,
  addAccount: objectApi.user + `signup`,
  updateAccount: objectApi.user + `updateUser/`,
};
