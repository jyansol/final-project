import React, { Component } from 'react';
import ProductList from '../containers/ProductList';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Homee</h1>
        <ProductList />
        {/* <p>API_URL={process.env.REACT_APP_API_URL}</p> */}
      </div>
    );
  }
}
