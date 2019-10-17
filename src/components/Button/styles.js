import { StyleSheet } from 'react-native';
import { Colors, Buttons } from '../../styles';

const styles = StyleSheet.create({
  btn_success_rounded: {
    ...Buttons.smallRounded,
    backgroundColor: Colors.green,
  },
  btn_cancel_rounded: {
    ...Buttons.smallRounded,
    borderColor: Colors.pink,
    borderWidth: 1,
  },
  btn_normal: {
    ...Buttons.small,
    backgroundColor: Colors.yellow,
  },
});

export default styles;