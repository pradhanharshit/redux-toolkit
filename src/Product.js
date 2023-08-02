import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './store/cartSlice';
import { getProducts } from './store/productSlice';
import StatusCode from './utils/StatusCode';

const Product = () => {

    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products)

    const addToCart = (product) => {
        dispatch(add(product))
    }

    

    useEffect(() => {
        dispatch(getProducts())
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json())
        // .then(result => setProducts(result))
    }, [])

    if(status === StatusCode.LOADING){
        return <p style={{marginTop: "150px"}}>Loading...</p>
    }

    if(status === StatusCode.ERROR){
        return <p style={{marginTop: "150px"}}>Sorry something went wrong please try after sometime</p>
    }
  
    const cards = products.map(product => {
        return (
            <div key={product.id} style={{display: "flex", flexDirection: "column", border: "3px solid black", textAlign: "center", height: "300px", width: "300px", marginBottom: "20px"}}>
            <div>
            <img src={product.image} alt="" style={{height: "130px", width: "100px"}}/>
            </div>
            <span style={{margin: "5px"}}>{product.title}</span>
             <span style={{margin: "5px"}}>INR:{product.price}</span>
             <div style={{textAlign: "center"}}>
              
            <button onClick={() => addToCart(product)} style={{margin: "5px", padding: "5px", width: "100px", backgroundColor: "rgb(96 165 250)", color: "white"}}>Add to cart</button>
             </div>
          </div>
        )
    })
   
    return (
      <>
        <div style={{textAlign: "center", marginTop: "105px"}}>
        <h1>Product Dashboard</h1>
        </div>
            <div style={{display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "space-evenly"}}>
            {cards}
        </div>
      </>
    );
}

export default Product