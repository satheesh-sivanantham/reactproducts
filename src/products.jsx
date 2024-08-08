import './product.css';
import {ReactComponent as CartIcon} from './svg/cart.svg';
import productImg1 from './image/product-1.jpg'

const products = () => {
    function addToCart(){
        console.log('button clicked')
    }
    return(
        <div className="main-container">
            <div className='header'>
                <div className="logo">Shopping Mart</div>
                <div className="cart">
                    <button className='button'><CartIcon className="icon cart-icon" /> cart <span>0</span></button>
                </div>
            </div>
            <div className="banner">
                <div className="headings">
                <div className="main-heading">Shop in style</div>
                <div className="sub-heading">with this page homepage template</div>
                </div>
            </div>
            <div className="product-container">
                <div className="product-list">
                    <div className="product-details">
                        <div className="productimg">
                            <img src={productImg1} alt="" />
                        </div>
                        <div className="product-discreption">
                            <div className="product-name">Special item</div>
                            <div className="product-price"><span>$20.00</span> - <span>$$18.00</span></div>
                            <div className="addcart">
                                <button onClick={addToCart}>Add to cart</button>
                                {/* <button>Remove cart</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default products