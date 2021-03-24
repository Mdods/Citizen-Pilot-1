import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import SafeViewAndroid from './components/SafeViewAndroid';
import { reducers } from './store/reducer';
import MainRootStack from './RootStack';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import BottomNavigationBar from './navigation/bottomNavBar'
import Index from './index';
import BottomTabs from './navigation/navBarBare'

const middleware = applyMiddleware(ReduxThunk, logger);
const store = createStore(reducers, middleware);
export default function App(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
          {/* <NavigationContainer> */}
            {/* <MainRootStack/> */}
         {/* </NavigationContainer> */}
            <BottomTabs/>
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  );
}
