import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import { ActivityIndicator, View } from 'react-native';
import { darkly } from 'rn-darkly';

export type IconProps = {
  size: number;
  tintColor: string;
};

const internalDarkly = (Component: React.ComponentType<IconProps>) =>
  darkly(Component, 'tintColor');

export const Loading = internalDarkly(function Loading({
  size,
  tintColor,
}: IconProps) {
  return <ActivityIndicator color={tintColor} size={size} />;
});

const createIcon = (...paths: string[]) => {
  return internalDarkly(function SvgIcon({ tintColor, size }: IconProps) {
    return (
      <View style={{ width: size, height: size }}>
        <Svg width="100%" height="100%" viewBox="0 0 24 24">
          {paths.map((path) => (
            <Path key={path} fill={tintColor} d={path} />
          ))}
        </Svg>
      </View>
    );
  });
};

export const Success = createIcon(
  'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zm-1.172-6.242l5.809-5.808.848.849-5.95 5.95a1 1 0 01-1.414 0L7 12.426l.849-.849 2.98 2.98z',
);

export const Warn = createIcon(
  'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zM11.4 10h1.2v7h-1.2v-7zm.6-1a1 1 0 110-2 1 1 0 010 2z',
);

export const Fail = createIcon(
  'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6z',
  'M12.849 12l3.11 3.111-.848.849L12 12.849l-3.111 3.11-.849-.848L11.151 12l-3.11-3.111.848-.849L12 11.151l3.111-3.11.849.848L12.849 12z',
);
