import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class HeaderView extends Component {
  render() {
    const { username, logout, history } = this.props;
    console.log('유저네임 ::', username);

    return (
      <div>
        <Link to="/">LOGO</Link>
        {username ? (
          <>
            <div>{username}</div>
            <button
              onClick={() => {
                logout();
                // this.setState({
                //   logoutSuccess: true,
                // });
                //화면이 제대로 업데이트가 되지 않음
                //element type이나 key가 바뀌면 상태가 날아감
                // 사용자를 홈페이지로 보내려고
                history.push('/');
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    );
  }
}
