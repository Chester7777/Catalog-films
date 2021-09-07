import s from "./counterResults.module.scss"
import {useParams} from "react-router-dom";

type CounterResultsType = {
    searchText: any
    films: Array<any>
    totalResults: number
    response: boolean
    error: string
}

export const CounterResults = ({searchText, films, totalResults, response, error}: CounterResultsType) => {
    // let searchText = useParams()

    return (
        <div className={s.results}>
            {!!response ? `You searched for: ${searchText}, ${totalResults} results found` : error}
            {/*You searched for: {searchText}, {totalResults} results found*/}

        </div>
    )
}