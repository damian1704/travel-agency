import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, setOptionValue, limits, price}) => (
  <div className={styles.inputSmall}>
    <input
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
    ({formatPrice(price)})
  </div>

);

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
  limits: PropTypes.any,
  price: PropTypes.any,
};

export default OrderOptionNumber;
