import React from "react";
import spinner from '../../asseds/images/__Iphone-spinner-1.gif'
import s from './loading.module.scss'

export const Loading = () => {
    return (
        <div>
            <div className={s.loadingStyle}><img src={spinner} alt="Be patient..."/></div>
        </div>

    );
}

