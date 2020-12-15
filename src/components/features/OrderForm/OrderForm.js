import React from 'react';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import Button from '../../common/Button/Button';

import {Row, Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';

import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (tripId, countryCode, tripName, options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripId, 
    countryCode,
    tripName,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  payload.name === '' || payload.contact === '' ? 
    alert('Please fill Name and Contact info') 
    : 
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
        alert('Order sent!');
      });
};


const OrderForm = ({tripCost, options, setOrderOption, tripName, tripId, countryCode}) => (
  
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption currentValue ={options[option.id]} setOrderOption={setOrderOption} {...option}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
      <Button onClick={() => sendOrder(tripId, countryCode, tripName, options, tripCost)}>Order now!</Button>
    </Col>
  </Row>
);


OrderForm.propTypes = {
  tripCost: PropTypes.any,
  options: PropTypes.any,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.any,
  tripId: PropTypes.any,
  countryCode: PropTypes.any,
};

export default OrderForm;