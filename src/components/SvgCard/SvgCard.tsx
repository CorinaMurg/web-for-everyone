import React from "react";
import styles from './SvgCard.module.css';

export interface SvgCardTypes {
    svg: string;
}
export default function SvgCard({ svg }: SvgCardTypes) {

    return (
        <div className={styles['svg-container']}>
            <div className={styles['svg-wrap']}>
                <div dangerouslySetInnerHTML={{ __html: svg }} />
            </div>
        </div>
    )
}