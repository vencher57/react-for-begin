import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function isNull(v) {
    return (v === undefined || v === null) ? false : true;
}

function Movie({ mediumCoverImage, title, year, summary, genres, id }) {

    return (
        <div className={styles.movie}>
            <img src={mediumCoverImage} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/Detail/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>

                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                {isNull(genres) ?
                    <ul className={styles.movie__genres}>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                    : null
                }
            </div>

        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
};

export default Movie;