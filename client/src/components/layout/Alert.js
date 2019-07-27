import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Transition, animated } from 'react-spring/renderprops';
import { Alert as Alert_evergreen } from 'evergreen-ui';
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <Transition
      native
      items={alert !== null}
      config={{ duration: 200 }}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {show =>
        show &&
        (props => (
          <animated.div style={props}>
            <div key={alert.id} className={`alert`}>
              <Alert_evergreen
                title={alert.msg}
                intent={alert.alertType}
                marginBotton={32}
              />
            </div>
          </animated.div>
        ))
      }
    </Transition>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
