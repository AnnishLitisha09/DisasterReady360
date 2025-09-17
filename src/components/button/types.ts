import {GestureResponderEvent} from 'react-native';

export interface CustomButtonProps {
  title: string;
  width?: number | string;
  height?: number;
  borderRadius?: number;
  color?: string;
  fontSize?: number;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  
}
