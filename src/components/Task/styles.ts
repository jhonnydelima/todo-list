import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.GRAY_500,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    marginVertical: 24,
    marginLeft: 16,
    borderRadius: 50,
  },
  description: {
    flex: 1,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.GRAY_100,
    marginHorizontal: 8,
  },
  descriptionCompletedTask: {
    color: THEME.COLORS.GRAY_300,
    textDecorationLine: 'line-through',
  },
  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  }
});