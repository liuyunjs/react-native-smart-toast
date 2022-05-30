import React from 'react';
import { View } from 'react-native';
import { DarklyView, DarklyText } from 'rn-darkly';
import { isFunction } from '@liuyunjs/utils/lib/isFunction';
import { IconProps } from './icons';
import { options } from './options';

type ToastProps = {
  content?: string;
  icon?: React.ReactElement<IconProps> | React.ComponentType<IconProps> | null;
  onClose?: () => void;
};

export const ToastInternal: React.FC<ToastProps> = ({
  content,
  icon,
  onClose,
}) => {
  React.useEffect(
    () => () => {
      isFunction(onClose) && onClose();
    },
    [onClose],
  );

  const renderIcon = () => {
    if (!icon) return null;
    const props = {
      size: content ? options.iconSize : options.iconSizeOnlyIcon,
      tintColor: options.tintColor,
      dark_tintColor: options.dark_tintColor,
    };
    return React.isValidElement(icon)
      ? React.cloneElement(icon, props)
      : React.createElement(icon, props);
  };

  return (
    <View style={{ maxWidth: options.maxWidth, maxHeight: options.maxHeight }}>
      <DarklyView
        dark_style={{ backgroundColor: options.dark_backgroundColor }}
        style={{
          alignItems: 'center',
          backgroundColor: options.backgroundColor,
          minWidth: content ? options.minWidth : options.minWidthOnlyIcon,
          minHeight: content ? options.minHeight : options.minHeightOnlyIcon,
          paddingVertical: icon
            ? options.paddingVerticalWithIcon
            : options.paddingVertical,
          paddingHorizontal: icon
            ? options.paddingHorizontalWithIcon
            : options.paddingHorizontal,
          borderRadius: options.borderRadius,
        }}>
        {renderIcon()}
        {!!content && (
          <DarklyText
            dark_style={{ color: options.dark_tintColor }}
            style={{
              textAlign: 'center',
              lineHeight: options.textLineHeight,
              color: options.tintColor,
              fontSize: options.textFontSize,
              marginTop: icon ? options.contentInterval : 0,
            }}>
            {content}
          </DarklyText>
        )}
      </DarklyView>
    </View>
  );
};
