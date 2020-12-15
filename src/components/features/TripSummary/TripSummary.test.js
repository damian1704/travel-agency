import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} />);
    
    expect(component.find('Link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should render correct img', () => {
    const expectedImageAlt = 'Lorem ipsum';
    const expectedImageSrc = 'image.jpg';
    const component = shallow(<TripSummary image={expectedImageSrc} name={expectedImageAlt} />);

    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);
    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '1000';
    const expectedDays = 7;

    const component = shallow(<TripSummary  name={expectedName} cost={expectedCost} days={expectedDays}/>);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').contains(<span>{expectedDays} days</span>)).toEqual(true);
    // expect(component.find('.details').contains(<span>from {expectedCost}</span>)).toEqual(true);
  });

  it('should render correct tags', () => {
    const expectedTags = ['Tag 1', 'Tag 2', 'Tag 3'];

    const component = shallow(<TripSummary  tags={expectedTags}/>);

    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render tags when not defined', () => {
    const tags = [];
    const component = shallow(<TripSummary  tags={tags}/>);

    expect(component.exists('.tags')).toEqual(false);
  });
});