import  sortAsc from '../../assets/img/icon-sort-ascending.svg'

import style from './sort-sort.module.scss'

export const Sort= () =>(
    <section className={style.sort}>
        <img src={sortAsc}  className={style.sort__img} alt="" />
        <div className={style.sort__property}>По рейтингу</div>
    </section> 
)

 