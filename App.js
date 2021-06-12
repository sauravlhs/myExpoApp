import React, { Components } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content'
export default class App extends Components{
    render(){
        return(
            <View style={styles.container}>
              <Header />
              <Footer />
              <Content />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 20
  }
})