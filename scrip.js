function changePage(pageName) {
    var conteudo = document.getElementById('conteudo');
    if (pageName === 'inicio') {
        conteudo.innerHTML = `
            <h2>Seja Bem-Vindo ao Nexus!</h2>
            <p>O Nexus é o seu portal para o emocionante mundo de League of Legends (LoL), o popular jogo de batalha online multiplayer. Aqui você encontrará as últimas notícias, análises e atualizações sobre o universo LoL, juntamente com dicas e truques para aprimorar suas habilidades de jogo.</p>
            <div class="carousel">
                <img src="https://i.pinimg.com/736x/63/9b/d0/639bd06f50c90607dd107afe415b9ebd.jpg" alt="League of Legends 1" class="active">
                <img src="https://4kwallpapers.com/images/wallpapers/league-of-legends-4096x2305-11617.png" alt="League of Legends 2">
                <img src="https://wallpaperwaifu.com/wp-content/uploads/2023/11/spirit-blossom-kv-league-of-legends-thumb.jpg" alt="League of Legends 3">
                <img src="https://img.odcdn.com.br/wp-content/uploads/2022/07/league-of-legends.jpg" alt="League of Legends 4">
                <img src="https://s2-ge.glbimg.com/z6dvUr3ulDFJ3WRf6sLUFg3jI50=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/J/P/RRUjRWQtyBkAr3A3xT9w/dawnbringer-nightbringer-collection.jpg" alt="League of Legends 5">
            </div>
        `;
        startCarousel();
    } else if (pageName === 'jogos') {
        conteudo.innerHTML = `
            <h2>Confira nossos jogos!</h2>
            <div class="carousel">
                <img src="https://i.pinimg.com/736x/63/9b/d0/639bd06f50c90607dd107afe415b9ebd.jpg" alt="League of Legends 1" class="active">
                <img src="https://4kwallpapers.com/images/wallpapers/league-of-legends-4096x2305-11617.png" alt="League of Legends 2">
                <img src="https://wallpaperwaifu.com/wp-content/uploads/2023/11/spirit-blossom-kv-league-of-legends-thumb.jpg" alt="League of Legends 3">
                <img src="https://img.odcdn.com.br/wp-content/uploads/2022/07/league-of-legends.jpg" alt="League of Legends 4">
                <img src="https://s2-ge.glbimg.com/z6dvUr3ulDFJ3WRf6sLUFg3jI50=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/J/P/RRUjRWQtyBkAr3A3xT9w/dawnbringer-nightbringer-collection.jpg" alt="League of Legends 5">
            </div>
            <div class="games-section">
                <div class="game-app">
                    <a href="https://apps.apple.com/us/app/league-of-legends-wild-rift/id1480616990" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/League_of_Legends_icon.svg/1200px-League_of_Legends_icon.svg.png" alt="LoL iOS">
                        iOS
                    </a>
                </div>
                <div class="game-app">
                    <a href="https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/League_of_Legends_icon.svg/1200px-League_of_Legends_icon.svg.png" alt="LoL Android">
                        Android
                    </a>
                </div>
            </div>
        `;
        startCarousel();
    } else if (pageName === 'noticias') {
        conteudo.innerHTML = `
            <h2>Últimas Notícias</h2>
            <div class="news-article">
                <h3>Grande Atualização no League of Legends!</h3>
                <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0f497ffdcfba54c8/60ee4e9c635c542f4e46de9e/LOL_CMS_231_Teaser.jpg" alt="Atualização LoL">
                <p>Na última atualização do League of Legends, a Riot Games introduziu novos campeões, balanceamentos de jogo e uma série de melhorias na qualidade de vida dos jogadores. Confira todos os detalhes e prepare-se para novas estratégias no Summoner's Rift.</p>
            </div>
            <div class="news-article">
                <h3>Evento Especial de Fim de Ano</h3>
                <img src="https://esports.as.com/2020/12/10/league-of-legends/LOLIniciosEvento.jpg" alt="Evento Especial LoL">
                <p>O evento de fim de ano chegou ao League of Legends! Participe de missões exclusivas, ganhe recompensas temáticas e aproveite as festividades com seus amigos e a comunidade LoL. Não perca essa oportunidade única!</p>
            </div>
        `;
    }
  }
  
  function startCarousel() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;
  
    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3000); // Alterne as imagens a cada 3 segundos
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    startCarousel();
  });
