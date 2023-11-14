
import axios from 'axios';
require('dotenv').config();

const apiKey = process.env.youtube_API_KEY;

const searchAction = (keyword) => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                q: keyword,
                part: 'snippet,id',
                regionCode: 'US',
                maxresults: '50',
                order: 'date'
            },

            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            dispatch({ type: 'GET_Search', payload: response.data })
        } catch (error) {
            console.error(error);
        }

    } catch (error) {
        console.log(error);
    }
}
export default searchAction