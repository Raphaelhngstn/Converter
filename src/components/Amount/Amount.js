import React from 'react';
import "./Amount.scss";
import CountUp from 'react-countup';

const Amount = ({currency, value}) => {
  return (
    <footer className="amount">
    <CountUp
      className="amount-value"
      end={value}
      decimals={6}
      duration={0.6}
      decimal=","
    />
    <p className="amount-currency">{currency}</p>
  </footer>
  )
}

export default Amount;