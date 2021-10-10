import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { ListSpider } from '../screens/ListSpider';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name="Home"
                    component={Home}
                />

                <Screen
                    name="ListSpider"
                    component={ListSpider}
                />
            </Navigator>
        </NavigationContainer>
    )
}