import React from 'react';
import { AnimationPresupposition, OneOfAnimConf } from 'rmotion';
import { animations } from 'react-native-smart-modal';
import { Fail, Warn, Success, Loading, IconProps } from './icons';

export type Options = {
  icons: {
    loading: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
    warn: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
    success: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
    fail: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
  };
  backgroundColor: string;
  darkBackgroundColor: string;
  tintColor: string;
  darkTintColor: string;
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
  animation: AnimationPresupposition;
  animationConf: OneOfAnimConf;

  maskBackgroundColor: string;
  darkMaskBackgroundColor: string;
};

export const options: Options = {
  icons: {
    loading: Loading,
    warn: Warn,
    success: Success,
    fail: Fail,
  },
  backgroundColor: 'rgba(0, 0, 0, .8)',
  darkBackgroundColor: 'rgba(49,45,45,0.8)',
  tintColor: '#fff',
  darkTintColor: '#eee',
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

  showDuration: 2000,
  showMask: false,
  maskClosable: false,

  animation: animations.fade,
  animationConf: { duration: 100 },

  maskBackgroundColor: 'transparent',
  darkMaskBackgroundColor: 'transparent',
  maxHeight: '80%',
  maxWidth: '80%',
};
