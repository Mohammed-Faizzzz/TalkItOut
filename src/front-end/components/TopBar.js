import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import ProgressBar from "./ProgressBar";

const TopBar = () => {
    
    return (
    
    <View
      style={styles.navbar}
    >
      {/* Company Logo */}
      <Image
        source={require('../assets/company_logo.png')}
        style={{ width: 70, height: 70, marginRight: 8, marginLeft: 15 }}
      />

      {/* Clickable Buttons */}
      <View style= {styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('MyProgress', {userId: userId, userEmail: userEmail})} style = {styles.button}>
        <Text style= {{fontWeight: 'bold'}}>My Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyProfile', {userData: userData, userId: userId, userEmail: userEmail})} style = {styles.button}>
        <Text style= {{fontWeight: 'bold'}}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SettingsPage')} style = {styles.button}>
        <Text style= {{fontWeight: 'bold'}}>Settings</Text>
      </TouchableOpacity>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      backgroundColor: '#FAEDCD',
    // backgroundColor: '#FEFAE0',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginRight: 0,
      paddingHorizontal: 16
    },
    button: {
      marginRight: 25
    },
    header: {
      fontSize: 22,
      fontWeight: 'normal',
      marginBottom: 10,
      paddingLeft: 30, 
      paddingTop: 10,
      fontFamily: ''
    },
    subheader: {
      paddingLeft: 30, 
      fontSize: 18, 
      fontWeight: 'normal', 
      marginBottom: 20
    },
    row: {
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center', 
      marginBottom: 50
    },
    column: {
      flex: 1, 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    topButton: {
      paddingTop: 8, 
      alignItems: 'center', 
      backgroundColor: '#A8DADC', 
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      width: '48%'
    },
    otherButton: {
      paddingTop: 8, 
      alignItems: 'center', 
      backgroundColor: '#A8DADC', 
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      width: '48%',
      marginTop: 20
    },
    icon: {
      width: 95, 
      height: 95, 
      marginRight: 8
    }
  });

export default TopBar;