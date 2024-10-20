import { useState, useEffect, useCallback, useRef } from 'react';
import MovieListAPI from '../api/MovieListAPI';


const useMovieList = (page, api_key, purpose, query) => {
    const [data, setData] = useState([]);

    const fetchTelemetryData = useCallback(async () => {
        try {
            const response = await MovieListAPI(page, api_key, purpose, query);
            setData(response?.data);
        } catch (error) {
            console.error('Error fetching telemetry data:', error);
        }
    }, [page, api_key, purpose, query]);

    useEffect(() => {
        if (api_key) {
            fetchTelemetryData();
        }
    }, [fetchTelemetryData]);

    return data;
};

export default useMovieList;