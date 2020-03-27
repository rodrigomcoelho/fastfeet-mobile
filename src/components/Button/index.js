import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({
  children,
  loading,
  style,
  ...rest
}) {
  return (
    <Container {...rest} style={style}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  backgroundColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Button.defaultProps = {
  loading: false,
  style: {}
};
