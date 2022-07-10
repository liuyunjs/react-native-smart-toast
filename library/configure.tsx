import * as React from 'react';
import { Image } from 'react-native';
import { isNumber } from '@liuyunjs/utils/lib/isNumber';
import { isString } from '@liuyunjs/utils/lib/isString';
import { options, Options as O } from './options';
import { IconProps } from './icons';
import { injectDefaultProps } from './injectDefaultProps';
import { Toast } from './ToastInternal';

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
  Object.keys(opts).forEach((key) => {
    if (key === 'icons' && opts.icons) {
      Object.keys(opts.icons).forEach((k) => {
        // @ts-ignore
        opts.icons[k] != null && (options.icons[k] = getIcon(opts.icons[k]));
      });
    } else {
      // @ts-ignore
      opts[key] != null && (options[key] = opts[key]);
    }
  });
  injectDefaultProps(Toast);
};
