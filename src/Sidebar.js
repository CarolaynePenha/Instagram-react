import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario
        img="./img/catanacomics.svg"
        nome="catanacomics"
        username="Catana"
      />
      <Sugestoes />
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
