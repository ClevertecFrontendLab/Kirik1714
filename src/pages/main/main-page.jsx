
import { useSelector } from 'react-redux';

import { Error } from '../../component/error/error';
import { MainContent } from '../../component/maincontent/main-content';
import { Sidebar } from '../../component/sidebar/sidebar-sidebar';

import style from './main-page.module.scss'
 

export const MainPage = () => {
  const status = useSelector((state) => state.books.status);
  const isLoading = useSelector(state =>state.categoty.isLoading)


  if(status === 'error' || isLoading === 'error' ){
    return (
      <div className={style.MainPage__err}>
        <div  className={style.MainPage__err__sidebar}>
          <Sidebar  />
        </div>
        <div className={style.block__error}>
        <Error />
        </div>
      </div>
    );
  }

  return (
    <div className={status === 'loading' || isLoading ==='loading' ? style.MainPageBlur : style.MainPage}>
      <div className={style.MainPage__sidebar}>
        <Sidebar />
      </div> 

      <div className={style.MainPage__mainContent}>
        <MainContent />
      </div>
    </div>
  );
}
