import React from 'react';
import Currency from '../Currency/Currency';
import './Currencies.scss';
import { useState } from 'react';

const Currencies = ({ currencies, setCurrency }) => {
    

    
    
  return (
    
    <div className="currencies">
        <ul className="currencies-list">
          {currencies.map((currency) => (
            <Currency
              key={currency.name}
              name={currency.name}
              onClick={() => {
                setCurrency(currency);
              }}
            />
          ))}
        </ul>
      </div>
  )
}

Currencies.propTypes = {}

export default Currencies