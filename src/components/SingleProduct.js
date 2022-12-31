import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    //console.log(cart);
    return (
        <div className="products">
            <Card>
                <Card.Img variant='top' src={prod.image} alt={prod.name} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle>
                        <span>$ {prod.price.split(".")[0]}</span>
                        {prod.fastDelivery ? (
                            <div>fast Delivery</div>
                        ) : (
                            <div>4 days Delivery</div>
                        )}
                        <Rating rating={prod.ratings} />
                    </Card.Subtitle>
                    {cart.some(p => p.id === prod.id) ? (//if this prod inside of cart,then render 'remov frm crt' 
                        <Button 
                            onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                });
                             }}
                         variant="danger">Remove from Cart</Button>

                    ) : (
                        <Button
                            onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: prod,//prod ie curr being rendered
                                });

                            }}
                            disabled={!prod.inStock}>
                            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                        </Button>
                    )}

                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct;
//some()=check if dat particular thng exists inside array or not
//payload-ie product simply being rendered here