import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

export default withRouter(withUser(HeaderView));

// 실무에서 HOC로 presentation 컴포넌트를 감싸서 사용
// headerview를 최대한 pure하게 사용하기 위해
// provider와 연동
// Layout도 provider와의 의존성이 생김

// username이 바뀔때 상태가 초기화 됨
// redirect를 해서 똑같은 페이지로 넘기는 경우에서 상태를 가지고 있는데, 상태가 날아가지 않아서 화면이 다시 그려지지 않는 경우
// 이때, key를 다르게 넣어줘서 다시그리게함 => key로 상태 초기화
// 화면이 다시 그려져야하는데 안그려진다. => key !!!!!!!!!!!!!!!

// 상태없이 redirect 시키는 방법
// redirect component 의 역할을  history 객체의 메소드로 대체 => 주소표시줄의 상태를 바꿀 수 있다.

// 01. redirect 렌더링
// 02. history 객체 메소드

// match, location, history
// withRouter로 둘러싸주면 headerView가 match, location, history를 받게됨
