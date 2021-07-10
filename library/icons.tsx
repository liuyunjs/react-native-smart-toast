import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { ActivityIndicator, View } from 'react-native';
import { configure } from './configure';

export type IconProps = {
  size: number;
  tintColor: string;
};

export const Loading: React.FC<IconProps> = ({ size, tintColor }) => {
  return <ActivityIndicator color={tintColor} size={size} />;
};

export const Success: React.FC<IconProps> = ({ size, tintColor }) => (
  <View style={{ width: size, height: size }}>
    <Svg width="100%" height="100%" viewBox="0 0 24 24">
      <Path
        fill={tintColor}
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zm-1.172-6.242l5.809-5.808.848.849-5.95 5.95a1 1 0 01-1.414 0L7 12.426l.849-.849 2.98 2.98z"
      />
    </Svg>
  </View>
);

export const Warn: React.FC<IconProps> = ({ size, tintColor }) => (
  <View style={{ width: size, height: size }}>
    <Svg width="100%" height="100%" viewBox="0 0 24 24">
      <Path
        fill={tintColor}
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zM11.4 10h1.2v7h-1.2v-7zm.6-1a1 1 0 110-2 1 1 0 010 2z"
      />
    </Svg>
  </View>
);

export const Fail: React.FC<IconProps> = ({ size, tintColor }) => (
  <View style={{ width: size, height: size }}>
    <Svg width="100%" height="100%" viewBox="0 0 24 24">
      <Path
        fill={tintColor}
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6z"
      />
      <Path
        fill={tintColor}
        d="M12.849 12l3.11 3.111-.848.849L12 12.849l-3.111 3.11-.849-.848L11.151 12l-3.11-3.111.848-.849L12 11.151l3.111-3.11.849.848L12.849 12z"
      />
    </Svg>
  </View>
);
configure({
  icons: {
    loading: Loading,
    fail: Fail,
    success: Success,
    warn: Warn,
  },
});
