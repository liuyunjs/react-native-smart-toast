import React from 'react';
import { Modal, ModalBaseWithOverlayProps } from 'react-native-smart-modal';
import { timeout } from '@liuyunjs/timer/lib/timeout';
import { ToastInternal } from './ToastInternal';
import { options, Options } from './options';
import { IconProps } from './icons';

let toastKey: string | null = null;
const timer = timeout();

const namespace = 'Toast';

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

  const props: ModalBaseWithOverlayProps = {
    children: element,
    onRequestClose: hide,
    mask,
    darkMaskBackgroundColor: options.darkMaskBackgroundColor,
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

  timer.set(hide, duration);
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
