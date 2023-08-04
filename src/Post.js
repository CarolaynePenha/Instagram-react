import AcoesFundo from "./AcoesFundo";
export default function Post() {
  const infoPost = [
    {
      img: "./img/meowed.svg",
      nome: "meowed",
      imgConteudo: "./img/gato-telefone.svg",
      imgCurtidas: "./img/respondeai.svg",
      por: "respondeai",
      quantidade: 101.523,
    },
    {
      img: "./img/barked.svg",
      nome: "barked",
      imgConteudo: "./img/dog.svg",
      imgCurtidas: "./img/adorable_animals.svg",
      por: "adorable_animals",
      quantidade: 99.159,
    },
  ];
  return (
    <div class="posts">
      {infoPost.map((info) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={info.img} />
              {info.nome}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <div class="conteudo">
            <img src={info.imgConteudo} />
          </div>
          <div class="fundo">
            <AcoesFundo />
            <div class="curtidas">
              <img src={info.imgCurtidas} />
              <div class="texto">
                Curtido por <strong>{info.por}</strong> e
                <strong>outras {info.quantidade} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
