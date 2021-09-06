import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.scss';
import Search from './components/search/search'
import axios from 'axios';

function App(this: any) {

	const getMove = (searchText: string) => {
		console.log(searchText)
		axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchText}&page=1`).then(data => {
			console.log(data.data)
		})
	}

  return (
    <div className="App">
      <div className="header">
			<div className="flex justify-center align-center">
				<div className="container">
					<div className="row">
						<div className="col logo">Movie Catalog</div>
						<div className="col search">
							<Search handleKeyUp={(evt: string) => getMove(evt)}  />
						</div>
						<div className="col">
							12						
						</div>
					</div>
				</div>
			</div>
			</div>
			<div className="container">

			</div>
			<div className="container">1</div>
    </div>
  );
}
 

export default App;


