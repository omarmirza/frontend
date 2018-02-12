import React from 'react';

import { UInput } from './UInput';

const UPasswordInput = (props) => {
  return (
    <UInput
      secureTextEntry={true}
      onFocus={props.onFocus || null}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

export { UPasswordInput };
