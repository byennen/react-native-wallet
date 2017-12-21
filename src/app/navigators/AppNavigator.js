import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DrawerNavigator } from 'react-navigation';

import CustomDrawer from './drawer/CustomDrawer';
import { selectIsLoggedIn } from '../../features/auth/ducks';
import AuthNavigator from '../../features/auth/AuthNavigator';
import {
  CreateWalletContainer,
  SelectActiveWalletContainer,
  SendTransactionContainer,
  GenerateAddressContainer,
} from '../../features/wallet/containers';

const UserNavigator = DrawerNavigator(
  {
    SelectActiveWallet: {
      screen: SelectActiveWalletContainer,
    },
    CreateWallet: {
      screen: CreateWalletContainer,
    },
    SendTransaction: {
      screen: SendTransactionContainer,
    },
    GenerateAddress: {
      screen: GenerateAddressContainer,
    },
  },
  {
    initialRouteName: 'SelectActiveWallet',
    contentComponent: CustomDrawer,
  }
);

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
});

const AppNavigator = ({ isLoggedIn }) => (isLoggedIn ? <UserNavigator /> : <AuthNavigator />);

AppNavigator.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AppNavigator);