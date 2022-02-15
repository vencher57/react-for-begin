
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function isNull(v) {
    return (v === undefined || v === null) ? false : true;
}

function Detail() {
    const { id } = useParams();
    const [detailMovie, setDetailMovie] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setDetailMovie(json.data.movie);
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div>
            <img src={detailMovie.medium_cover_image} alt="logo" />
            <h2>{detailMovie.title}</h2>
            <p>{detailMovie.description_full}</p>
            {isNull(detailMovie.genres) ?
                <ul>
                    {detailMovie.genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
                : null
            }
        </div>
        
    )
}

export default Detail;