class Pedido{
  constructor(){
    //fields
    this.articles = new Array();
  }

  add_article(article){
    this.articles.push(article)
  }

  get_total(){
    let total = 0;
    this.articles.forEach( article => {
      total += article.price
    });
  }

  //getters and setters
}

class Article {
  constructor(){
    //fields
  }
  //getters and setters
}
