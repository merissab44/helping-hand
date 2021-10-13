import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import VolunteerHomeScreen from '../app/screens/VolunteerHomeScreen';
import colors from '../app/config/colors';
import AppText from '../app/components/AppText';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: colors.white,
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        > 
            <Tab.Screen name="Home" 
            component={VolunteerHomeScreen} 
            options={{tabBarIcon: ({focused}) => {
                <View>
                    <Icon name="newspaper"/>
                    <AppText>HOME</AppText>
                </View>
            },
            headerShown: false
            }}
            />
            <Tab.Screen name="News" component={VolunteerHomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Notifications" component={VolunteerHomeScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
})

export default Tabs;
