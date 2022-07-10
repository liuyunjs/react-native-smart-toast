import * as React from 'react';
import { View } from 'react-native';
import { ModalInternal, ModalInternalProps } from 'react-native-smart-modal';
import { DarklyView, DarklyText, darkly } from 'rn-darkly';
import { useTimeout } from '@liuyunjs/timer/lib/react';
import { IconProps } from './icons';
import { options, Options } from './options';
import { injectDefaultProps } from './injectDefaultProps';
import { isString } from '@liuyunjs/utils/lib/isString';

type ToastProps = {
  content?: string;
  icon?:
    | keyof Options['icons']
    | React.ReactElement<IconProps>
    | React.ComponentType<IconProps>
    | null;
};

const ToastInternal: React.FC<ToastProps> = ({ content, icon }) => {
  const renderIcon = () => {
    if (!icon) return null;
    const props = {
      size: content ? options.iconSize : options.iconSizeOnlyIcon,
      tintColor: options.tintColor,
      dark_tintColor: options.dark_tintColor,
    };
    if (isString(icon)) icon = options.icons[icon];
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

const Toast: React.FC<
  ToastProps & ModalInternalProps & { showDuration?: number }
> = ({ icon, content, showDuration, ...rest }) => {
  const timer = useTimeout();

  React.useLayoutEffect(() => {
    timer.clear();
    timer.set(() => rest.onRequestClose!(), showDuration! * 1000);
  }, [rest.onRequestClose, showDuration, timer, icon, content]);

  return (
    <ModalInternal {...rest}>
      <ToastInternal icon={icon} content={content} />
    </ModalInternal>
  );
};

const DarklyToast = darkly(
  Toast,
  'maskBackgroundColor',
  'style',
  'containerStyle',
  'contentContainerStyle',
);

injectDefaultProps(DarklyToast);

export { DarklyToast as Toast };
