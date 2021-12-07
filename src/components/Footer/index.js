import './style.css'

function Footer({ isPortuguese }) {

   return (
      <footer>
         <div id="pais" className="container-country">
            {isPortuguese ? 'Brazil' : 'Brasil'}
         </div>
         <nav class="container-about">
            <ul>
               <li>
                  <a id="aviso" href="https://ads.google.com/intl/pt-BR_br/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000080-0000000001&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                     {isPortuguese ? 'Advertising' : 'Publicidade'}
                  </a>
               </li>
               <li>
                  <a id="negocios" href="https://smallbusiness.withgoogle.com/intl/pt-BR_br/help/#!/">
                     {isPortuguese ? 'Business' : 'Negócios'}
                  </a>
               </li>
               <li>
                  <a id="sobre" href="https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                     {isPortuguese ? 'About' : 'Sobre'}
                  </a>
               </li>
               <li>
                  <a id="cpf" href="https://www.google.com/search/howsearchworks/?fg=1">
                     {isPortuguese ? 'How Search works' : 'Como funciona a Pesquisa'}
                  </a>
               </li>
            </ul>
         </nav>

         <nav className="container-terms">
            <ul>
               <li>
                  <a id="privacidade" href="https://policies.google.com/privacy?hl=pt-BR&fg=1">
                     {isPortuguese ? 'privicy' : 'Privacidade'}
                  </a>
               </li>
               <li>
                  <a id="termos" href="https://policies.google.com/terms?hl=pt-BR&fg=1">
                     {isPortuguese ? 'terms' : 'Termos'}
                  </a>
               </li>
               <li>
                  <a id="conf" href="https://www.google.com.br/preferences?hl=pt-BR&fg=1">
                     {isPortuguese ? 'settings' : 'Configurações'}
                  </a>
               </li>
            </ul>
         </nav>

      </footer>
   )
}

export default Footer;