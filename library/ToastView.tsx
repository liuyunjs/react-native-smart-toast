import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ModalBaseWithOverlay } from 'react-native-smart-modal/lib/ModalBaseWithOverlay';
import { ModalBaseWithOverlayProps } from 'react-native-smart-modal';
import { animations } from 'react-native-smart-modal';
import { useTimeout } from '@liuyunjs/timer/lib/react';

type ToastViewProps = {
  content?: string;
  icon?: React.ReactElement | React.ComponentType<any> | null;
  overlay?: boolean;
  onClose?: () => void;
  onRequestClose?: () => void;
  onWillAnimate?: ModalBaseWithOverlayProps['onWillAnimate'];
  onDidAnimate?: ModalBaseWithOverlayProps['onDidAnimate'];
  z?: number;
  style?: StyleProp<ViewStyle>;
  duration?: number;
};

export const ToastView = React.memo<ToastViewProps>(
  ({
    content,
    icon,
    onRequestClose,
    overlay = false,
    onClose,
    onDidAnimate,
    onWillAnimate,
    z,
    style,
    duration = 2000,
  }) => {
    const toastTimer = useTimeout();

    // console.log(onRequestClose);

    React.useEffect(() => () => onClose?.(), [onClose]);

    const renderIcon = () => {
      if (!icon) return null;
      const props = { size: content ? 36 : 50, tintColor: '#eee' };
      return React.isValidElement(icon)
        ? React.cloneElement(icon, props)
        : React.createElement(icon, props);
    };

    React.useLayoutEffect(() => {
      toastTimer.set(onRequestClose!, duration);
      return toastTimer.clear;
    });

    return (
      <ModalBaseWithOverlay
        style={style}
        z={z}
        onDidAnimate={onDidAnimate}
        onWillAnimate={onWillAnimate}
        maskCloseable={false}
        mask={overlay}
        onRequestClose={onRequestClose!}
        verticalLayout="center"
        horizontalLayout="center"
        animation={animations.fade}
        animationConf={{ duration: 100 }}
        backHandlerType="none">
        <View style={styles.container}>
          <View
            style={[
              styles.innerWrap,
              !content && styles.noContentWrap,
              icon ? styles.iconToast : styles.textToast,
            ]}>
            {renderIcon()}
            {!!content && (
              <Text style={[styles.content, !!icon && styles.noIconContent]}>
                {content}
              </Text>
            )}
          </View>
        </View>
      </ModalBaseWithOverlay>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
  },
  innerWrap: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    minWidth: 150,
    borderRadius: 4,
  },
  noContentWrap: { minWidth: 80, minHeight: 80 },
  iconToast: {
    padding: 15,
  },
  textToast: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  content: {
    textAlign: 'center',
    lineHeight: 18,
    color: '#fff',
    fontSize: 14,
  },

  noIconContent: { marginTop: 6 },
});
