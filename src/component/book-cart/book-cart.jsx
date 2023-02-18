
import  imgVoidBook from '../../assets/img/imgVoidBook.png'
import starVoid from '../../assets/img/star_void.svg'
import starFull from '../../assets/img/StarFull.svg'

import style from './book-cart.module.scss'

const Stars =[starFull,starFull,starFull,starFull,starVoid]
 

export const  BookCart = ({title,location,image,authors,issueYear}) => {

  const isImage = image ==null ?imgVoidBook:`https://strapi.cleverland.by${image.url}`;

    return (
      <section className={location ? style.cart__block : style.cart__row} data-test-id='card'>
        <img
          src={isImage}
          className={ style.block__img }
          alt='foto-Book'
        />
        <div className={style.block}>
          <section className={style.block__reviews}>
            {Stars.map((item) => (
              <img src={item} className={style.reviews__item} alt='star' />
            ))}
          </section>
          <section className={style.block__description}>
            <div className={style.description__title}>{title}</div>
            <div className={style.description__author}>{`${authors[0]},${issueYear}`}</div>
          </section>
          <a href='/' className={style.block__button}>
            ЗАБРОНИРОВАТЬ
          </a>
        </div>
      </section>
    );
}
