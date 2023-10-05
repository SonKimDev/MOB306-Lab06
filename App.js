import { SafeAreaView, StatusBar, StyleSheet, Text, View, Switch} from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import Home from './components/home/Home';


const App = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} hidden={false}/>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
      <Text>Hiển thị giá trị đang chọn: {selectedValue}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Home />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})