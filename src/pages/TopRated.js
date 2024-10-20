import { useState } from "react";
import MovieCard from "../component/card/MovieCard";
import './pages.css'
import useMovieList from "../hooks/useMovieList";
import { useSelector } from "react-redux";
import Pagination from "../component/Pagination";



const TopRated = () => {
    const api_key = useSelector((state) => state.api.apiText);
    const [page, setPage] = useState(1);
    
    function handlePage (data) {
        setPage(data);
    }
    
    const getTopMovieData = useMovieList(page, api_key, "top_rated");
    return (
        <div>
            <div className="replicatedCard">
                {getTopMovieData.results? getTopMovieData.results.map((value, index) => (
                    <MovieCard key={index}
                        title={value.title}
                        id={value.id}
                        rating={value.vote_average}
                        img={value.poster_path}
                    />
                )) : ""}
            </div>
            <Pagination
                current={handlePage}
                total={getTopMovieData? getTopMovieData.total_pages : 0}
            />
        </div>
    );
};

export default TopRated;