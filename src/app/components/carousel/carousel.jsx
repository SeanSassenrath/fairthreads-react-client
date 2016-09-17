import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import SlickNextArrow from '../slick-next-arrow/slick-next-arrow.jsx';
import SlickPrevArrow from '../slick-prev-arrow/slick-prev-arrow.jsx';
import CSSModules from 'react-css-modules';
import styles from './carousel.css';

class Carousel extends Component {

  constructor(...args) {
    super(...args)
    this.state = {
      hoveredSlide: null
    }
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }

  onMouseOver(i) {
    this.setState({hoveredSlide: i})
  }

  onMouseOut() {
    this.setState({hoveredSlide: null})
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
                  onMouseOver={() => this.onMouseOver(i)}
                  onMouseOut={() => this.onMouseOut()}
                >
                  <div styleName='slide-image-container'>
                    <img
                      src={product.imageOriginal}
                      style={{objectFit: product.objectFit}}
                    />
                    <div styleName={this.state.hoveredSlide === i ? 'product-details' : 'none'}>
                      <div>{product.name}</div>
                      <div>{product.brand}</div>
                      <div>{product.salePrice ? `$${Math.ceil(product.salePrice)}` : `$${Math.ceil(product.price)}`}</div>
                    </div>
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
