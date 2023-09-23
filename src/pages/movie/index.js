import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
        )
            .then((response) => response.json())
            .then((data) => {
                const res = data.results;
                let filme = res.find((key) => {
                    // eslint-disable-next-line
                    return key.id == id;
                });
                setMovie(filme);
            }); // eslint-disable-next-line
    }, []);

    return (
        <div>
            <header className="container-fluid">
                <div className="row text-center text-white">
                    <h2 className="col">Movie</h2>
                    <button href="#" className="link_button col-2 me-3">Seja Bem-vindo</button>
                </div>
            </header>
            <div className="body container align-self-start">
                <div className="col-5">
                    <img
                        className="img_movie"
                        src={`${imagePath}${movie.poster_path}`}
                        alt="{movie.title}"
                    />
                </div>
                <div className="col p-3">
                    <h2 className="titulo">{movie.title}</h2>
                    <h3 className="titulo">Data de lançamento:</h3>
                    <p className="movie-desc"> {movie.release_date}</p>
                    <div className="descricao">
                        <h4 className="titulo">Descrição: </h4>
                        <p className="movie-desc">{movie.overview}</p>
                    </div>
                    <Link to="/">
                        <button className="link_button">Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Movie;
