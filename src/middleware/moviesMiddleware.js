import axios from 'axios'

export default function getMoviesAPI() {
    //Uses Axios here
    axios
        .get('https://facebook.github.io/react-native/movies.json')
        .then(responseJson => {
            return responseJson
        })
        .catch(error => {
            throw error
        });
}