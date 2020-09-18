import React, {useState, useEffect} from 'react';
import { 
  View,
  Text,
  Dimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Feather from 'react-native-vector-icons/Feather';
import { Color } from './components/Color'
import { useSelector, } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const LoginStack = createStackNavigator();
const ExploreStack = createStackNavigator();

import Setting from './screens/Setting';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

import Hotel from './components/Hotel-1';
import Detail from './components/Detail-1';

import Hotel_find from './screens/Hotel_find';

import Loading from './components/GlobalLoading/index';

function Trips() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trips!</Text>
    </View>
  );
}
function LogoTitle(props) {
  let name = props.name;
  let room = props.room;
  let person = props.person;
  return (
    <View style={{justifyContent: 'center', alignItems:'center'}}>
      <Text style={{fontSize: 16, fontWeight: '400'}} numberOfLines={1}>{name}</Text>
      <Text style={{fontSize: 10}}>13/9 - 15/9 * {room} phòng * {person} khách</Text>
    </View>
  );
}

function LoginStackScreen() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{
          headerTitle: null,
          headerTransparent: true,
        }}
      >
        <LoginStack.Screen name="Welcome" component={Welcome} />
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="SignUp" component={SignUp} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitle: null,
        headerTransparent: true,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="Setting" component={Setting} />
    </ProfileStack.Navigator>
  );
}

function ExploreStackScreen({ props }) {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerTitle: null,
        headerTransparent: true,
      }}
    >
      <ExploreStack.Screen name="Home" component={Hotel_find} />
      <ExploreStack.Screen 
        name="Detail" 
        component={Detail} 
        options={({ route }) => ({
          headerTransparent: false,
          headerTintColor: Color.primary,
          headerTitleAlign: "center",
          headerTruncatedBackTitle: null,
          headerLeftContainerStyle: {paddingLeft: wp/30},
          headerTitleStyle: {
            color: '#111',
          },
          //headerTitle: route.params.name
          headerTitle:  props => <LogoTitle  name = {route.params.name} room = {route.params.room} person = {route.params.person}/>
        })
      }
      />
      <ExploreStack.Screen 
      name="Hotel" 
      component={Hotel} 
      options={{
        headerBackTitle: null,
        headerTintColor: Color.primary,
        headerLeftContainerStyle: {paddingLeft: wp/30},
        headerTruncatedBackTitle: null,
      }}
    />
    </ExploreStack.Navigator>
  );
}

function AppNavigation() {
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  console.log(isLogin);
  return (
    isLogin ? 
     ( <NavigationContainer>
      <Loading />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Explore'){
              return <Feather name="search" size={size} color={color}  />;
            }
            else if (route.name === 'Trips'){
              return <Feather name="heart" size={size} color={color} />
            }
            else if(route.name ==='Profile'){
              return <Feather name="user" size={size} color={color} />
            } 
          },
        })}
        tabBarOptions={{
          activeTintColor: Color.primary,
          inactiveTintColor: '#d3d3d3',
        }}
      >
        <Tab.Screen name="Explore" component={ExploreStackScreen}/>
        {/* <Tab.Screen name="Trips" component={Trips} /> */}
        <Tab.Screen name="Profile" component={ProfileStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer> )
    : (
      <LoginStackScreen />
    )
  );
}

export default AppNavigation;