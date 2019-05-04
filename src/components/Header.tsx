import React from 'react';

interface Props {
  title: string;
  meta?: string;
}

export default function Header({title, meta}: Props) {
  return (
    <h2 className="header">
      <span>{title}</span>
      {meta && ' '}
      {meta && <span className="header__meta">{meta}</span>}
    </h2>
  );
}
