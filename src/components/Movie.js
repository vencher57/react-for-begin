import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function isNull(v) {
    return (v === undefined || v === null) ? false : true;
}

function Movie({mediumCoverImage, title, summary, genres, id}) {
    
    return (
        <div>
            <img src={mediumCoverImage} alt="logo" />
            <h2><Link to={`/Detail/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            {isNull(genres) ?
                <ul>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
                : null
            }
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    mediumCoverImage : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired
};

export default Movie;