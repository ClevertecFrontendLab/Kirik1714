import imgRecangleWhite from  '../../assets/img/locationRecangle.svg';
import imgRecangleGray from  '../../assets/img/locationRecangleGray.svg';
import imgRowGray from  '../../assets/img/locationRowGray.svg';
import imgRowWhite from  '../../assets/img/locationRowWhite.svg';

import style from './location-book.module.scss';

 

export const Locationbook = ({location,changeLocationToRow,changeLocationToReactangle}) =>{
   

    return (
      <section className={style.location}>
        <div 
          role='button'
          tabIndex='0'
          className={`${location ? style.location__active : style.location__general} `}
          onClick={changeLocationToReactangle}
          onKeyDown={changeLocationToReactangle}
          
        >
          <img data-test-id='button-menu-view-window'
            src={location ? imgRecangleWhite : imgRecangleGray} className={style.img} alt='row' />
        </div>

        <div
          role='button'
          tabIndex='0'
          className={`${location ? style.location__general : style.location__active} `}
          onClick={changeLocationToRow}
          onKeyDown={changeLocationToRow}
        >
          <img data-test-id='button-menu-view-list' src={location ? imgRowGray : imgRowWhite} alt='row' />
        </div>
      </section>
    );
}

