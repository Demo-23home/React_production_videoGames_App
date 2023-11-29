import styles from './Button.module.css';



interface Props{
    children : string ;
    color?: 'primary'| 'secondary'| 'danger';
    onClick: () => void;

}

const Button =({children, onClick, color = 'danger' }:Props) =>{
 return <button id='button' className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>{children}</button>
}
export default Button;