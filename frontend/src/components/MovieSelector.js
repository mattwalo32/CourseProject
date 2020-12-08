import MovieCardContainer from './MovieCardContainer'
import { SUBMIT_ENDPOINT, TEXT_LOADING } from './../constants'
import { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './MovieSelector.css';
import ResultModal from './ResultModal';

const MovieSelector = () => {
    const [cardData, setCardData] = useState([]);
    const [movie, setMovie] = useState("");
    const [areResultsVisible, setResultsVisible] = useState(false);
    const [resultText, setResultText] = useState("");

    const OnKeyDown = (event) => {
        if (event.key === 'Enter')
            OnAddMovie();
    }

    const OnAddMovie = () => {
        var movieData = {
            id: cardData.length + 1,
            title: movie,
            index: cardData.length + 1,
        }

        setCardData(cardData.concat(movieData));
        setMovie("");
    }

    const SubmitMovies = async function() {
        setResultsVisible(true);
        setResultText(TEXT_LOADING)
        var response = await fetch(SUBMIT_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(cardData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        var data = await response.json();
        setResultText(data['message'])
    }

    return (
        <div id='movie-selector-container' className='movie-selector-container-w' >
                <ResultModal isVisible={areResultsVisible} setVisibility={setResultsVisible} content={resultText}/>
                <InputGroup>
                    <FormControl 
                        placeholder="Enter a Movie"
                        aria-label="Enter a Movie"
                        value={movie}
                        onKeyDown={OnKeyDown}
                        onChange={event=>setMovie(event.target.value)} />
                    <InputGroup.Append>
                        <Button variant="primary" onClick={OnAddMovie}>Add Movie</Button>
                    </InputGroup.Append>
                </InputGroup>
                <MovieCardContainer movies={cardData} />
                <Button disabled={cardData.length < 2} onClick={SubmitMovies} id='result-button'>See Results</Button>
        </div>
    );
}

export default MovieSelector;
