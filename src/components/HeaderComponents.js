import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button, InputGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/UserActions';



const HeaderComponents = () => {
    const { userInfo } = useSelector((state) => state.userRegisterLogin.userRegisterLogin);
    const dispatch = useDispatch()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/"><Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand></LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup>
                            <DropdownButton id="dropdown-basic-button" title="All">
                                <Dropdown.Item >Books</Dropdown.Item>
                                <Dropdown.Item >Electronics</Dropdown.Item>
                                <Dropdown.Item >Cars</Dropdown.Item>

                            </DropdownButton>
                            <Form.Control type="text" placeholder="Search in Shop..." />
                            <Button variant="warning"><BiSearch /></Button>
                        </InputGroup>
                    </Nav>
                    <Nav>
                        {
                            userInfo.isAdmin ? (<LinkContainer to="/admin/orders">
                                <Nav.Link >Admin
                                    <span className='position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
                                </Nav.Link>


                            </LinkContainer>) : userInfo.firstName && !userInfo.isAdmin ? (<NavDropdown title={`${userInfo.firstName} ${userInfo.lastName}`} id="collasible-nav-dropdown">
                                <NavDropdown.Item eventKey={"/user/my-orders"} as={Link} to="/user/my-orders">My Orders</NavDropdown.Item>
                                <NavDropdown.Item eventKey={"/user"} as={Link} to="/user">My profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => dispatch(logout())} >Logout</NavDropdown.Item>

                            </NavDropdown>) : (<> <LinkContainer to="/login">
                                <Nav.Link >Login</Nav.Link>
                            </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link>Register</Nav.Link>
                                </LinkContainer></>)
                        }





                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <Badge pill bg="danger">2</Badge> <AiOutlineShoppingCart /> Cart
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderComponents;