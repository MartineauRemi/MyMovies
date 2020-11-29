import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmItem from './FilmItem'

export default function FilmList({films, favoriteFilms, loadFilms, displayFilmDetail}) {
    return (
        <FlatList
                data= {films}
                keyExtractor={(film) => film.id.toString()}
                renderItem = {({item}) => <FilmItem
                                            film={item}
                                            displayFilmDetail={displayFilmDetail}
                                            isFilmFavorite={(favoriteFilms.findIndex((film) => film.id === item.id) !== -1)? true : false}
                                          />
                             }
                onEndReachedThreshold={0.5}
                onEndReached={loadFilms}
                style={styles.list}
            />
    )
}

const styles = StyleSheet.create({
    list:{
        flex: 1
    }
})