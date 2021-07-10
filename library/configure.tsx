import React from 'react';
import { Image } from 'react-native';
import { isNumber } from '@liuyunjs/utils/lib/isNumber';
import { isString } from '@liuyunjs/utils/lib/isString';
import { options } from './options';
import { IconProps } from './icons';

type Options = {
  icons: {
    loading: number | string | React.ReactElement | React.ComponentType<any>;
    warn: number | string | React.ReactElement | React.ComponentType<any>;
    success: number | string | React.ReactElement | React.ComponentType<any>;
    fail: number | string | React.ReactElement | React.ComponentType<any>;
  };
};

const withImg = (source: { uri: string } | number) => {
  return ({ tintColor, size }: IconProps) => {
    return (
      <Image source={source} style={{ width: size, height: size, tintColor }} />
    );
  };
};

export const configure = ({ icons }: Options) => {
  if (!options.icons)
    // @ts-ignore
    options.icons = {};
  Object.keys(icons).forEach((key) => {
    // @ts-ignore
    const icon = icons[key];

    // @ts-ignore
    options.icons[key] = (() => {
      if (isString(icon)) return withImg({ uri: icon });

      if (isNumber(icon)) return withImg(icon);

      return icon;
    })();
  });
};
