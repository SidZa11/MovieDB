import axios from 'axios';

const MovieDetailAPI  = async (api_key, id, purpose) => {
    const BASE_URL = "https://api.themoviedb.org/3";

    if(!api_key) {
        throw new Error("API not found!")
    }else {
        
        if(purpose) {
            try {
            
                const response = await axios.get(`${BASE_URL}/movie/${id}/${purpose}`, {
                    params : {
                        api_key : api_key,
                        language : "en-US",
                    }
                });
                return response;
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
            
                const response = await axios.get(`${BASE_URL}/movie/${id}`, {
                    params : {
                        api_key : api_key,
                        language : "en-US",
                    }
                });
                return response;
            } catch (error) {
                console.error(error)
            }
        }

    }
}

export default MovieDetailAPI;