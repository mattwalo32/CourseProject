import React, { useEffect } from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { Card, Badge } from "react-bootstrap";
import { useState } from 'react';
import './Card.css'

const MovieCardContainer = (props) => {
	const [movies, setMovies] = useState(props.movies);

    useEffect(() => {
		let newMovies = Array.from(movies);

		for (let i = 0; i < props.movies.length; i++) {
			var isMovieAlreadyInList = false;
			for (let j = 0; j < movies.length; j++) {
				if (props.movies[i].id === movies[j].id) {
					isMovieAlreadyInList = true;
					break;
				}
			}

			if (!isMovieAlreadyInList)
				newMovies.push(props.movies[i]);
		}

		setMovies(newMovies);
	}, [props.movies, movies])

  const itemRenderer = (item, index) => {
    return (
		<Card body><h3 className='card-content'>
			<Badge variant="primary">{index + 1}</Badge> 
			{" " + item.title}
		</h3></Card>
	);
  }

    return (
      <div className='card-container'>
        <RLDD
          items={movies}
          itemRenderer={itemRenderer}
          onChange={setMovies}
        />
      </div>
    );
}

export default MovieCardContainer;
