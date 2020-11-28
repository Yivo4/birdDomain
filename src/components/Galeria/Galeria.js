import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//config
import clienteAxios from '../../config/axios';
import { Modal } from 'react-bootstrap';
//config
//style
import '../Galeria/Galeria.css';
//libreria
import {Card} from 'react-bootstrap';

const Galeria = () => {

    const [galeria, setGaleria] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
useEffect(()=>{
    const getGaleria = async ()=>{
    await clienteAxios.get("/Aves")
    .then(response =>{
    setGaleria(response.data)
});
}
getGaleria();
},[]);

const imgGaleria = galeria.map(({ img }) => [img]);
const [selectedImg, setSelectedImg] = useState (imgGaleria[0]);
const [imgSource, setImgSource] = useState ();
function zoom(img){
    handleShow();
    setImgSource(img[0]);  
}

return (
    <>
        <div id="myModal" className="modal">
            <span id="close">&times;</span>
            <img className="modal-content" id="img01"/>
            <div id="caption"></div>
        </div>
        <div className="d-flex justify-content-around row mb-2">
            <div className="d-flex row mx-0 col-lg-6  col-md-6 justify-content-center align-content-center">
                {selectedImg ?
                <img src={selectedImg} alt="selected" className="imgMediana d-block img-fluid"></img> :
                <img src={imgGaleria[0]} alt="selected" className="imgMediana d-block img-fluid"></img>   
                }
            </div>
            <Modal id="modalSuccess container-fluid"show={show} onHide={handleClose}>                                                 
                <img className="img-fluid" src={imgSource} alt="img-aves"></img>  
            </Modal>
            <div className="d-flex row flex-wrap col-lg-4 col-md-4 mt-1">
                {imgGaleria.map((img,index) => (
                    <Link className=" col-xs-12 col-sm-12 col-md-4 col-lg-3 m-1 p-0">
                        <Card className="p-0 m-0 card-ave">
                            <Card.Body key={index} className="p-0 m-0">
                                <div>
                                    <Card.Img className="imagen_pequeña" src={img}  alt="img-aves" onClick = {() => setSelectedImg (img)} onDoubleClick={()=>zoom(img)}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    </>
);
}
export default Galeria