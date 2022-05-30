import React from 'react';
import { Modal, ModalInternalProps } from 'react-native-smart-modal';
import { timeout } from '@liuyunjs/utils/lib/timer';
import { ToastInternal } from './ToastInternal';
import { options, Options } from './options';
import { IconProps } from './icons';

let toastKey: string | null = null;
const timer = timeout();

const namespace = 'Toast' + Math.random().toString(32);

export const hide = () => {
  if (!toastKey) return;
  Modal.remove(namespace, toastKey);
  toastKey = null;
};

export const custom = (
  icon: React.ReactElement<IconProps> | React.ComponentType<IconProps> | null,
  content?: string,
  duration = options.showDuration,
  mask = options.showMask,
  onClose?: () => void,
) => {
  timer.clear();
  const element = (
    <ToastInternal content={content} icon={icon} onClose={onClose} />
  );

  const props: ModalInternalProps = {
    children: element,
    onRequestClose: hide,
    mask,
    containerStyle: { zIndex: 2000 },
    // @ts-ignore
    dark_maskBackgroundColor: options.dark_maskBackgroundColor,
    maskBackgroundColor: options.maskBackgroundColor,
    maskCloseable: options.maskClosable,
    verticalLayout: 'center',
    horizontalLayout: 'center',
    animation: options.animation,
    animationConf: options.animationConf,
  };

  if (!toastKey) {
    toastKey = Modal.add(namespace, props);
  } else {
    Modal.update(namespace, toastKey, props);
  }

  timer.set(hide, duration * 1000);
};

const creator =
  (iconKey: keyof Options['icons'] | null) =>
  (
    content?: string,
    duration?: number,
    overlay?: boolean,
    onClose?: () => void,
  ) =>
    custom(
      iconKey && options.icons[iconKey],
      content,
      duration,
      overlay,
      onClose,
    );

export const success = creator('success');
export const warn = creator('warn');
export const fail = creator('fail');
export const loading = creator('loading');
export const info = creator(null);

export const Toast = {
  success,
  warn,
  fail,
  loading,
  info,
  hide,
  custom,
};
