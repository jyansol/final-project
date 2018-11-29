import React, { Component } from 'react';

export default class ProductDetailView extends Component {
  static defaulProps = {
    id: null,
    title: '',
    description: '',
    mainImgUrl: '',
    detailImgUrls: [],
  };
  render() {
    const { id, title, description, mainImgUrl, detailImgUrls } = this.props;
    return (
      <div>
        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img src={detailImgUrls} alt={title} />
        ))}
      </div>
    );
  }
}
