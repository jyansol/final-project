import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import UserProvider from './contexts/UserContext';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            {/* exact prop이 있을 때는 주소가 정확히 일치해야 페이지가 그려짐 */}
            {/* exact prop이 없을 때는 주소가 path로 시작하기만해도 페이지가 그려짐 */}
            {/* exact를 사용하지 않는다면 위치변경 */}
            <Route exact path="/" component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/login" component={LoginPage} />
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
