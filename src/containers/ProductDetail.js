import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';

export default class ProductDetail extends Component {
  render() {
    const product = {
      id: 1,
      title: 'zz',
      description: 'zzzz',
      mainIngUrl: '',
      detailImgUrls: [''],
    };
    return (
      <div>
        <ProductDetailView {...product} />
      </div>
    );
  }
}
