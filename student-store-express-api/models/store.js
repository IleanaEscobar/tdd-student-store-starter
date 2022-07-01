const { storage } = require('../data/storage')
const Errors = require('../utils/errors')


class Store {
    static async listProducts() {
        const products = storage.get('products').value()
        return products
    }

    static async fetchProductById(productId) {
        const product = storage
        .get('products')
        .find({ id: Number(productId) })
        .value()
        return product
    }

  static async createPurchaseOrder(purchase) {
    // create a new purchase

    if (!purchase) {
      throw new Error('No purchase made.');
    }
    const requiredFields = ['shoppingCart', 'user'];

    requiredFields.forEach((field) => {
      if (!purchase[field]) {
        throw new Error(`Field: "${field}" is required in purchase.`);
      }
    });

    if (!Array.isArray(purchase.shoppingCart)) {
      throw new Error('ShoppingCart is required to be an array.');
    }
    const filteredShoppingCart = purchase.shoppingCart.filter((item) => {
      if (
        typeof item === 'object'
        && item.hasOwnProperty('itemId')
        && item.hasOwnProperty('quantity')
      ) {
        return true;
      }
    });
    if (purchase.shoppingCart.length !== filteredShoppingCart.length) {
      // console.log(purchase.shoppingCart)
      throw new Errors.BadRequestError()
    }
    if (!purchase.user.hasOwnProperty('name') || !purchase.user.hasOwnProperty('email')) {
      throw new Errors.BadRequestError();
    }

    const purchaseId = storage.get("purchases").length + 1
    const createdAt = new Date().toISOString()
    var currentItem = 0
    var currentProd = {}
    var total = 0
    for (let i = 0; i < purchase.shoppingCart.length; i++) {
      currentItem = purchase.shoppingCart[i].itemId
      // console.log("currentItem: " + currentItem)
      currentProd = await Store.fetchProductById(currentItem)
      // console.log("currentProd: " + purchase.shoppingCart[i].quantity)
      total += currentProd.price * purchase.shoppingCart[i].quantity
      // console.log("total: " + total)
    }
    total = total * 1.0875

    const newPurchase ={
      id: purchaseId,
      name: purchase.user.name,
      email: purchase.user.email,
      order: purchase.shoppingCart,
      total: total,
      createdAt: createdAt
    }

    storage.get("purchases").push(newPurchase).write()
    return newPurchase

}
}

module.exports = Store;
