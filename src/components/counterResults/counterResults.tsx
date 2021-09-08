import s from "./counterResults.module.scss"

type CounterResultsType = {
    searchText: any
    totalResults: number
    response: boolean
}

export const CounterResults = ({searchText, totalResults, response}: CounterResultsType) => {

    return (
        <div className={s.results}>
            {response ? `You searched for: ${searchText}, ${totalResults} results found` : "Enter the title of the movie"}
        </div>
    )
}