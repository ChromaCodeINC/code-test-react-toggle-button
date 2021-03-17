import React from 'react';

import { storiesOf } from '@storybook/react';
import '../../less/styles.less';

import { ToggleButton } from '../Common/ToggleButton';
import { action } from '@storybook/addon-actions';

storiesOf('ToggleButton', module)
  .addDecorator(story => (
    <div style={ { width: "200px", padding: '1em' } }>
      { story() }
    </div>
  ))
  .add('unchecked', () => (
    <ToggleButton
      labelText={ 'Toggle Button' }
      onClick={ action('clicked') }
    />
  ))
  .add('checked', () => (
    <ToggleButton
      labelText={ 'Toggle Button' }
      isChecked={ true }
      onClick={ action('clicked') }
    />
  ))
  .add('loading', () => (
    <ToggleButton
      labelText={ 'Toggle Button' }
      isLoading={ true } />
  ))
  .add('disabled (unchecked)', () => (
    <ToggleButton
      labelText={ 'Toggle Button' }
      isChecked={ false }
      isDisabled={ true }
      onClick={ action('clicked') }
    />
  ))
  .add('disabled (checked)', () => (
    <ToggleButton
      labelText={ 'Toggle Button' }
      isChecked={ true }
      isDisabled={ true }
      onClick={ action('clicked') }
    />
  ));
