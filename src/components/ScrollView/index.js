import * as React from 'react';
import { ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

export default function Scroll({ children, style }) {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <ScrollView style={style} ref={ref}>{children}</ScrollView>;
}
