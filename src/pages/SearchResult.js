import { useState } from "react";
import MovieCard from "../component/card/MovieCard";
import './pages.css'
import useMovieList from "../hooks/useMovieList";
import { useSelector } from "react-redux";
import Pagination from "../component/Pagination";


const SearchResult = () => {
    const searchText = useSelector((state) => state.search.searchText);
    const api_key = useSelector((state) => state.api.apiText);
    const [page, setPage] = useState(1);
    
    function handlePage (data) {
        setPage(data);
    }
    
    const getSearchMovieData = useMovieList(page, api_key, "search", searchText);
    return (
        <div>
            <div className="replicatedCard">
                {getSearchMovieData.results? getSearchMovieData.results.map((value, index) => (
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
                total={getSearchMovieData? getSearchMovieData.total_pages : 0}
            />
        </div>
    );
}

export default SearchResult;