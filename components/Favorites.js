import React from 'react'
import {View, StyleSheet} from "react-native"
import FilmList from './FilmList'
import {useSelector} from "react-redux"

export default function Favorites({navigation}) {
    const favorites = useSelector((state) => state.favoriteFilms)
    const displayFilmDetail = (id) => {
        navigation.navigate("Détails du film", {id: id});
    }

    return (
        <View style={styles.main_container}>
            <FilmList
                films={favorites}
                favoriteFilms={favorites}
                displayFilmDetail={displayFilmDetail}
                loadFilm={() =>{}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})
