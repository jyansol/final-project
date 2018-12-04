import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  // 카테고리 필터링

  render() {
    const { location } = this.props;
    // console.log(location.search); 이 문자열을 분석해서 카테고리가 무엇인지 분석해야함 -> URLsearchParams
    const p = new URLSearchParams(location.search);
    console.log(p.get('category'));
    const category = p.get('category');
    // 쿼리스트링에서 정보를 뽑아낼 떄 URLSearchParams 사용함

    return (
      <Layout>
        <h1>Home</h1>
        <Link to="/">ALL</Link>
        <Link to="/?category=top">TOP</Link>
        <Link to="/?category=pants">PANTS</Link>
        <ProductList key={category} category={category} />
        {/* <p>API_URL={process.env.REACT_APP_API_URL}</p> */}
      </Layout>
    );
  }
}
