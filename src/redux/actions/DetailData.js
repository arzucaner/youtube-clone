
import axios from 'axios';
require('dotenv').config();

const apiKey = process.env.YOUR_API_KEY;

const detailAction = (id) => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/captions',
            params: {
                part: 'snippet',
                //videoId: 'M7FIvfx5J10'                
                q: id,
                maxresults: '50'
            },

                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                }
            };

        try {
        const response = await axios.request(options);
        dispatch({ type: 'GET_VIDEOS', payload: response.data })
    } catch (error) {
        console.error(error);
    }

} catch (error) {
    console.log(error);
}
}
export default detailAction