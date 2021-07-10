import React from 'react';

type Options = {
  icons: {
    loading: React.ReactElement | React.ComponentType<any>;
    warn: React.ReactElement | React.ComponentType<any>;
    success: React.ReactElement | React.ComponentType<any>;
    fail: React.ReactElement | React.ComponentType<any>;
  };
};

// @ts-ignore
export const options: Options = {};
