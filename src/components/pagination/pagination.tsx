import React, {useState} from "react";
import s from "./paginator.module.css"
import cn from "classnames";

type PaginatorType = {
    totalResults: number
    changePage: (page: number) => void
}


export const Paginator = ({ totalResults, changePage}: PaginatorType) => {
    const [portionSize, setPortionSize] = useState<number>(10)
    const [currentPage, setCurrentPage] = useState<number>(1)
    let [portionNumber, setPortionNumber] = useState<number>(1);


    let pagesCount = Math.ceil(totalResults / 10);
    let pages = [];

    const onPageChanged = (p: number) => {
        setCurrentPage(p);
        changePage(p)
    }


    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>{"<"}</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span
                            className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                            key={p}
                            onClick={(e) => {
                                onPageChanged(p)
                            }}>{p}</span>
                    })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>{">"}</button>
            }
        </div>
    )
}

