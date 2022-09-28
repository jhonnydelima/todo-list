import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 24,
  },
  header: {
    width: '100%',
    height: 173,
    backgroundColor: "#0D0D0D",
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 32,
    marginTop: -25,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: "#F2F2F2",
    marginRight: 4
  },
  addButton: {
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 16, // REMOVER
  },
  counter: {
    flexDirection: 'row',
  },
  counterText: {
    fontSize: 14,
    fontWeight: '700',
    marginRight: 8,
  },
  counterNumber: {
    color: '#D9D9D9'
  },


  footer: {
    width: '100%',
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
    color: '#F2F2F2',
    fontSize: 18,
    fontWeight: '600'
  },
});