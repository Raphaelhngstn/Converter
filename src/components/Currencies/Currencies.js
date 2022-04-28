import React from 'react';
import Currency from '../Currency/Currency';
import './Currencies.scss';

const Currencies = ({ currencies }) => {
  return (
    <div className="currencies">
        <ul className="currencies-list">
          {currencies.map((currency) => (
            <Currency
              key={currency.name}
              name={currency.name}
            />
          ))}
        </ul>
      </div>
  )
}

Currencies.propTypes = {}

export default Currencies