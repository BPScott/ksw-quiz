import React from 'react';

interface Props {
  title: string;
  meta?: string;
}

export default function(props: Props) {
  return (
    <h2 className="header">
      <span>{props.title}</span>
      {props.meta && ' '}
      {props.meta && <span className="header__meta">{props.meta}</span>}
    </h2>
  );
}
