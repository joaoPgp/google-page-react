import './style.css'
import GoogleLogo from './../../assets/images/google-logo.png';
import { ReactComponent as SearchIcon } from './../../assets/images/search.svg';
import { ReactComponent as MicIcon } from './../../assets/images/mic-icon.svg';
import Button from '../Button';
import { useState } from 'react';
import Link from '../Link';

function Main({ isPortuguese, translate }) {
   const [queryValue, setQueryValue] = useState('');

   function search() {
      window.location.href = 'https://www.google.com/search?q=' + queryValue;
   }

   function onKeyUp(e) {
      const clicouEnter = e.key === 'Enter'
      if (clicouEnter) {
         search();
      }

   }

   {/*var textoDoLinkTraducao;
   var btnGoogleSearch;
   if (isPortuguese) {
      textoDoLinkTraducao = 'English'
      btnGoogleSearch = 'Pesquisar'
   }
   else {
      textoDoLinkTraducao = 'Português (Brasil)'
      btnGoogleSearch = 'Google Search'
   }*/}



   return (

      <main>
         <div className="container-logo">
            <img src={GoogleLogo} alt="Logo do google" />
         </div>

         <div className="container-search">
            <SearchIcon className="search-icon" ></SearchIcon>
            <input
               id="query"
               type="text"
               autoComplete="off"
               value={queryValue}
               onChange={(e) => { setQueryValue(e.target.value) }}
               onKeyUp={(e) => onKeyUp(e)}
            />

            <MicIcon className="mic-icon" ></MicIcon>
         </div>

         <div className="container-buttons">
            <Button type={'secundary'} onClick={() => search()}>
               {isPortuguese ? 'Google search' : 'Pesquisar Google'}
            </Button>
            <Button type={'secundary'}>
               {isPortuguese ? 'I´m Feeling Lucky' : "Estou com sorte"}
            </Button>
         </div>

         <div id="container-translate" class="container-translate">
            {isPortuguese ? 'Google offered in:' : 'Disponibilizado pelo Google em:'}

            <Link onClick={() => translate()}>
               {isPortuguese ? 'Português (Brasil)' : 'English'}
            </Link>
         </div>
      </main>

   )
}

export default Main;