import './style.css';
import { ReactComponent as AppsIcon } from './../../assets/images/apps.svg'
import Button from '../Button';

function Header({ isPortuguese }) {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <a href="https://accounts.google.com/mail/?tab=wm&ogbl">Gmail</a>
               </li>
               <li>
                  <a id="link-images" href="https://www.google.com.br/imghp?hl=pt-BR&ogbl">
                     {isPortuguese ? 'Images' : 'Imagens'}
                  </a>
               </li>
               <li className="apps-icon">
                  <AppsIcon></AppsIcon>
               </li>
               <li>
                  <Button>
                     {isPortuguese ? 'Sing In' : 'Fazer Login'}
                  </Button>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header;