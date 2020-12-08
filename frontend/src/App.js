import React from 'react'
import MovieSelector from './components/MovieSelector'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => 
{
	return (
		<div id="App">
			<MovieSelector className="Movie-Container"/>
		</div>
	)
}

export default App;
