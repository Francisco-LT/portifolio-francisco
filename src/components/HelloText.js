import { Component } from 'react';
import {Carousel} from 'react-bootstrap';

class HelloText extends Component {
  render() {
    return (
      <div className="helloText">
        <p>Página Inicial</p>
        <div>
          {/* <Carousel>
            <Carousel.Item>
              <img 
                className="d-block w-100"
                src='./src/images/'
                alt="First slide"/>
            </Carousel.Item>
          </Carousel> */}
          <img src="../images/imagem1.jpg"/>
        </div>
      </div>
    )
  }
}

export default HelloText;