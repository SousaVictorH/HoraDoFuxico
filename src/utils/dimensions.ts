import { Dimensions } from 'react-native';

export const getWindowHeight: () => number = () =>
  Dimensions.get('window').height;

export const getWindowWidth: () => number = () =>
  Dimensions.get('window').width;
