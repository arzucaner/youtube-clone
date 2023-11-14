
import axios from 'axios';



const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

const homeAction = (data) => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/captions',
            params: {
                part: 'snippet',
                //videoId: 'M7FIvfx5J10'                
                q: data,
                maxresults: '50'
            },

            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            dispatch({ type: 'GET_VIDEOS', payload: response.data })
        }).catch(function (error) {
            console.error(error);
        });

    } catch (error) {
        console.log(error);
    }
}
export default homeAction