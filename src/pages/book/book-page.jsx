/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import avaRew from '../../assets/img/ava__Rew.svg'
import starVoid from '../../assets/img/star_void.svg'
import star from '../../assets/img/StarFull.svg'
import strokeBlack from '../../assets/img/StrokeBlack.svg';
import { Error } from '../../component/error/error'
import { Loader } from '../../component/Loader/loader'
import { Slider } from '../../component/slider/slider'
import { fetchFullBook } from '../../redux/Slices/full-book-slice'

import style from './book-page.module.scss'

const Stars =[star,star,star,star,starVoid]
  
 
export const BookPage = () => {
  const dataBook=useSelector(state=>state.fullBook.fullBook);
  const {id}=useParams();
  console.log(id)
  const [isOpen,setIsOpen] =useState(false)
  const dispatch =useDispatch();
  const isLoading =useSelector(state=>state.fullBook.isLoading)

  const sourceInfo = isLoading !=='error' ? `${dataBook.categories} / ${dataBook.title}`:'Бизнес книги';

  useEffect(()=>{
    dispatch(fetchFullBook(id))
  },[id])

  if(isLoading==='error'){
    return ( 
      <div className={style.error}>
      <section className={style.source}>{sourceInfo}</section>
        <div className={style.block__error}>
          <Error />
        </div>
      </div>
    );
    
  }

  return (
    <section className={style.full__book}>
      <section
        className={isLoading === 'loading' ? style.source__blur : style.source}
      >{`${dataBook.categories} / ${dataBook.title}`}</section>
      {isLoading === 'loading' ? (
        <Loader />
      ) : (
        <div className={style.block}>
          <section className={style.block__book}>
            <div className={style.slider}>
              <Slider dataBook={dataBook} />
            </div>

            <section className={style.main__description}>
              <div className={style.title}>{dataBook.title}</div>
              <div className={style.author}>{`${dataBook.authors},${dataBook.issueYear}`}</div>
              <a href='/' className={style.button}>
                ЗАБРОНИРОВАТЬ
              </a>
              <section className={style.info}>
                <div className={`${style.about__book} ${style.title}`}>О книге</div>
                <article className={style.topic}>{dataBook.description}</article>
              </section>
            </section>
          </section>
          <section className={style.other__description}>
            <section className={style.rating}>
              <div className={style.title}>Рейтинг</div>
              <div className={style.stars}>
                {Stars.map((item) => (
                  <img src={item} className={style.start__item} alt='star' />
                ))}
                <div className={style.average_sum}>4.3</div>
              </div>
            </section>
            <section className={style.more__info}>
              <div className={style.title}>Подробная информация</div>
              <div className={style.description}>
                <div className={`${style.description__block} ${style.first}`}>
                  <div className={style.block__item}>
                    <div className={style.params__item}>Издательство</div>
                    <div className={style.property__item}>{dataBook.publish}</div>
                  </div>
                  <div className={style.block__item}>
                    <div className={style.params__item}>Год издания</div>
                    <div className={style.property__item}>{dataBook.issueYear}</div>
                  </div>
                  <div className={style.block__item}>
                    <div className={style.params__item}>Страниц</div>
                    <div className={style.property__item}>{dataBook.pages}</div>
                  </div>
                  <div className={style.block__item}>
                    <div className={style.params__item}>Переплёт</div>
                    <div className={style.property__item}>{dataBook.cover}</div>
                  </div>
                  <div className={style.block__item}>
                    <div className={style.params__item}>Формат</div>
                    <div className={style.property__item}>{dataBook.format}</div>
                  </div>
                </div>
                <div className={`${style.description__block} ${style.second}`}>
                  <div className={style.block__item}>
                    <div className={style.params__item}>Жанр</div>
                    <div className={style.property__item}>{dataBook.categories}</div>
                  </div>
                  <div className={style.block__item}>
                    <div className={style.params__item}>Вес</div>
                    <div className={style.property__item}>{dataBook.weight} г</div>
                  </div>
                  <div className={style.block__item}>
                    <div className={style.params__item}>ISBN</div>
                    <div className={style.property__item}>{dataBook.ISBN}</div>
                  </div>

                  <div className={style.block__item}>
                    <div className={style.params__item}>Изготовитель</div>
                    <div className={style.property__item}>{dataBook.producer}</div>
                  </div>
                </div>
              </div>
            </section>
            <section className={style.reviews}>
              <div
                className={style.title}
                role='button'
                tabIndex='0'
                onClick={() => setIsOpen(!isOpen)}
                onKeyPress={() => setIsOpen(!isOpen)}
              >
                Отзывы
                <span className={style.count}>2</span>
                <img
                  src={strokeBlack}
                  data-test-id='button-hide-reviews'
                  className={isOpen ? style.strokeActive : style.strokeNotActive}
                  alt=''
                />
              </div>

              {isOpen && dataBook.comments && (
                <div className={style.reviews__block}>
                  {dataBook.comments.map((item) => (
                    <div className={style.review__item}>
                      <div className={style.block__user}>
                        <img
                          src={
                            item.user.avatarUrl
                              ? `https://strapi.cleverland.by/api/books/${id}${item.user.avatarUrl}`
                              : avaRew
                          }
                          className={style.user__ava}
                          alt='ava'
                        />
                        <div className={style.user_info}>
                          <div className={style.user__fio}>{`${item.user.firstName},${item.user.firstName}`}</div>
                          <div className={style.user__data__posted}>{item.createdAt}</div>
                        </div>
                      </div>
                      <div className={style.stars}>
                        {Stars.map((item) => (
                          <img src={item} className={style.start__item} alt='star' />
                        ))}
                      </div>
                      <div className={style.block__topic}>{item.text}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>
            <section className={style.mark__book}>
              <a href='/' data-test-id='button-rating' className={`${style.button} ${style.mark__btn}`}>
                ОЦЕНИТЬ КНИГУ
              </a>
            </section>
          </section>
        </div>
      )}
    </section>
  );
}