import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaViewBase,Platform, StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView as NativeSafeAreaView } from 'react-native-web';

const isAndroid = Platform.OS==='android';
export default function App() {
  return (
      <>
      <SafeAreaView style={{flex:1}}>
          <View style={{padding:16,backgroundColor:"green",marginTop:isAndroid?StatusBar.currentHeight:0}}>
              <Text>Search</Text>
          </View>
          <View style={{flex:1,backgroundColor:"blue"}}>
            <Text>List</Text>
          </View>
      </SafeAreaView>
          

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
