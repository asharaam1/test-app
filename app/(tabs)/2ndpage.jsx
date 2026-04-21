import todoapp from "@/assets/images/todoapp.png"
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
const secondpage = () => {
  return (
    <View style={style.contanier}>
      <ImageBackground
      source={todoapp}
      resizeMode='cover'
      style={style.image}
      >
      <Text style={style.text}>hello</Text>
      </ImageBackground>
      <text style={style.text2}>hello my name is Faizan</text>
    </View>
  )
}

export default secondpage

const style = StyleSheet.create ({
    contanier : {
        flex:1,
        flexDirection:'column',
    },
    text:{
        color:'Black',
        fontSize:42,
        fontWeight:'bold',
        textAlign:'center',
        backgroundColor:'rgba(255, 255, 255, 0.5)',
    },
    text2:{
        color:'Black',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'left'
    },
    image:{
      width:'100%',
      height:'100%',
      flex:1,
      resizeMode:'cover',
      justifyContent:'center',
    },
})