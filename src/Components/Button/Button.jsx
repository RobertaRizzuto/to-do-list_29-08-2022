import './index.css';

const Button = ({textContent, onClick, className, id, type}) => {
  return (
    <button  type={type} onClick={onClick} id={id} className={className}>{ textContent }</button>
  )
}

export default Button;