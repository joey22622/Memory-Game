import axios from "axios";


export default {
    getGifs: function(query) {
        return axios.get(`https://api.giphy.com/v1/gifs/search?apiKey=ih2IbJeuF1j03d7wJ5MpKRi13l3cXBAp&limit=12&q=${query}`)
    }
}