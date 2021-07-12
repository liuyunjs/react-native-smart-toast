import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Toast } from './library';

export default function App() {
  const [visible, setVisible] = React.useState(false);

  // console.log(111, visible);

  return (
    <>
      <SafeAreaView>
        <Toast
          onWillChange={setVisible}
          visible={visible}
          content="modal toast"
          overlay={false}
        />
        <Text style={{ fontSize: 20 }} onPress={() => setVisible(!visible)}>
          modal toast
        </Text>
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
