var listadefilmes = ['https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg', 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/11/25/unnamed-1ib3894cp3hwm.jpg', 'https://img.elo7.com.br/product/original/2657A05/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo2-90x60-geek.jpg',  'https://img.elo7.com.br/product/original/265774E/big-poster-harry-potter-e-o-calice-de-fogo-lo02-90x60-cm-geek.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/90/67/58/20107766.jpg', 'https://play-lh.googleusercontent.com/05xqDDh1nvU8cA_iI5D-bzrGrBd5s7Mw1HRp2hdgTOXTLBjk3c9iZX1ED54SVs2n2neSXQ', 'https://play-lh.googleusercontent.com/stxJpRK-8SowDlb6rxqS7CsV8gx59ICTwVgjGPRcsyDdEAUntk03slNU-eTbqd7rNSA', 'https://images.squarespace-cdn.com/content/v1/58b866f417bffc4dc469acab/1588998071197-ITBUH2GT57VRALK8RMCL/image-asset.jpeg']

var titulos = ['HP e a Pedra Filosofal', 'HP e a Câmara Secreta', 'HP e o Prisioneiro de Azkaban', 'HP e o Cálice de Fogo', 'HP e a Ordem da Fênix', 'HP e o Enigma do Príncipe', 'HP e as Relíquias da Morte - Parte 1', 'HP e as Relíquias da Morte - Parte 2']

for(var i= 0; i < listadefilmes.length; i++)
  
for (var i = 0; i < listadefilmes.length; i++) {
  document.write("<div style='display: inline-block; margin-right: 20px; text-align: center;'>");
  document.write("<img src=" + listadefilmes[i] + ">");
  document.write("<p style='color: #ffffff; font-family: 'Merriweather', serif;'>" + titulos[i] + "</p>");
  document.write("</div>");
}

