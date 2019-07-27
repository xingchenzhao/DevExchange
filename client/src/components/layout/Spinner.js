import React, { Fragment } from 'react';
// import spinner from './spinner.gif';
import { Spinner, Pane } from 'evergreen-ui';

export default () => (
  <Fragment>
    <Pane
      display='flex'
      alignItems='center'
      justifyContent='center'
      height={400}
    >
      <Spinner size={100} />
    </Pane>
  </Fragment>
);
