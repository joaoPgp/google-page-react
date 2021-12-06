import './style.css'

function Footer() {
   return (
      <footer>
         <div id="pais" className="container-country">
            Brazil
         </div>
         <nav class="container-about">
            <ul>
               <li>
                  <a id="aviso" href="https://ads.google.com/intl/pt-BR_br/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000080-0000000001&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
               </li>
               <li>
                  <a id="negocios" href="https://smallbusiness.withgoogle.com/intl/pt-BR_br/help/#!/">Business</a>
               </li>
               <li>
                  <a id="sobre" href="https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
               </li>
               <li>
                  <a id="cpf" href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</a>
               </li>
            </ul>
         </nav>

         <nav className="container-terms">
            <ul>
               <li>
                  <a id="privacidade" href="https://policies.google.com/privacy?hl=pt-BR&fg=1">privicy</a>
               </li>
               <li>
                  <a id="termos" href="https://policies.google.com/terms?hl=pt-BR&fg=1">terms</a>
               </li>
               <li>
                  <a id="conf" href="https://www.google.com.br/preferences?hl=pt-BR&fg=1">settings</a>
               </li>
            </ul>
         </nav>

      </footer>
   )
}

export default Footer;