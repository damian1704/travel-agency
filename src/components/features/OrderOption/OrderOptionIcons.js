import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';
import clsx from 'clsx';

const OrderOptionIcons = ({values, required, setOptionValue, currentValue}) => (
  <div className={styles.input}>
    {required ? '' : (
      <div onClick={() => (setOptionValue(''))}><Icon name='times-circle' />none</div>
    )}
    {values.map(value => (
      <div 
        className={ value.id == currentValue ? clsx(styles.iconActive, styles.icon) : styles.icon }
        key={value.id}
        onClick={() => (setOptionValue(value.id))}
      >
        
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
        
      </div>
    ))}
    
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.any,
  required: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  
};

export default OrderOptionIcons;