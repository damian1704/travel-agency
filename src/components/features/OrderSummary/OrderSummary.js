import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';

import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import {promoPrice} from '../../../utils/promoPrice';
import settings from '../../../data/settings';

const OrderSummary = ({tripCost, options}) => (
  <div className={styles.component}>
    <h2>Price from: <strong>{formatPrice(promoPrice(calculateTotal(tripCost, options), settings.happyHourDiscount))}</strong></h2>
    <p>Standard price: {formatPrice(calculateTotal(tripCost, options))}</p>
  </div>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.any,
  options: PropTypes.any, 
};

export default OrderSummary;
