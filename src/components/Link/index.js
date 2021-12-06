import './style.css';

function Link({ children, onClick }) {
   return (
      <button onClick={onClick}>{children}</button>
   )
}

export default Link;