import { NativeModules } from 'react-native';

type BitmovinPlayerType = {
  multiply(a: number, b: number): Promise<number>;
};

const { BitmovinPlayer } = NativeModules;

export default BitmovinPlayer as BitmovinPlayerType;
