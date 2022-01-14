import React, { forwardRef } from 'react';

import styles from './index.module.css';

const ImgCard = ({src, title}, ref) => {
    return (
        <div className={styles['img-wrap']}>
            <img src={src} width="100%" className={styles['img-target']} ref={ref}/>
            <div className={styles['title']}>
                {title}
            </div>
        </div>
    )
}


export default forwardRef(ImgCard);