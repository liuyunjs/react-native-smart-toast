import React from 'react';
import { View } from 'react-native';
import { DarklyView, DarklyText } from 'rn-darkly';
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
  React.useEffect(() => () => onClose?.(), [onClose]);

  const renderIcon = () => {
    if (!icon) return null;
    const props = {
      size: content ? options.iconSize : options.iconSizeOnlyIcon,
      tintColor: options.tintColor,
      darkTintColor: options.darkTintColor,
    };
    return React.isValidElement(icon)
      ? React.cloneElement(icon, props)
      : React.createElement(icon, props);
  };

  return (
    <View style={{ maxWidth: options.maxWidth, maxHeight: options.maxHeight }}>
      <DarklyView
        darkStyle={{ backgroundColor: options.darkBackgroundColor }}
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
            darkStyle={{ color: options.darkTintColor }}
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
