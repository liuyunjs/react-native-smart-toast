import React from 'react';
import { getUpdater } from 'react-native-portal-view';
import { modalZIndex } from 'react-native-smart-modal/lib/modalZIndex';
import { modalify } from 'react-native-smart-modal/lib/modalify';
import { AnimatePresence } from 'rmotion';
import { ToastView } from './ToastView';
import { options } from './options';

const { icons } = options;

if (process.env.NODE_ENV !== 'production') {
  const pkg = require('../package.json');
  if (!icons)
    throw new Error(
      `如果你不需要自定义图标，请在入口文件 index.js 开始处添加 import "${pkg.name}/dist/icons"`,
    );

  ['loading', 'success', 'fail', 'warn'].forEach((key) => {
    // @ts-ignore
    if (icons[key] === undefined) throw new Error(`缺少对应的图标：${key}`);
  });
}

const toast: { current?: string } = {
  current: undefined,
};

const updater = getUpdater('toast');
updater.setContainer(AnimatePresence);

const ModalToast = modalify(ToastView);

export const Toast = (props: React.ComponentProps<typeof ModalToast>) =>
  // @ts-ignore
  React.createElement(ModalToast, props);

Toast.hide = () => {
  if (!toast.current) return;
  updater.remove(toast.current);
  toast.current = undefined;
};

const StaticToast = modalZIndex(ToastView);
Toast.custom = (
  icon: React.ReactElement | React.ComponentType<any> | null,
  content?: string,
  duration?: number,
  overlay = false,
  onClose?: () => void,
) => {
  const element = (
    <StaticToast
      content={content}
      icon={icon}
      onClose={onClose}
      overlay={overlay}
      duration={duration}
      onRequestClose={Toast.hide}
    />
  );

  if (!toast.current) {
    toast.current = updater.add(element);
  } else {
    updater.update(toast.current, element);
  }
};

const creator =
  (icon: React.ReactElement | React.ComponentType<any> | null) =>
  (
    content?: string,
    duration: number = 2000,
    overlay = false,
    onClose?: () => void,
  ) =>
    Toast.custom(icon, content, duration, overlay, onClose);

Toast.success = creator(icons.success);
Toast.warn = creator(icons.warn);
Toast.fail = creator(icons.fail);
Toast.loading = creator(icons.loading);
Toast.info = creator(null);
