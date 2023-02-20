import attention from '../../assets/img/attention.svg'
import close from '../../assets/img/closeBlack.svg'

import style from './error.module.scss' 

export const Error = () => {
  return (
    <div className={style.block__error} data-test-id='error'>
        <div className={style.attention}><img src={attention} alt="attention" /></div>
        <div className={style.attention__text}>Что-то пошло не так. Обновите страницу через некоторое время.</div>
        <div className={`${style.close_attention} ${style.img}`}><img src={close} alt="close" /></div>
        
    </div>
  )
}
