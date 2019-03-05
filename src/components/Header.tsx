import React from 'react';

interface Props {
  title: string;
  meta?: string;
}

export default class Header extends React.Component<Props> {
  render() {
    return (
      <h2 className="header">
        <span>{this.props.title}</span>
        {this.props.meta && ' '}
        {this.props.meta && (
          <span className="header__meta">{this.props.meta}</span>
        )}
      </h2>
    );
  }
}
