import MovieAction from "../actions/getMoviesAction"
import axios from "axios"

class MovieMidware {

    static getMovie() {
        return (dispatch) => {
            axios
                .get("https://facebook.github.io/react-native/movies.json")
                .then((responce) => {
                    //console.log(responce.data)
                    dispatch(MovieAction.MoviAction(responce.data))
                })

        }
    }

}

export default MovieMidware