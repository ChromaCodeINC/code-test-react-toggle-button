import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import noop from 'lodash/fp/noop';
import sinon from 'sinon';
import { ToggleButton } from '../ToggleButton';

describe('ToggleButton', () => {
  const defaultProps = { labelText: 'BUTTON', onClick: noop };

  it('should call onClick when not disabled', () => {
    const onClickSpy = sinon.spy();
    const component = shallow(<ToggleButton { ...defaultProps } onClick={ onClickSpy } />);
    component.simulate('click');
    expect(onClickSpy.called).to.equal(true);
  });

  it('should not call onClick when disabled', () => {
    const onClickSpy = sinon.spy();
    const component = shallow(<ToggleButton { ...defaultProps } isDisabled={ true } onClick={ onClickSpy } />);
    component.simulate('click');
    expect(onClickSpy.called).to.equal(false);
  });

  [
    { style: 'toggle-button--checked', isChecked: true },
    { style: 'toggle-button--unchecked', isChecked: false }
  ].forEach(testCase => {
    it(`should be styled as ${testCase.style} when the isChecked property is ${testCase.isChecked}`, () => {
      const component = shallow(<ToggleButton { ...defaultProps } isChecked={ testCase.isChecked } />);
      expect(component.prop('className')).to.include(testCase.style);
    });
  });

  [
    { isDisabled: true },
    { isDisabled: false }
  ].forEach(testCase => {
    it(`should be styled properly when the isDisabled property is ${testCase.isDisabled}`, () => {
      const component = shallow(<ToggleButton { ...defaultProps } isDisabled={ testCase.isDisabled } />);
      if (testCase.isDisabled) {
        expect(component.prop('className')).to.include('toggle-button--disabled');
      } else {
        expect(component.prop('className')).to.not.include('toggle-button--disabled');
      }
    });
  });

  // TODO: test that the Loader component is displayed when isLoading prop is true

  // TODO: test that the Loader component is not displayed when isLoading prop is false

  // TODO: test that button text is set to value of labelText prop

  // TODO: test that the custom css styling can be passed in as a prop and applied
});
