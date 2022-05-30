import React from 'react';
import { SafeAreaView } from 'react-native';
import { DarklyText } from 'rn-darkly';
import { Fail, Loading } from './library/icons';
import { Toast, configure } from './library/main';

(DarklyText.defaultProps || (DarklyText.defaultProps = {})).dark_style = {
  color: '#ccc',
};

configure({
  icons: {
    fail: Fail,
    loading: Loading,
  },
});

export default function App() {
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
      </SafeAreaView>
    </>
  );
}
