import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = ({tripCost, options}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.node,
};

export default OrderForm; 