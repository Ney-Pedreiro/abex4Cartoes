// atualmente o codigo gera cartas infinitamente
// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants, links para as imagens que aparecem nas cartas
const urls = [
  'https://media.istockphoto.com/id/1346125184/pt/foto/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=A775GlAQjKb6xuvp9Zwnut9YTiRQNJSfZUF_wBGyPmI=',
  'https://media.istockphoto.com/id/1434925755/pt/foto/mont-saint-michel-normandy-france.jpg?s=612x612&w=0&k=20&c=2YkV17FbSPL3SD3lzHT0Ad-k7wOZpZiRyHiO67BCK6E=',
  'https://i.imgur.com/kvG6p6x.jpeg',
  'https://i.imgur.com/RGnl9DU_d.webp?maxwidth=760&fidelity=grand',
  'https://i.imgur.com/XJRJQGq_d.webp?maxwidth=760&fidelity=grand',
  'https://i.imgur.com/BBWLnDL_d.webp?maxwidth=1520&fidelity=grand'
];

// variáveis
let cardCount = 0;
const numCards = 6;

// função que cria e adiciona uma nova carta
function appendNewCard() {
  /* Verificação para ver se o numero de cartas desejadas 
  ja foi atingido e para de fornecer cartas novas
  if (cardCount >= numCards) {
    return; // Não adiciona mais cartas
  }
*/
  const card = new Card({
    imageUrl: urls[cardCount % numCards],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// coloca as cartas no jogo
for (let i = 0; i < numCards; i++) {  // Agora vai de 0 até numCards-1
  appendNewCard();
}
