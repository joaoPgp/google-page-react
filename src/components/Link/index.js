import './style.css';

function Link({ children, onClick }) {
   return (
      <button className='btn-link' onClick={onClick}>{children}</button>
   )
}

export default Link;