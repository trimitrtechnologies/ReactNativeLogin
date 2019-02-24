/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';
import { Icon } from "native-base";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const USER_BOX_HEIGHT = SCREEN_WIDTH / 3;

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent:'center', alignItems:"center"}}>
        <View style={{height: SCREEN_HEIGHT / 2, backgroundColor:'#000', borderRadius: 10, width: SCREEN_WIDTH - SCREEN_WIDTH / 5, alignItems:'center'}}>
          <View style={{marginTop:-(USER_BOX_HEIGHT/2), borderRadius:100, width: USER_BOX_HEIGHT, height: USER_BOX_HEIGHT, backgroundColor:'#ccc', alignItems:'center', justifyContent:'center'}}>
            <Icon style={{fontSize: 80, color:'#fff'}} type="FontAwesome" name="user"/>
          </View>
          <TextInput style={{marginTop: 30, height:40, backgroundColor:'#fff', width: (SCREEN_WIDTH - SCREEN_WIDTH / 5) - 50 }} placeholder={"Username"}/>
          <TextInput style={{marginTop: 10, height:40, backgroundColor:'#fff', width: (SCREEN_WIDTH - SCREEN_WIDTH / 5) - 50 }} placeholder={"Password"}/>
          <TouchableOpacity onPress={()=>{ alert('Hello World') }} style={{ borderColor:'#fff', borderWidth: 2, alignItems:'center', padding:10, marginTop:10, backgroundColor:'#000', width: (SCREEN_WIDTH - SCREEN_WIDTH / 5) - 50}}>
            <Text style={{color:'#fff'}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 5}}>
            <Text style={{color:'#fff'}}>New user? Sign up here.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 5}}>
            <Text style={{color:'#fff'}}>Forget password</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
