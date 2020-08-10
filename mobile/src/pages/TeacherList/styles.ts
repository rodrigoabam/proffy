import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7'
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#caf0f8'
  },
  input: {
    height: 54,
    marginTop: 4,
    marginBottom: 16,
    paddingHorizontal: 16,

    justifyContent: 'center',

    borderRadius: 8,

    backgroundColor: '#fff',
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%'
  },
  submitButton: {
    height: 56,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,

    backgroundColor: '#DF0209'
  },
  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  }
})

export default styles;