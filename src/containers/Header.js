import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';

export default withUser(HeaderView);

// 실무에서 HOC로 presentation 컴포넌트를 감싸서 사용
// headerview를 최대한 pure하게 사용하기 위해
// provider와 연동
// Layout도 provider와의 의존성이 생김
