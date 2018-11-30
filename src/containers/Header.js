import React from 'react';
import HeaderView from '../components/HeaderView';
import { withUser, UserConsumer } from '../contexts/UserContext';

export default function Header(props) {
  return (
    <UserConsumer>
      {value => <HeaderView key={value.username} {...value} />}
    </UserConsumer>
  );
}

// 실무에서 HOC로 presentation 컴포넌트를 감싸서 사용
// headerview를 최대한 pure하게 사용하기 위해
// provider와 연동
// Layout도 provider와의 의존성이 생김

// username이 바뀔때 상태가 초기화 됨
// redirect를 해서 똑같은 페이지로 넘기는 경우에서 상태를 가지고 있는데, 상태가 날아가지 않아서 화면이 다시 그려지지 않는 경우
// 이때, key를 다르게 넣어줘서 다시그리게함
