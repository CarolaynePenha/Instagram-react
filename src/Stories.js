export default function Stories() {
  const objStories = [
    { img: "./img/9gag.svg", user: "9gag" },
    { img: "./img/meowed.svg", user: "meowed" },
    { img: "./img/barked.svg", user: "barked" },
    {
      img: "./img/nathanwpylestrangeplanet.svg",
      user: "nathanwpylestrangeplanet",
    },
    { img: "./img/wawawicomics.svg", user: "wawawicomics" },
    { img: "./img/respondeai.svg", user: "respondeai" },
    { img: "./img/filomoderna.svg", user: "filomoderna" },
    { img: "./img/memeriagourmet.svg", user: "memeriagourmet" },
  ];
  return (
    <div class="stories">
      {objStories.map((item) => (
        <div class="story">
          <div className="imagem">
            <img src={item.img} />
          </div>
          <div class="usuario">{item.user}</div>
        </div>
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
