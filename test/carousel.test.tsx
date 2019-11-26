import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Carousel from '../src'

Enzyme.configure({
  adapter: new Adapter()
});

describe('render gallery component', () => {
  let images: string[] = []
  for (let i = 0; i < 5; i++) {
    images.push(`/images/${i}.jpg`)
  }

  let doc: Enzyme.ShallowWrapper;
  beforeEach(() => {
    act(() => {
      doc = shallow(<Carousel images={images} nextMsec={3000} />);
    });
  });

  it('show bar', () => expect(doc.find('.bar')).toHaveLength(5));

});
