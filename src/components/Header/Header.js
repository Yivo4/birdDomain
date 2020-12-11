import React, {useState, useContext} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import './Header.css'
import logo from '../Header/logo.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
//import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../SearchBar/SearchBar';
import HelpModal from '../ModalFaqs/ModalFaqs.js';
// import ModalIng from '../ModalLogin/ModalLogin';
// import ModalReg from '../ModalRegister/ModalRegister';
import AuthOptions from './AuthOptions';
import {UserContext} from "../../context/UserContext";



const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const { userData } = useContext(UserContext);
    // const [modalShowIng, setModalShowIng] = useState(false);
    // const [modalShowReg, setModalShowReg] = useState(false);

    return (
    <>
    <div className="myNav sticky-top">
    <div className= "firstrow mr-3 p-0 navbar navbar-expand-lg sticky-top">
    
    <Link style={{ textDecoration: 'none' }} to = '/' className="logo-wrapper" >
    <img className="logo" src = {logo} alt = "img-logo"></img> 
    </Link>
    <strong>Birds Domain</strong>
    
    <AuthOptions />

    </div> 
    
    

        <Navbar className="" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex justify-content-around">
            
            <SearchBar/>
            
                <Link style={{ textDecoration: 'none' }} to = '/'>
                <li className="nav-links-links">Home</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to = '/aves'>
                <li className="nav-links-links">Aves</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to = '/contacto'>
                <li className="nav-links-links">Contacto</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to = '/favoritos'>
                <li className="nav-links-links"><FontAwesomeIcon  icon={faStar} /></li>
                </Link>
                {userData.user ? (<>
                <Link style={{ textDecoration: 'none' }} to = '/cart'>
                <li className="nav-links-links"><FontAwesomeIcon  icon={faShoppingCart} /></li>
                </Link>
                </>) :
                <></>}
                <div className="nav-links-links" onClick={() => setModalShow(true)}><FontAwesomeIcon  icon={faQuestionCircle} /></div>           
                <HelpModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </>
            );
}

export default Header;
