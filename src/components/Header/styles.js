import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    position: 'absolute',
    top: 30,
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
  },
  menu: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
})

export default styles
