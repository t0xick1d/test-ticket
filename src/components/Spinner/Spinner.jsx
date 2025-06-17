import style from './style.module.scss';

const Spinner = () => (
   <div className={style.container} data-testid="containerdiv">
      <div className={style.spinner} data-testid="spindiv" />
   </div>
);

export default Spinner;
