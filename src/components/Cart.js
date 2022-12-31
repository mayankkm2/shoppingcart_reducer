import { useEffect, useState } from "react";
import { ListGroup,Row,Col, Form,Image  } from "react-bootstrap";
import { CartState } from "../context/Context";
import {  Button } from "react-bootstrap";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
 const { 
    state:  {cart},
     dispatch} = CartState();

    const [total, setTotal]  = useState();

    useEffect(() => {
       setTotal(cart.reduce((acc, curr) => acc+ Number(curr.price)* curr.qty, 0)); 
    },[cart])

    return (
        <div className="home">
           <div className="productContainer">
            <ListGroup>
                { cart.map((prod) => (
                 <ListGroup.Item key={prod.id}>
                  <Row >
                     <Col md={2}>
                        <Image src={prod.image} alt={prod.name} fluid rounded/> {/* fluid-takin full width of secton */}
                     </Col>
                    <Col md={2}>
                        <span>{prod.name}</span>
                    </Col>   
                    <Col md={2}>$ {prod.price}</Col>    
                    <Col md={2}>
                     <Rating rating={prod.ratings}/>      
                     </Col>  
                     <Col md={2}> {/*prod.qty- renderin to disply how mch qty is in our cart */}
                       <Form.Control  
                       as="select"  
                       value={prod.qty}
                       onChange= {(e) =>
                        dispatch({
                            type:"CHANGE_CART_QTY",
                            payload:{
                                id: prod.id,
                                qty: e.target.value,
                            },
                        }) 
                       }
                       >
                         {[...Array(prod.inStock).keys()].map((x) => (//if stock has 5 items,its goin to map nd render an optiion
                            <option key={x+1}>{x+1}</option>
                         ))}
                       </Form.Control>
                      </Col>  
                      <Col md={2}>
                        <Button
                        typw="button"
                        variant="light"
                        onClick={() => 
                           dispatch({
                            type:"REMOVE_FROM_CART",
                            payload: prod
                           }) 
                        }
                        >
                          <AiFillDelete fontSize="20px"/>
                        </Button>
                      </Col>
                   </Row>
                </ListGroup.Item>
                ))}
            </ListGroup>
            </div> 
            <div className="filters summary"> {/* summry ll inc width */}
                <span className="title">Subtotal ({cart.length}) items</span>
                <span span={{ fontWeight: 700, fontSize: 20}}>Total: ${total}</span>
                <Button>Proceed to check out</Button>
            </div>
        </div>
    )
 }
 
 export default Cart;