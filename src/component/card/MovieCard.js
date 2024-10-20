

import { useDispatch } from 'react-redux';
import './MovieCard.css'
import { updatecurrentMovieId } from '../../features/movie/currentMovieSlice';
import { useNavigate } from 'react-router';

const MovieCard = ({img, title, id, rating}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleDetail (id) {
        localStorage.setItem("currentMovieId", id);
        dispatch(updatecurrentMovieId(id));
        navigate('/moviedetail');
    }

    return(
        <div className="cardContainer">
            <div className="cardImg">
                <img src={`https://image.tmdb.org/t/p/w500${img}`} alt='Movie Poster' className='cardImg' onClick={() => handleDetail(id)} />
            </div>
            <div className="cardShortDetail">
                <b style={{cursor : "pointer"}} title='Get Movie Details' onClick={() => handleDetail(id)}>{title}</b>
                <span>Rating : {rating}</span>
            </div>
        </div>
    );
};

export default MovieCard;