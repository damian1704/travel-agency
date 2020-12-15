import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  promoDescription: '.promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without error', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render the description', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate));
  }
};

const checkDescriptionAtDay = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(date);

    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDay('2020-03-20', '93 days to summer!');
  checkDescriptionAtDay('2020-06-15', '6 days to summer!');
  checkDescriptionAtDay('2019-11-20', '214 days to summer!');
  checkDescriptionAtDay('2020-06-20', '1 day to summer!');
});

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDay('2020-06-21', '');
  checkDescriptionAtDay('2020-07-28', '');
  checkDescriptionAtDay('2020-09-23', '');
});