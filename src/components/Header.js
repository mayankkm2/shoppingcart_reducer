import { Container, FormControl, Nav, Navbar, Dropdown, Badge, Button } from "react-bootstrap";//constainer for center and provide spaces on bothsides
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from "../context/Context";


const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState();

  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand >
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl
            style={{ width: 500 }}
            placeholder='Search a product'
            className="m-auto"
            
            onChange= {(e) =>
              productDispatch({
                  type:"FILTER_BY_SEARCH",
                  payload:e.target.value,
                  }) 
             }
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>

            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color="white" fontSize='25px' />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>

              {cart.length > 0 ? (
                <>
                  {
                    cart.map((prod) => (
                      <span className="cartitem" key={prod.id}>{/*  display: flex; so all of dem in single line//flex: 1;-it takes full width of comp,so del btn nd img puhes in side */}
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>$ {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })}
                        />
                      </span>
                    ))
                  }
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0px 10px" }}>
                      Go to Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is empty </span>
              )}

            </Dropdown.Menu>


          </Dropdown>;
        </Nav>

      </Container>
    </Navbar>

  );
}

export default Header;
//!important- to override the styles of bootstrap
//FormControl-as input tag /m-auto-create equal spacin both sides