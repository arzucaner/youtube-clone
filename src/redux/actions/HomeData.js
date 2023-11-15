
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
            },

            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        dispatch({ type: 'GET VIDEOS', payload: response.data })
    } catch (error) {
        console.error(error);
    }
};



export default homeAction;
