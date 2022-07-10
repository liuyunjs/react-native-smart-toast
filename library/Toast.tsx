import * as React from 'react';
import { withModal } from 'react-native-smart-modal';
import { Toast as ToastInternal } from './ToastInternal';
import { Options } from './options';

const ModalifyToast = withModal(ToastInternal);

const { show: showInternal, hide: hideInternal } = ModalifyToast;

let toastKey: string | null = null;

export const hide = () => {
  if (!toastKey) return;
  hideInternal(toastKey);
  toastKey = null;
};

export const show = ({
  onRequestClose,
  ...rest
}: React.ComponentProps<typeof ToastInternal>) => {
  const props = rest as any;

  props.onRequestClose = () => {
    onRequestClose?.();
    hide();
  };

  if (toastKey) {
    ModalifyToast.update(toastKey, props);
  } else {
    toastKey = showInternal(props);
  }
};

const creator =
  (icon: keyof Options['icons'] | null) =>
  (
    content?: string,
    duration?: number,
    overlay?: boolean,
    onClose?: () => void,
  ) =>
    show({
      icon,
      content,
      showDuration: duration,
      mask: overlay,
      onRequestClose: onClose,
    });

export const success = creator('success');
export const warn = creator('warn');
export const fail = creator('fail');
export const loading = creator('loading');
export const info = creator(null);

export const Toast = Object.assign(React.memo(ModalifyToast), {
  success,
  warn,
  fail,
  loading,
  info,
  hide,
  show,
});

export default Toast;
