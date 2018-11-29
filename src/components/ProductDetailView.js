import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
    id: null,
    title: '',
    description: '',
    mainImgUrl: '',
    detailImgUrls: [],
    options: [
      // {
      //   "id": 1,
      //   "productId": 1,
      //   "title": "Medium",
      //   "price": 30000
      // },
    ],
    // 장바구니 추가시 호출되는 함수
    // 옵션 id와 수량을 인수로 넘겨야함
    onCreateCartItem: () => {},
  };
  constructor(props) {
    super(props);

    this.state = {
      amount: 1,
      selectedOptionId: '',
    };
  }

  handleOptionChange(e) {
    this.setState({
      amount: 1,
      selectedOptionId: parseInt(e.target.value),
    });
  }

  handleAmountChange(e) {
    this.setState({
      amount: parseInt(e.target.value),
    });
  }

  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    const { amount, selectedOptionId } = this.state;
    const selectedOption = options.find(o => o.id === selectedOptionId);
    const totalPrice = selectedOption && selectedOption.price * amount;
    // electedOption의 값이 없다면, selectedOption 있다면, 가격
    return (
      <div>
        <select
          value={selectedOptionId}
          onChange={e => this.handleOptionChange(e)}
          required
        >
          <option disabled value="">
            선택하슈
          </option>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={amount}
          min="1"
          max="10"
          onChange={e => this.handleAmountChange(e)}
        />
        <div>가격: {totalPrice}</div>
        <button
          onClick={() => {
            const { selectedOptionId, amount } = this.state;
            if (selectedOptionId === '') {
              alert('옵션선택하슈');
            } else if (amount < 1) {
              alert('1 이상의 수량을 입력하슈');
            } else {
              this.props.onCreateCartItem(
                this.state.selectedOptionId,
                this.state.amount
              );
            }
          }}
        >
          CART
        </button>
        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img key={url} src={url} alt={title} />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
