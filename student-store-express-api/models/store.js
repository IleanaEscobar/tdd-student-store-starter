const { storage } = require("../data/storage")


class Store {
    // List all products currently in the db.json file
    // Fetch a single product by its id
    // Create a purchase order

    // static async listTransactions() {
    //     // list all items in the transactions array
    //     const transactions = storage.get("transactions").value()
    //     return transactions
    //   }
    static async listProducts() {
        const products = storage.get("products").value()
        return products
    }

    static async fetchProductById(productId) {
        const product = storage
        .get("products")
        .find({ id: Number(productId) })
        .value()
        return product
    }

    // static fetch(key) {
    //     return storage.get(key)
    // }

    // static purchaseOrder() {

    // }
}

module.exports = Store;
