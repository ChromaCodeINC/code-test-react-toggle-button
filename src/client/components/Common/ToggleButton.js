import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from './Loader';

export const ToggleButton = ({ labelText, isLoading }) => (
  <div className="toggle-button">
    <div className="toggle-button__label" data-label-text={ labelText }>
      { labelText }
      { isLoading && <Loader /> }
    </div>
  </div>
);

ToggleButton.propTypes = {
  customCssClass: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
