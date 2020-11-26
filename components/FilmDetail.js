import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, ScrollView, Text, Image } from 'react-native'
import {getFilmDetailFromApi, getImageFromApi} from "../API/TMDBApi"
import moment from 'moment'
import numeral from 'numeral'

export default function FilmDetail({route}) {
  const {id} = route.params;
  const [loading, setLoading] = useState(true)
  const [film, setFilm] = useState(undefined)

  function displayLoading(){
    if(loading){
      getFilmDetailFromApi(id).then((data) => {
        setFilm(data)
      }) 
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="steelblue"/>
        </View>
      )
    }
  } 

  function displayFilmItem(){
    if(film != undefined){
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image source={{uri: getImageFromApi(film.backdrop_path)}} style={styles.image}/>
          <Text style={styles.title_text}>{film.title}</Text>
          <Text style={styles.description_text}>{film.overview}</Text>
          <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
          <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
          <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
          <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
          <Text style={styles.default_text}>Genre(s) : {film.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}
          </Text>
          <Text style={styles.default_text}>Companie(s) : {film.production_companies.map(function(company){
              return company.name;
            }).join(" / ")}
          </Text>
        </ScrollView>
      )
    }
  }

  useEffect(() => {
      setLoading(false)
  }, [film])

  return (
    <View style={styles.main_container}>
     {displayLoading()}
     {displayFilmItem()}
    </View>
    )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container:{
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollview_container:{
    flex: 1,
  },
  image:{
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})
