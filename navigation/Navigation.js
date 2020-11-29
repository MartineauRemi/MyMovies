import React from 'react'
import {Image, StyleSheet} from "react-native"
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Search from "../components/Search"
import Favorites from "../components/Favorites"
import FilmDetail from '../components/FilmDetail'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const SearchStackNavigator = createStackNavigator();
const FavoritesStackNavigator = createStackNavigator();
const Tab = createBottomTabNavigator()

function searchStackNavigator(){
    return (
        <SearchStackNavigator.Navigator>
            <SearchStackNavigator.Screen name="Rechercher" title="Rechercher" component={Search}/>
            <SearchStackNavigator.Screen name="Détails du film" component={FilmDetail}/>
        </SearchStackNavigator.Navigator>
    )
}

function favoritesStackNavigator(){
    return (
        <FavoritesStackNavigator.Navigator>
            <FavoritesStackNavigator.Screen name="Favoris" title="Favoris" component={Favorites}/>
        </FavoritesStackNavigator.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: () => {
                        switch(route.name){
                            case "Rechercher":
                                return <Image source={require("../images/ic_search.png")} style={styles.image}/>
                            case "Favoris":
                                return <Image source={require("../images/ic_favorite.png")} style={styles.image}/>
                            default:
                                return <Image source=""/>
                        }
                    }
                })}
                tabBarOptions={{
                    activeBackgroundColor: "#ddd",
                    inactiveBackgroundColor: "white",
                    showLabel: false
                }}>
                <Tab.Screen name="Rechercher" component={searchStackNavigator}/>
                <Tab.Screen name="Favoris" component={favoritesStackNavigator}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 30,
        height: 30
    }
})