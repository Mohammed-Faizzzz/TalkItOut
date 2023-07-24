import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';

const API_URL = 'http://192.168.4.168:3000';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  

  const handleInputChange = (text, inputField) => {
    switch (inputField) {
      case 'firstName':
        setFirstName(text);
        break;
      case 'lastName':
        setLastName(text);
        break;
      case 'dateOfBirth':
        setDateOfBirth(text);
        break;
      case 'email':
        setEmail(text);
        break;
      case 'password':
        setPassword(text);
        break;
      case 'confirmPassword':
        setconfirmPassword(text);
        break;
      case 'phoneNo':
        setPhoneNo(text);
        break;
      case 'address':
        setAddress(text);
        break;
      default:
        break;
    }
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleSubmit = () => {
    const payload = {
      firstName,
      lastName,
      gender: gender,
      dateOfBirth,
      email,
      password,
      confirmPassword,
      phoneNo,
      address
    };

    console.log('Form submitted');
    console.log('Form values:', {
      firstName,
      lastName,
      gender: gender,
      dateOfBirth,
      email,
      password,
      confirmPassword,
      phoneNo,
      address
    });
  
    // Use the fetch API to send the data to the server
    console.log(`${API_URL}/login`);
    fetch(`${API_URL}/signup`, { 
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    })
    .then(async res => { 
      console.log('signing up');
      // console.log('Response:', res);
      try {
        const jsonRes = await res.json();
        if (res.status !== 200) {
          setIsError(true); 
          setMessage(jsonRes.message);
        } else {
          setIsError(false);
          setMessage(jsonRes.message);
          navigation.navigate('LoginScreen');
        }
      } catch (err) {
        console.log(err);
      };
    })
    .catch(err => {
      console.log(err);
    });

    navigation.navigate('LoginScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>TalkItOut: Signup</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#888"
          value={firstName}
          onChangeText={(text) => handleInputChange(text, 'firstName')}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#888"
          value={lastName}
          onChangeText={(text) => handleInputChange(text, 'lastName')}
        />
        {/* Gender */}
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'male' && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect('male')} 
          >
            <Text style={styles.genderButtonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'female' && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect('female')}
          >
            <Text style={styles.genderButtonText}>Female</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          placeholderTextColor="#888"
          value={dateOfBirth}
          onChangeText={(text) => handleInputChange(text, 'dateOfBirth')}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => handleInputChange(text, 'email')}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={(text) => handleInputChange(text, 'password')}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={(text) => handleInputChange(text, 'confirmPassword')}
        />
        {/*  */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#888"
          value={phoneNo}
          onChangeText={(text) => handleInputChange(text, 'phoneNo')}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#888"
          value={address}
          onChangeText={(text) => handleInputChange(text, 'address')}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FEFAE0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'normal',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  genderButton: {
    backgroundColor: '#FEFAE0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '48%',
  },
  selectedGenderButton: {
    backgroundColor: '#FAEDCD',
    borderWidth: 0,
  },
  genderButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#FAEDCD',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
});

export default Signup;
