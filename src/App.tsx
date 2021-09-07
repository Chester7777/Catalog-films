import React, {useState} from 'react';
import './App.scss';
import Search from './components/search/search'
import axios from 'axios';
import {Paginator} from "./components/pagination/pagination";
import {CounterResults} from "./components/counterResults/counterResults";
import {useParams} from "react-router-dom";

function App(this: any) {
    const [totalResults, setTotalResults] = useState<number>(446)
    const [currentPage, setCurrentPage] = useState<number>(1)
    let [search, setSearch] = useState<string>("")
    let [films, setFilms] = useState<Array<any>>([])
    let [imdbID, setImdbID] = useState<string>("")
    let [response, setResponse] = useState<boolean>(false)
    let [error, setError] = useState<string>("")


    const getMove = (searchText: string) => {
        console.log(searchText)
        // searchText = evt.currentTarget
        setSearch(searchText)
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchText}&page=1`).then(data => {
            // axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchText}&page=${currentPage}`).then(data => {
            debugger
            console.log(data.data)
            setFilms(data.data.search)
            setTotalResults(data.data.totalResults)
            setImdbID(data.data.imdbID)
            setResponse(data.data.response)
            setError(data.data.error)
            // setCurrentPage(currentPage)
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
                    films.map(film => !!film ? <div key={imdbID}>{film}</div> : error
                    )}
                <Paginator currentPage={currentPage} totalResults={totalResults}/>
            </div>
        </div>
    );
}


export default App;


