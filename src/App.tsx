import React, {useState} from 'react';
import './App.scss';
import Search from './components/search/search'
import axios from 'axios';
import {Paginator} from "./components/pagination/pagination";
import {CounterResults} from "./components/counterResults/counterResults";
import {Loading} from "./components/loader/loading";
import {Films} from "./components/films/films";


export type FilmType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

export type GetDataType = {
    Response: string
    Search: Array<FilmType>
    totalResults: string
}

function App(this: any) {
    const [totalResults, setTotalResults] = useState<number>(446)
    const [currentPage, setCurrentPage] = useState<number>(1)
    let [search, setSearch] = useState<string>("")
    let [films, setFilms] = useState<Array<FilmType>>([])
    let [response, setResponse] = useState<string>("False")
    let [error, setError] = useState<string>("")
    const [spinner, setSpinner] = useState<boolean>(false)


    const changePage = (page: number) => {
        fetchMovies(search, page)
    }

    const getMove = (searchText: string) => {
        console.log(searchText)
        setSearch(searchText)
        fetchMovies(searchText, currentPage);
    }

    const fetchMovies = async (searchText: string, page: number) => {

        setSpinner(true)
        try {
            let response: any = await axios.get<GetDataType>(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchText}&page=${page}`)
            if (response.data.Response && response.data.Response === "True") {
                setFilms(response.data.Search)
                setTotalResults(response.data.totalResults)
                setResponse(response.data.Response)
                setError(response.data.error)
                setCurrentPage(currentPage)
            } else {
                setError(`Error in request : ${response.data.Error}`)
            }

        } catch (error) {
            console.log(`Error: ${error}`)
        } finally {
            setSpinner(false)
        }
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
                            </div>
                            <div className="col">
                                12
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                error ? error :
                    <div className="container">
                        {spinner ? <Loading/> : ""}
                        <CounterResults
                            searchText={search}
                            totalResults={totalResults}
                            response={response}
                        />
                        <Films films={films}/>
                        <Paginator
                            totalResults={totalResults}
                            changePage={changePage}
                        />
                    </div>
            }
        </div>
    );
}


export default App;


