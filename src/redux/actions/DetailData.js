
import axios from 'axios';


const apiKey = process.env.YOUR_API_KEY;

const detailAction = (id) => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/captions',
            params: {part: 'contentDetails, snippet, statisttics', id: id},
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