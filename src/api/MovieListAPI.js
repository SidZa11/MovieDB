import axios from 'axios';

const MovieListAPI  = async (page, api_key, purpose, query) => {
    const BASE_URL = "https://api.themoviedb.org/3";

    if(!api_key) {
        throw new Error("API not found!")
    }else {
        
        if(purpose == "search") {
            try {
            
                const response = await axios.get(`${BASE_URL}/${purpose}/movie`, {
                    params : {
                        api_key : api_key,
                        language : "en-US",
                        query : query,
                        page : page
                    }
                });
                return response;
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
            
                const response = await axios.get(`${BASE_URL}/movie/${purpose}`, {
                    params : {
                        api_key : api_key,
                        language : "en-US",
                        page : page
                    }
                });
                return response;
            } catch (error) {
                console.error(error)
            }
        }

    }
}

export default MovieListAPI;