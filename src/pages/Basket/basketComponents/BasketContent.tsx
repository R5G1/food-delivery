import BasketContentForm from './BasketContentForm';
import BasketCreateCard from './BasketCreateCard';
import style from './style/BasketContent.module.scss';
import imgBtn from './style/images/1.svg';
function BasketContentCard() {
  return (
    <div className={style.conteiner}>
      <div className={style.basketContentConteiner}>
        <BasketCreateCard />
        <BasketContentForm />
      </div>
    </div>
  );
}

export default BasketContentCard;
