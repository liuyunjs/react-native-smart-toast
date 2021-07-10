import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ModalBaseWithOverlay } from 'react-native-smart-modal/lib/ModalBaseWithOverlay';
import { animations } from 'react-native-smart-modal';

type ToastViewProps = {
  content?: string;
  icon?: React.ReactElement | React.ComponentType<any> | null;
  overlay?: boolean;
  onClose?: () => void;
  onRequestClose?: () => void;
};

export const ToastView: React.FC<ToastViewProps> = ({
  content,
  icon,
  onRequestClose,
  overlay,
  onClose,
}) => {
  React.useEffect(() => () => onClose?.(), [onClose]);

  const renderIcon = () => {
    if (!icon) return null;
    const props = { size: content ? 36 : 50, tintColor: '#eee' };
    return React.isValidElement(icon)
      ? React.cloneElement(icon, props)
      : React.createElement(icon, props);
  };

  return (
    <ModalBaseWithOverlay
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
};

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
