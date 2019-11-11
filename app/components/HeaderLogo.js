import React from "react"
import { Image, StyleSheet } from "react-native"
import Logo from "../assets/images/logo.png"

const HeaderLogo = () =>{
   return <Image style={styles.image} source={Logo} > </Image>
}

const styles = StyleSheet.create({
    image:{
        width:50,
        height: 35,
        resizeMode:"contain"
    }
})

export default HeaderLogo;