import React from 'react';
import "./Currency.scss";

const Currency = ({
    name,
    className,
    ...rest
  }) => (
    <li
      className={`currency ${className}`}
      {...rest}
    >
      {name}
    </li>
  );

Currency.propTypes = {}

export default Currency