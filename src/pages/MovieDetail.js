import { useSelector } from "react-redux";
import './MovieDetail.css';
import './pages.css';
import '../component/card/MovieCard.css';
import useMovieDetail from "../hooks/useMovieDetail";

const MovieDetail = () => {
    // const id = useSelector((state) => state.currentMovie.currentMovieId);  // It set to default when refresh
    const id = localStorage.getItem("currentMovieId");
    const api_key = useSelector((state) => state.api.apiText);

    const movieInfo = useMovieDetail(api_key, id);
    const credits = useMovieDetail(api_key, id, "credits");

    function gotoGoogle (name) {
        window.open(`https://www.google.com/search?q=${name}`, '_blank')
    }

    if (!movieInfo || !credits) {
        return <div>Loading...</div>; // Add a loading state when data is not available
    }

    return (
        <div>
            <div 
                className="hero" 
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path || ""})`
                }}
            >
                <div className="details">
                    <div className="info">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path || ""}`} 
                            className="poster" 
                            alt="Movie Poster" 
                        />
                        <div className="textInfo">
                            <h2>{movieInfo.original_title || ""}</h2>
                            <br />
                            <span className="rating">Rating: {movieInfo.vote_average || ""}</span>
                            <br />
                            <div className="runtime">
                                <span className="box">{movieInfo.runtime || ""} min</span>
                                <span className="genre">
                                    {/* Safely map over genres if they exist */}
                                    {movieInfo.genres ? movieInfo.genres.map((genre) => genre.name).join(", ") : ""}
                                </span>
                            </div>
                            <br />
                            <span className="date">Release Date: {movieInfo.release_date || ""}</span>
                        </div>
                    </div>
                    <div className="overview">
                        <h2>Overview</h2>
                        <p>{movieInfo.overview || "No overview available"}</p>
                    </div>
                </div>
            </div>
            <h2 style={{ margin: "30px", color: "#fff" }}>Cast</h2>
            <div className="replicatedCard">
                {/* Safely map over credits if they exist */}
                {credits.cast && credits.cast.length > 0 ? (
                    credits.cast.map((value, index) => (
                        <div className="cardContainer" key={index}>
                            <div className="cardImg">
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${value.profile_path || ""}`} 
                                    alt="Actor Poster" 
                                    className="cardImg" 
                                    onClick={() => gotoGoogle(value.original_name)}
                                />
                            </div>
                            <div className="cardShortDetail">
                                <b onClick={() => gotoGoogle(value.original_name)} style={{cursor : "pointer"}} title={`search ${value.original_name}`}>{value.original_name || ""}</b>
                                <span>Character : {value.character || ""}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No cast information available</p>
                )}
            </div>
        </div>
    );
};

export default MovieDetail;
