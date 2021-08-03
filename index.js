console.log("hello news js file");

//new api key    6b57fd70c93f44199b7797a8c2aabe66
//api https://newsapi.org/v2/everything?q=tesla&from=2021-07-03&sortBy=publishedAt&apiKey=6b57fd70c93f44199b7797a8c2aabe66

let apiKey = "6b57fd70c93f44199b7797a8c2aabe66";

let newsAccordion = document.getElementById("newsAccordion");

//ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    articles = json.articles;
    console.log(articles);
    let newshtml = "";
    articles.forEach(function (element, index) {
      console.log(articles);
      let news = `<div class="card m-5 col-sm-4" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${element["title"]}</h5>
        <p class="card-text">${element["description"]}</p>
        <a href="${element["url"]}" class="btn btn-primary" target="_blank">Read More</a>
      </div>
    </div>`;
      newshtml += news;
    });
    newsAccordion.innerHTML = newshtml;
  } else {
    console.log("some error");
  }
};

xhr.send();
