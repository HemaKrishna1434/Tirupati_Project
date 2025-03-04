import {View, Text} from 'react-native';
import React from 'react';
import Toast, {ToastConfig} from 'react-native-toast-message';
import ToastMessage from './toastMessage';

const CustomToast = () => {
  const toastConfig: ToastConfig = {
    // eslint-disable-next-line react/no-unstable-nested-components
    success: props => (
      <ToastMessage {...props} isError={false} iconName="TickCircle" />
    ),
    // eslint-disable-next-line react/no-unstable-nested-components
    error: props => <ToastMessage {...props} isError={true} />,
  };
  return <Toast config={toastConfig} />;
};

export default CustomToast;
