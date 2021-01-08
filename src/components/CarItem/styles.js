import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titlesWrapper: {
    marginTop: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 18,
    color: '#383838',
  },
  mainBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  btnsBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  taglineCTA: {
    textDecorationLine: 'underline',
  },
})

export default styles
