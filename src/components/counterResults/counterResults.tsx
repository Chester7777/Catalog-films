import s from "./counterResults.module.scss"

type CounterResultsType = {
    searchText: string
    totalResults: number
    response: string
}

export const CounterResults = ({searchText, totalResults, response}: CounterResultsType) => {

    return (
        <div className={s.results}>
            {totalResults ? `You searched for: ${searchText}, ${totalResults} results found` : "Enter the title of the movie"}
        </div>
    )
}