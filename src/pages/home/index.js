import React, { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        const apiUrl = searchTerm
            ? `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${searchTerm}`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [searchTerm, KEY]);

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <Container>
            <div>
                <header className="container-fluid">
                    <div className="row text-center text-white">
                        <h2 className="col">Movie</h2>
                        <form onSubmit={handleSearch} className="col me-3">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="btn1 btn" placeholder="Pesquisar por título"
                            />
                            <button type="submit" className="btn btn2">Pesquisar</button>
                        </form>
                    </div>
                </header>
            </div>

            <MovieList>
                {movies.map((movie) => {
                    return (
                        <div className="card col " key={movie.id}>
                            <Movie>
                                <img
                                    src={`${imagePath}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <span>{movie.title}</span>

                                <Link to={`/${movie.id}`}>
                                    <Btn>Detalhes</Btn>
                                </Link>
                            </Movie>
                        </div>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;
