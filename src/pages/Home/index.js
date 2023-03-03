import { Container, MovieList, Movie } from "./styles";

export function Home() {
    const movies = [
        {
            id: 1,
            title: "Spider-Man",
            imageUrl:
                "https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg",
        },
        {
            id: 2,
            title: "Thor",
            imageUrl:
                "https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg",
        },
        {
            id: 3,
            title: "Avengers",
            imageUrl:
                "https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg",
        },
    ];

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https://www.themoviedb.org/settings/api">
                                <img src={movie.imageUrl} alt={movie.title} />
                            </a>
                            <span>{movie.title}</span>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}
