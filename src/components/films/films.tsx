import placeholder from "../../asseds/images/placeholder.png";
import React from "react";
import {FilmType} from "../../App";
import s from "./films.module.scss"


type FilmsType = {
    films: Array<FilmType>
}

export const Films = ({films}: FilmsType) => {

    return <div className={s.container_films}>
        {
            films && films.length > 0 ?
                films.map((film) => <div className={s.container_film} key={film.imdbID}>
                        <img src={!!film.Poster ? film.Poster : placeholder} alt={""}/>
                        <div className={s.container_text}>
                            {/*<div>{`Name: ${film.Title}`}</div>*/}
                            {/*<div>{`Year: ${film.Year}`}</div>*/}
                            {/*<div>{`ID: ${film.imdbID}`}</div>*/}
                            {/*<div>{`Type: ${film.Type}`}</div>*/}
                            <div><span className={s.container_text_bold}>Name: </span>{film.Title}</div>
                            <div><span className={s.container_text_bold}>Year: </span>{film.Year}</div>
                            <div><span className={s.container_text_bold}>ID: </span>{film.imdbID}</div>
                            <div><span className={s.container_text_bold}>Type: </span>{film.Type}</div>
                            {/*{`Name: ${film.Title} Year: ${film.Year} ${film.imdbID}  ${film.Poster} ${film.Type} `}*/}
                        </div>
                    </div>
                )
                : ""
        }
    </div>
}