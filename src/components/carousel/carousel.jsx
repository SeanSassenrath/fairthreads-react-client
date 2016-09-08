import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import SlickNextArrow from '../slick-next-arrow/slick-next-arrow.jsx';
import SlickPrevArrow from '../slick-prev-arrow/slick-prev-arrow.jsx';
import CSSModules from 'react-css-modules';
import styles from './carousel.css';

class Carousel extends Component {

  render() {
    let {
      products,
    } = this.props;

    let key = 0;

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: <SlickPrevArrow />,
      nextArrow: <SlickNextArrow />
    }
    return(
      <div>
        <Slider {...settings}>
          {
            products.map((product, i) => {
              return (
                <div key={key++} styleName="slide-container">
                {console.log('key', key)}
                  <img src={product.imageOriginal} styleName='slide-image' style={{objectFit: product.objectFit}}/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}

export default CSSModules(Carousel, styles);
