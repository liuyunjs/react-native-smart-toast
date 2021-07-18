import React from 'react';
import { Image } from 'react-native';
import { isNumber } from '@liuyunjs/utils/lib/isNumber';
import { isString } from '@liuyunjs/utils/lib/isString';
import { options, Options as O } from './options';
import { IconProps } from './icons';

type Icon =
  | number
  | string
  | React.ReactElement<IconProps>
  | React.ComponentType<IconProps>;

export type ConfigureOptions = Partial<Omit<O, 'icons'>> & {
  icons?: {
    loading?: Icon;
    warn?: Icon;
    success?: Icon;
    fail?: Icon;
  };
};

const withImg = (source: { uri: string } | number) => {
  return ({ tintColor, size }: IconProps) => {
    return (
      <Image source={source} style={{ width: size, height: size, tintColor }} />
    );
  };
};

const getIcon = (icon: Icon) => {
  if (isString(icon)) return withImg({ uri: icon });

  if (isNumber(icon)) return withImg(icon);

  return icon;
};

export const configure = (opts: ConfigureOptions) => {
  for (let key in opts) {
    if (!opts.hasOwnProperty(key)) continue;
    if (key === 'icons' && opts.icons) {
      for (let i in opts.icons) {
        // @ts-ignore
        if (!opts.icons.hasOwnProperty(i) || opts.icons[i] == null) continue;
        // @ts-ignore
        options.icons[i] = getIcon(opts.icons[i]);
      }
    } else {
      // @ts-ignore
      opts[key] != null && (options[key] = opts[key]);
    }
  }
};
