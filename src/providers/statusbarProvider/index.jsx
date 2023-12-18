import React from 'react';
import StatusBarComponent from 'src/common/components/atoms/statusBar';
import {colors} from '~/theme/colors';

export default function StatusBarProvider({children}) {
  return (
    <>
      <StatusBarComponent backgroundColor={colors.primary} />
      {children}
    </>
  );
}
