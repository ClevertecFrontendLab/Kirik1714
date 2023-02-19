import { useSelector } from 'react-redux';

import facebook from '../../assets/img/facebook.svg';
import insta from '../../assets/img/insta.svg'
import linked from '../../assets/img/linked.svg'
import vk from '../../assets/img/vk.svg'

import style from './footer-footer.module.scss';

const SocNetwork=[facebook,insta,vk,linked]
 
export const Footer = () => {
  const status = useSelector(state=>state.books.status) 
  const isLoading =useSelector(state=>state.fullBook.isLoading)
  

  return (
    <footer className={status === 'loading' || isLoading === 'loading' ? style.footerBlur : style.footer}>
      <div className={style.footer__description}>
        <div className={style.footer__text}>© 2020-2023 Cleverland. Все права защищены.</div>
        <div className={style.footer__socNetwork}>
          {SocNetwork.map((item,index) => (
            <img src={item} key={item.index} alt={item} />
          ))}
        </div>
      </div>
    </footer>
  );
}
