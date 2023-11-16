import React, {useState} from 'react';
import styles from './Pagination.module.css'
import classNames from "classnames";
import {v4 as uuid4} from 'uuid';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    portionSize: number
}

export const Pagination= ({totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10}: PropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pagesArrCount = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArrCount.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (
        <div className={classNames(styles.paginator)}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pagesArrCount.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)?.map(el => {
                return (
                    <span key={uuid4()}
                          className={classNames({[styles.selectedPage]: currentPage === el}, styles.pageNumber)}
                          onClick={() => onPageChanged(el)}
                    >{el}</span>
                )
            })}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    );
};
