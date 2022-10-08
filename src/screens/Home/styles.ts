import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_600,
  },
  header: {
    width: '100%',
    height: 173,
    backgroundColor: THEME.COLORS.GRAY_700,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: 24,
    marginTop: -25,
    maxHeight: '68%',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderRadius: 8,
    padding: 16,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.GRAY_300,
    marginRight: 4,
  },
  onFocusInput: {
    borderColor: THEME.COLORS.PURPLE_DARK,
    borderWidth: 1,
    color: THEME.COLORS.GRAY_100,
  },
  addButton: {
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.BLUE_DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GRAY_400,
  },
  counter: {
    flexDirection: 'row',
  },
  counterText: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginRight: 8,
  },
  counterNumberContainer: {
    width: 25,
    height: 20,
    backgroundColor: THEME.COLORS.GRAY_400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  counterNumber: {
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListImage: {
    marginTop: 48,
    marginBottom: 16,
  },
  emptyListText: {
    color: THEME.COLORS.GRAY_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    lineHeight: 20,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: 24,
  },
  footerButtons: {
    flexDirection: 'row',
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  buttonText: {
    marginLeft: 8,
    color: THEME.COLORS.GRAY_200,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});