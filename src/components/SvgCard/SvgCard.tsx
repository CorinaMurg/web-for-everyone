import React from "react";
import styles from './SvgCard.module.css';

  
export default function SvgCard({ svg }: { svg: string }) {

    return (
        <div className={styles['svg-container']}>
            <div className={styles['svg-wrap']}>
                <div dangerouslySetInnerHTML={{ __html: svg }} />
            </div>
        </div>
    )
}