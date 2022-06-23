import * as React from "react"
import "./ProductDetail.css"
import NotFound from "../NotFound/NotFound"
import ProductView from "../ProductView/ProductView"
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
const URL = 'https://codepath-store-api.herokuapp.com/store/:'

export default function ProductDetail(props) {
    const [product, setProduct] = React.useState(0)
    const params = useParams()
    React.useEffect(() => {
        try {
        async function fetchData() {
          const response = await axios.get(URL + params.productId)
          setProduct(response.data.product)

        fetchData();
        }
        }
        catch {
            setProduct(null)
        }
      }, [])

      if(product==0) {
          return(<h1 className="loading">Loading...</h1>)
      }
      if(product==Null) {
          return(<NotFound></NotFound>)
      }
    return (
        <div className="product-detail">
            <ProductView product={product} productId={product.id} quantity={product.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}></ProductView>
        </div>
    )
}
