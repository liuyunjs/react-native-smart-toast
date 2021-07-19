import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Fail, Loading } from './library/icons';
import { Toast, configure } from './library/main';

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
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.info('toast info', 200000);
          }}>
          toast info
        </Text>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.fail('toast fail');
          }}>
          toast fail
        </Text>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.fail();
          }}>
          toast fail2
        </Text>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.success('toast success');
          }}>
          toast success
        </Text>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.success();
          }}>
          toast success2
        </Text>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.warn('toast warn');
          }}>
          toast warn
        </Text>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.warn();
          }}>
          toast warn2
        </Text>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.loading('toast loading');
          }}>
          toast loading
        </Text>
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            Toast.loading();
          }}>
          toast loading2
        </Text>
      </SafeAreaView>
    </>
  );
}
