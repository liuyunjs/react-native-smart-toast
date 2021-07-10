import React from 'react';
import { getUpdater } from 'react-native-portal-view';
import { timeout } from '@liuyunjs/timer';
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

let toastKey: string | null = null;
const toastTimer = timeout();

const updater = getUpdater('toast');
updater.setContainer(AnimatePresence);

const hide = () => {
  if (!toastKey) return;
  updater.remove(toastKey);
  toastKey = null;
};

const custom = (
  icon: React.ReactElement | React.ComponentType<any> | null,
  content?: string,
  duration: number = 2000,
  overlay = false,
  onClose?: () => void,
) => {
  toastTimer.clear();
  const element = (
    <ToastView
      content={content}
      icon={icon}
      onClose={onClose}
      overlay={overlay}
    />
  );

  if (!toastKey) {
    toastKey = updater.add(element);
  } else {
    updater.update(toastKey, element);
  }

  toastTimer.set(hide, duration);
};

const creator =
  (icon: React.ReactElement | React.ComponentType<any> | null) =>
  (
    content?: string,
    duration: number = 2000,
    overlay = false,
    onClose?: () => void,
  ) =>
    custom(icon, content, duration, overlay, onClose);

export const Toast = {
  custom,
  success: creator(icons.success),
  warn: creator(icons.warn),
  fail: creator(icons.fail),
  loading: creator(icons.loading),
  info: creator(null),
  hide,
};
