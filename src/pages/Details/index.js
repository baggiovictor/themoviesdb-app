import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { ApiKey } from "../../config/key";
import { Container } from './styles.js'

export function Details() {
    const image_path = 'https://image.tmdb.org/t/p/w500';
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                const { title, overview, poster_path, release_date } = data;

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date
                }
                console.log(movie);
                setMovie(movie);
            })
    }, [id])

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}></img>

                <div className="details">
                    <h1>{movie.title}</h1>
                    <span> Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Data de Lançamento: {movie.releaseDate}</span>
                    <Link to='/'>
                        <button>Voltar</button>
                    </Link>

                </div>
            </div>
        </Container>
    )
}