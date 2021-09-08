import React, {useState} from 'react';
import './App.scss';
import Search from './components/search/search'
import axios from 'axios';
import {Paginator} from "./components/pagination/pagination";
import {CounterResults} from "./components/counterResults/counterResults";
import {useParams} from "react-router-dom";


export type FilmsType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

function App(this: any) {
    const [totalResults, setTotalResults] = useState<number>(446)
    const [currentPage, setCurrentPage] = useState<number>(1)
    let [search, setSearch] = useState<string>("")
    let [films, setFilms] = useState<Array<FilmsType>>([])
    let [imdbID, setImdbID] = useState<string>("")
    let [response, setResponse] = useState<boolean>(false)
    let [error, setError] = useState<string>("")


    const changePage = (page: number) => {
        fetchMovies(search, page)
    }

    const getMove = (searchText: string) => {
        console.log(searchText)
        // searchText = evt.currentTarget
        setSearch(searchText)
        fetchMovies(searchText, currentPage);
    }

    const fetchMovies = (searchText: string, page: number) => {
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchText}&page=${page}`).then(data => {
            // debugger
            console.log(data.data)
            setFilms(data.data.Search)
            // debugger
            setTotalResults(data.data.totalResults)
            setImdbID(data.data.imdbID)
            setResponse(data.data.Response)
            setError(data.data.error)
            setCurrentPage(currentPage)
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
                                <Search handleKeyUp={(evt: string) => getMove(evt)}/>
                                {/*<Search handleKeyUp={(evt: KeyboardEvent) => getMove(evt)}/>*/}
                            </div>
                            <div className="col">
                                12
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <CounterResults
                    searchText={search}
                    films={films}
                    totalResults={totalResults}
                    response={response}
                    error={error}
                />
            </div>
            <div className="container">
                {
                    films.length > 0 ?
                    films.map(film => <div key={film.imdbID}>{film.imdbID}</div>)
                        : error
                }
                <Paginator currentPage={currentPage} totalResults={totalResults} changePage={changePage}/>
            </div>
        </div>
    );
}


export default App;


