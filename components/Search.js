import React, {useState, useEffect} from 'react'
import {View, StyleSheet, TextInput, ActivityIndicator} from "react-native"
import {getFilmsFromApiWithSearchedText} from "../API/TMDBApi"
import {useSelector} from "react-redux"
import FilmList from './FilmList'

var search = "";
var page = 0;
var maxPages = 0;

export default function Search({navigation}) {
    const [value, setValue] = useState("");
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false)

    const favoriteFilms = useSelector((state) => state.favoriteFilms)
    
    //fat arrow for data binding
    const loadFilms = () => {
        if(search.length > 0){
            if(page === 0 || page < maxPages){
                setLoading(true)
                getFilmsFromApiWithSearchedText(search, page + 1).then(data => {
                     page = data.page;
                     maxPages = data.total_pages;
                     setFilms([...films, ...data.results]);
                     setLoading(false);
                 })
            }
        }
    }

    const searchFilms = () => {
        page = 0;
        maxPages = 0;
        search = value;
        setFilms([]);
    }

    useEffect(() =>  loadFilms(), [search])

    const displayFilmDetail = (id) => {
        navigation.navigate("Détails du film", {id: id});
    }

    return (
        <View style={styles.main_container}>
            <TextInput
                placeholder="Titre de film"
                style={styles.search_bar}
                onChangeText={(value) => {setValue(value)}}
                onSubmitEditing={searchFilms}
            />
            <FilmList
                films={films}
                favoriteFilms={favoriteFilms}
                loadFilms={loadFilms}
                page={page}
                maxPages={maxPages}
                displayFilmDetail={displayFilmDetail}
            />
            {loading ? 
            (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" color="steelblue"/>
                </View>
            )
            : null}
        </View>
    )
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 1
    },
    search_bar: {
      marginLeft: 1,
      marginRight: 1,
      marginTop: 1,
      height: 50,
      borderColor: 'black',
      borderWidth: 2,
      backgroundColor: "#eee",
      borderRadius: 3,
      paddingLeft: 5
    },
    loading_container:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
  });

