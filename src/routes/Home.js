import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMoives = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);

    }

    useEffect(() => {
        getMoives();
    }, [])

    return (
        <div className={styles.container}>
            {loading ?  
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div> :
                <div className={styles.movies}>
                    {movies.map((item) => (
                        <Movie
                            key={item.id}
                            id={item.id}
                            year={item.year}
                            mediumCoverImage={item.medium_cover_image}
                            title={item.title}
                            summary={item.summary}
                            genres={item.genres} />
                    ))}
                </div>
            }
        </div>
    );
}

export default Home;