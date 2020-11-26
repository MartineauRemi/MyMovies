import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from "../components/Search"
import FilmDetail from '../components/FilmDetail';

const SearchStackNavigator = createStackNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <SearchStackNavigator.Navigator>
                <SearchStackNavigator.Screen name="Rechercher" title="Rechercher" component={Search}/>
                <SearchStackNavigator.Screen name="Détails du film" component={FilmDetail}/>
            </SearchStackNavigator.Navigator>
        </NavigationContainer>
    )
}
