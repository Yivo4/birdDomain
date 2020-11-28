import React from 'react';
import {Link} from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import Galeria from '../../components/Galeria/Galeria';
import HeroImg from '../../components/HeroImg/HeroImg';
import Banner from '../../components/Publicidad/Banner'
import '../Home/Home.css'


const Home = () => (
    
    <Link to = '/'>
        <HeroImg/>
        <div className="home_separador"><h1>Tours</h1></div>
        <Carrousel/>
        <div className="home_separador"></div>
        <Galeria/>
        <div className="home_separador"></div>
        <Banner/>
    </Link>
);

export default Home;