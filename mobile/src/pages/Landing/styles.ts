import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#002855'
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
    color: '#fff'
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    marginTop: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    height: 150,
    width: '48%',
    padding: 24,

    justifyContent: 'space-between',

    borderRadius: 8,
  },

  buttonPrimary: {
    backgroundColor: '#0353A4', 
  },

  buttonSecondary: {
    backgroundColor: '#DF0209',
  },

  buttonText: {
    fontSize: 20,
    fontFamily: 'Archivo_700Bold',
    color: '#fff'
  },

  totalConnections: {
    maxWidth: 140,
    marginTop: 40,

    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#caf0f8',
    lineHeight: 20,
  }
});

export default styles;