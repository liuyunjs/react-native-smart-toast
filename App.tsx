import React from 'react';
import { SafeAreaView } from 'react-native';
import { DarklyText } from 'rn-darkly';
import { configure, Toast } from './library/main';

(DarklyText.defaultProps || (DarklyText.defaultProps = {})).dark_style = {
  color: '#ccc',
};

configure({
  maskBackgroundColor: 'rgba(0, 0, 0, .05)',
  dark_maskBackgroundColor: 'rgba(255, 255, 255, .05)',
  showMask: true,
  maskClosable: false,
});

export default function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <SafeAreaView>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.info('toast info', 200000);
          }}>
          toast info
        </DarklyText>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.fail('toast fail');
          }}>
          toast fail
        </DarklyText>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.fail();
          }}>
          toast fail2
        </DarklyText>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.success('toast success');
          }}>
          toast success
        </DarklyText>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.success();
          }}>
          toast success2
        </DarklyText>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.warn('toast warn');
          }}>
          toast warn
        </DarklyText>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.warn();
          }}>
          toast warn2
        </DarklyText>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.loading('toast loading');
          }}>
          toast loading
        </DarklyText>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.loading();
          }}>
          toast loading2
        </DarklyText>
        <DarklyText
          style={{ fontSize: 20 }}
          onPress={() => {
            setVisible(!visible);
          }}>
          toast loading3
        </DarklyText>
        <Toast visible={visible} onChange={setVisible} icon="loading" />
      </SafeAreaView>
    </>
  );
}
