import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  static defaultProps = {
    //표시해주어야하는 상품의 id
    productId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      products: {
        loading: true,
        id: null,
        title: '',
        description: '',
        mainImgUrl: '',
        detailImgUrls: [''],
      },
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    const { data: products } = await api.get(`/products/${productId}`);
    this.setState({
      ...products,
      loading: false,
    });
  }

  render() {
    return (
      <div>
        <ProductDetailView {...this.state} />
      </div>
    );
  }
}
