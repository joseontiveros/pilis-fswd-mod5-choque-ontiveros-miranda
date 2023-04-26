import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  textMesagge: {
    color: COLORS.inactive,
    fontSize: 14,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    color: COLORS.darkblue,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 5
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  button: {
    backgroundColor: COLORS.darkblue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  linkContainer: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row'
  }
})
