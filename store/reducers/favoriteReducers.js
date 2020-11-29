const initialState = {favoriteFilms : []}

export default function toggleFavorite(state = initialState, action){
    let newState
    switch(action.type){
        case "TOGGLE_FAVORITE":
            const favoriteFilmIndex = state.favoriteFilms.findIndex(film => film.id === action.value.id)
            if(favoriteFilmIndex !== -1){
                newState = {
                    ...state,
                    favoriteFilms: state.favoriteFilms.filter((film, index) => index !== favoriteFilmIndex)}
            }else{
                newState = {
                    ...state,
                    favoriteFilms: [...state.favoriteFilms, action.value]
                }
            }
            return newState || state
        default:
            return state
    }
}