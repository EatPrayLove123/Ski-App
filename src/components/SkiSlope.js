import Card from 'react-bootstrap/Card';
import { MdLocationPin } from 'react-icons/md';
import { WiThermometer } from "react-icons/wi";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useEffect, useState } from 'react';
import axios from "axios";



function SkiSlope (props) {
    const [temp, setTemp]= useState('');
    const [main, setMain]= useState('');
    const [humidity, setHumidity]= useState('');
    const [windSpeed, setWindSpeed]= useState('');
    const [show, setShow] = useState(false);
    

    const APIkey='230457cb8bfa01aa044e682d73804dd7'
    const cardTitle= `${props.name} - ${props.city}`

   
    useEffect(() => {
        axios.get (`http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${APIkey}`)
             .then((response) => {
              setTemp(response.data.main.temp);
              setHumidity(response.data.main.humidity);
              setWindSpeed(response.data.wind.speed)
              setMain(response.data.weather[0].main)

       })
     }, );
  
     let tempC = parseInt( temp-273.15);

  return (
      <>      
         <Card  className='cards__item'>
            
            <Card.Body className="card-body">
                <Card.Title className='cards__item__text'>{cardTitle}</Card.Title>
                <Card.Img  className="card-image"  src={props.imgIarna} /> <br /> 
                <Card.Link  href={props.location}> < MdLocationPin /> Location </Card.Link>
                <Card.Text >
                    < WiThermometer/> Temperatura: { tempC } °C,  {main}
                    <p> Humidity: {humidity} % , WindSpeed: {windSpeed} km/h</p>
                 </Card.Text>
                <Card.Text>
                     
                </Card.Text>
               
                <Button variant="primary" className='cards .btn-group' onClick={() => setShow(true)}>
          See More
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {cardTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>Oras: {props.city}</li>
              <li>Lungimea Partiei : {props.length}</li> 
              <li>Altitude Plecare: {props.altitudinePlecare}</li> 
              <li>Altitudine Sosire: {props.altitudineSosire}</li>
              <li>Transport: {props.transport}</li> 
              <li>Nocturna: {props.nocturna}</li>
              
            </ul>
          </Modal.Body>
        </Modal>
            </Card.Body>
        </Card>
      
        </>
    )
  } 
export default SkiSlope