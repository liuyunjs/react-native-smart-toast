import { ComponentType } from 'react';
import { options } from './options';

export const injectDefaultProps = (Component: ComponentType<any>) => {
  Component.defaultProps = Component.defaultProps || {};
  Object.assign(Component.defaultProps, {
    containerStyle: { zIndex: 2000 },
    dark_maskBackgroundColor: options.dark_maskBackgroundColor,
    maskBackgroundColor: options.maskBackgroundColor,
    maskCloseable: options.maskClosable,
    verticalLayout: 'center',
    horizontalLayout: 'center',
    showDuration: options.showDuration,
    mask: options.showMask,
    animationIn: options.animationIn,
    animationOut: options.animationOut,
    maskAnimationIn: options.maskAnimationIn,
    maskAnimationOut: options.maskAnimationOut,
  });
};
