/* eslint-disable react/prefer-stateless-function */
import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import Home from '../containers/home/home';
import AppConfig from '../constants/config';
import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';


const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

class TabIcon extends React.Component {
  render() {
    return (
      <Text style={{ color: this.props.selected ? 'red' : 'black' }}>{this.props.title}</Text>
    );
  }
}

TabIcon.propTypes = { title: PropTypes.string.isRequired, selected: PropTypes.bool };
TabIcon.defaultProps = { title: 'Home', selected: false };


export default Actions.create(
  <Scene key="root" {...AppConfig.navbarProps}>
    <Scene key="tabs" initial={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
      <Scene
        {...navbarPropsTabs}
        key={'home'}
        title={'HOME'}
        icon={TabIcon}
        component={Home}
      />
      <Scene
        {...navbarPropsTabs}
        key={'discover'}
        title={'Discover'}
        icon={TabIcon}
        component={Home}
      />
      <Scene
        {...navbarPropsTabs}
        key={'community'}
        title={'Community'}
        icon={TabIcon}
        component={Home}
      />
      <Scene
        {...navbarPropsTabs}
        key={'userCenter'}
        title={'UserCenter'}
        icon={TabIcon}
        component={Home}
      />
    </Scene>
  </Scene>,
);
