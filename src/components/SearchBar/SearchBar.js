import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//styles
import "bootstrap/dist/css/bootstrap.css";
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Form, Button} from 'react-bootstrap';
//config
import clienteHeroku from '../../config/prod';
// import { useHistory } from "react-router-dom";



const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [tours, setTours] = useState([]);
//   const history = useHistory();

  useEffect(()=>{
    const getTours = async ()=>{
    await clienteHeroku.get("/tours")
    .then(response =>{
    setTours(response.data)
});
}
getTours();
},[]);

    return (
<div>
    <div >
    <Form inline className="searchForm">
          <input type="search" 
            id="searchBar" 
            className="inputSearch mr-sm-2"
            placeholder="Search..."
            onChange={(e => {setSearchText(e.target.value)})}
            /> 
            <Button  variant="success"><FontAwesomeIcon  icon={faSearch} /></Button>
      </Form>
    </div>

    <div>
        {tours.filter((val)=> {
            if (searchText === ""){
            } else if (val.title.toLowerCase().includes(searchText.toLowerCase())){
                return val
            }
        }).map((val,key)=>{
            return (
                <Link to={`/tours/${val._id}`} onClick = {() => setSearchText ("")}>
                    {/* {history.push(`/tours/${val._id}`)} */}
                <div key={val._id} className="searchResult row mt-3">
                    <div clasName="mr-5">
                    <p className="nav-links-links tourContainer">{val.title}</p>
                    </div>
                    <div className="searchImgContainer">
                        <img className="searchImg" src={val.img} alt="img-search"></img>
                    </div>
                </div>
                </Link>
            )
        })
        }
    </div>

    </div>
    );
}

export default SearchBar;