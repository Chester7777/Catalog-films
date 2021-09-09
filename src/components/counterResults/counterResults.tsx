import s from "./counterResults.module.scss"

type CounterResultsType = {
    searchText: string
    totalResults: number
}

export const CounterResults = ({searchText, totalResults}: CounterResultsType) => {
    let error = "Enter the title of the movie"
    return (
        <div className={s.results}>
            {totalResults ? `You searched for: ${searchText}, ${totalResults} results found` : error}
        </div>
    )
}