import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';

export default class HomePage extends Component {
  render() {
    return (
      <Layout>
        <h1>Homee</h1>
        <ProductList />
        {/* <p>API_URL={process.env.REACT_APP_API_URL}</p> */}
      </Layout>
    );
  }
}
