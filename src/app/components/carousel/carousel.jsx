import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import SlickNextArrow from '../slick-next-arrow/slick-next-arrow.jsx';
import SlickPrevArrow from '../slick-prev-arrow/slick-prev-arrow.jsx';
import CSSModules from 'react-css-modules';
import styles from './carousel.css';

class Carousel extends Component {

  constructor(...args) {
    super(...args)
    this.onSlideHover = this.onSlideHover.bind(this)
  }

  onSlideHover(i) {
    this.setState({hoveredSlide: i})
  }

  render() {
    let {
      products,
    } = this.props;

    let key = 0;

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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
                <a
                  href={product.vendUrl}
                  target='_blank'
                  key={key++}
                  styleName="slide-container"
                  onMouseOver={this.onSlideHover(i)}
                >
                  <img
                    src={product.imageOriginal}
                    styleName='slide-image'
                    style={{objectFit: product.objectFit}}
                  />
                  <div styleName={this.state.hoveredSlide ? 'product-details' : display: 'none'}>
                    <div>{product.name}</div>
                    <div>{product.brand}</div>
                    <div>{product.salePrice ? `$${Math.ceil(product.salePrice)}` : `$${Math.ceil(product.price)}`}</div>
                  </div>
                </a>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}

export default CSSModules(Carousel, styles);
