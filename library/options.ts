import * as React from 'react';
import { Fail, Warn, Success, Loading, IconProps } from './icons';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { ModalInternalProps } from 'react-native-smart-modal';

export type Options = {
  icons: {
    loading: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
    warn: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
    success: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
    fail: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
  };
  backgroundColor: string;
  dark_backgroundColor: string;
  tintColor: string;
  dark_tintColor: string;
  borderRadius: number;
  contentInterval: number;
  paddingHorizontalWithIcon: number;
  paddingVerticalWithIcon: number;
  paddingVertical: number;
  paddingHorizontal: number;
  textFontSize: number;
  textLineHeight: number;
  minWidthOnlyIcon: number | string;
  minHeightOnlyIcon: number | string;
  minHeight: number | string;
  minWidth: number | string;
  maxWidth: number | string;
  maxHeight: number | string;
  iconSize: number;
  iconSizeOnlyIcon: number;

  showMask: boolean;
  maskClosable: boolean;
  showDuration: number;

  animationIn: ModalInternalProps['animationIn'];
  animationOut: ModalInternalProps['animationOut'];
  maskAnimationIn: ModalInternalProps['maskAnimationIn'];
  maskAnimationOut: ModalInternalProps['maskAnimationOut'];

  maskBackgroundColor: string;
  dark_maskBackgroundColor: string;
};

export const options: Options = {
  icons: {
    loading: Loading,
    warn: Warn,
    success: Success,
    fail: Fail,
  },
  backgroundColor: 'rgba(0, 0, 0, .8)',
  dark_backgroundColor: 'rgba(49,45,45,0.8)',
  tintColor: '#fff',
  dark_tintColor: '#eee',
  borderRadius: 4,
  contentInterval: 6,
  paddingHorizontalWithIcon: 15,
  paddingVerticalWithIcon: 15,
  paddingHorizontal: 15,
  paddingVertical: 10,
  textFontSize: 14,
  textLineHeight: 18,
  minWidthOnlyIcon: 80,
  minHeightOnlyIcon: 80,
  minHeight: 'auto',
  minWidth: 150,
  iconSize: 36,
  iconSizeOnlyIcon: 50,

  showDuration: 2,
  showMask: false,
  maskClosable: false,

  animationIn: FadeIn.duration(100),
  animationOut: FadeOut.duration(100),
  maskAnimationIn: FadeIn.duration(100),
  maskAnimationOut: FadeOut.duration(100),

  maskBackgroundColor: 'transparent',
  dark_maskBackgroundColor: 'transparent',
  maxHeight: '80%',
  maxWidth: '80%',
};
