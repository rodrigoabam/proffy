import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e6e6f0',

    backgroundColor: '#fff',

    overflow: 'hidden',
  },
  profile: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,

    borderRadius: 32,

    backgroundColor: '#eee',
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#32364d',
  },
  subject: {
    marginTop: 4, 

    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6a6180'
  },
  bio: {
    marginHorizontal: 24,
    
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6a6180',
  },
  footer: {
    marginTop: 24,
    padding: 24,

    alignItems: 'center',

    backgroundColor: '#fafafc',
  },
  price: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6a6180',
  },
  priceValue: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#8257e5',
  },
  buttonsContainer: {
    marginTop: 16,

    flexDirection: 'row',
  },
  favoriteButton: {
    width: 56,
    height: 56,
    marginRight: 8,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,

    backgroundColor: '#8257e5'
  },

  favorited: {
    backgroundColor: '#e33d3e',
  },

  contactButton: {
    flex: 1,
    height: 56,
    marginRight: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,

    backgroundColor: '#04d361'
  },
  contactButtonText: {
    marginLeft: 16,

    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  }
});

export default styles;