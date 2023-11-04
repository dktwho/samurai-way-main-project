import React from 'react';
import styles from "../../Users/users.module.css";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

export const Pagination = ({totalUsersCount, pageSize, onPageChanged, currentPage} : PropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pagesArrCount = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArrCount.push(i)
    }

    return (
        <div>
            {pagesArrCount?.map(el => {
                return (
                    <span onClick={() => onPageChanged(el)}
                          className={currentPage === el ? styles.selectedPage : ''}>{el}</span>
                )
            })}
        </div>
    );
};
