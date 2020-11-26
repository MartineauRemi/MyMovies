import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import { getImageFromApi } from '../API/TMDBApi';

export default function FilmItem({film, displayFilmDetail}) {
    const {id, title, vote_average, overview, release_date, poster_path} = film;

    return (
        <TouchableOpacity style={styles.main_container} onPress={() => displayFilmDetail(id)}>
            <Image source={{uri: getImageFromApi(poster_path)}} style={styles.image}/>
            <View style={styles.infos_container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.vote_average}>{vote_average}</Text>
                </View>
                <View style={styles.description_container}>
                <Text
                    style={styles.overview}
                    numberOfLines={6}>
                        {overview}
                </Text>
                </View>
                <View style={styles.date_container}>
                <Text style={styles.release_date}>Sorti le {release_date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container:{
        height: 190,
        flexDirection: "row",
    },
    image:{
        width: 120,
        height: 180,
        margin: 5,
    },
    infos_container:{
        flex: 1,
        margin: 5
    },
    header:{
        flex: 3,
        flexDirection: "row",
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
        flexWrap: "wrap",
        flex: 1,
        paddingRight: 5
    },
    vote_average:{
        fontSize: 26,
        fontWeight: "bold",
        color: "gray"
    },
    description_container:{
        flex: 7,
    },
    overview:{
        color: "gray",
        fontStyle: "italic"
    },
    date_container:{
        flex: 1,
    },
    release_date:{
        textAlign: "right",
        fontSize: 14
    },


})
