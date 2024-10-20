import { useState, useEffect, useCallback, useRef } from 'react';
import MovieDetailAPI from '../api/MovieDetailAPI';


const useMovieDetail = (api_key, id, purpose) => {
    const [data, setData] = useState([]);

    const fetchTelemetryData = useCallback(async () => {
        try {
            const response = await MovieDetailAPI(api_key, id, purpose);
            setData(response?.data);
        } catch (error) {
            console.error('Error fetching telemetry data:', error);
        }
    }, [api_key, id, purpose]);

    useEffect(() => {
        if (api_key) {
            fetchTelemetryData();
        }
    }, [fetchTelemetryData]);

    return data;
};

export default useMovieDetail;