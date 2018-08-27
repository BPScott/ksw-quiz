import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    meta: PropTypes.string,
  };

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
