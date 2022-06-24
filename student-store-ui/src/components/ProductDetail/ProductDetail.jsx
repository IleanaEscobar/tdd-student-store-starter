import * as React from "react"
import "./ProductDetail.css"
import NotFound from "../NotFound/NotFound"
import ProductView from "../ProductView/ProductView"
import { useParams} from "react-router-dom"
import axios from 'axios'
const URL = 'https://codepath-store-api.herokuapp.com/store/'

export default function ProductDetail(props) {
    const [product, setProduct] = React.useState({})
    const params = useParams();

    React.useEffect(async () => {
        try {
        //   async function fetchData() {
          const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${params.productId}`)
          console.log("response: " + JSON.stringify(response.data.product))
          setProduct(response.data.product)
        }
        catch(e){
            console.log(e)
        }

    }, [])

      if(product==0) {
          return(<h1 className="loading">Loading...</h1>)
      }
      if(product==null) {
          return(<NotFound></NotFound>)
      }
    return (
        <div className="product-detail">
            <ProductView product={product} productId={product.id} quantity={product.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart}></ProductView>
        </div>
    )
}
