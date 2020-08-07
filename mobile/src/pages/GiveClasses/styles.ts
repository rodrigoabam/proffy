import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#32264D'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    maxWidth: 180,

    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    color: '#fff'
  },
  description: {
    marginTop: 24,
    maxWidth: 240,

    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    color: '#d4c2ff'
  },
  okButton: {
    height: 58,
    marginVertical: 40,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,

    backgroundColor: '#04d361',
  },
  okButtonText: {
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
    color: '#fff'
  }
});

export default styles;