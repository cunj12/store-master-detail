const DATA = {
    articles: [
        {
        article_id: 1,
        article_name: "A1",
        days_sold: 0,
        total_sold: 0,
        quantity: 0
        },
        {
        article_id: 2,
        article_name: "A2",
        days_sold: 0,
        total_sold: 0,
        quantity: 0
        },
        {
        article_id: 3,
        article_name: "A3",
        days_sold: 0,
        total_sold: 0,
        quantity: 0
        }
    ],
    article_sales: [
        {
        sale_id: 1,
        sale_date: new Date('September 1, 2020'),
        sale_store: 1,
        sale_article: "A1",
        sale_quantity: "1"
        },
        {
        sale_id: 2,
        sale_date: new Date('September 2, 2020'),
        sale_store: 1,
        sale_article: "A1",
        sale_quantity: "5"
        },
        {
        sale_id: 3,
        sale_date: new Date('September 3, 2020'),
        sale_store: 1,
        sale_article: "A1",
        sale_quantity: "5"
        },
        {
        sale_id: 4,
        sale_date: new Date('September 4, 2020'),
        sale_store: 1,
        sale_article: "A1",
        sale_quantity: "3"
        },
        {
        sale_id: 5,
        sale_date: new Date('September 5, 2020'),
        sale_store: 1,
        sale_article: "A1",
        sale_quantity: "3"
        },
        {
        sale_id: 6,
        sale_date: new Date('September 6, 2020'),
        sale_store: 1,
        sale_article: "A1",
        sale_quantity: "4"
        },
        {
        sale_id: 7,
        sale_date: new Date('September 7, 2020'),
        sale_store: 1,
        sale_article: "A1",
        sale_quantity: "6"
        },
        {
        sale_id: 8,
        sale_date: new Date('September 1, 2020'),
        sale_store: 1,
        sale_article: "A2",
        sale_quantity: "1"
        },
        {
        sale_id: 9,
        sale_date: new Date('September 2, 2020'),
        sale_store: 1,
        sale_article: "A2",
        sale_quantity: "2"
        },
        {
        sale_id: 10,
        sale_date: new Date('September 3, 2020'),
        sale_store: 1,
        sale_article: "A2",
        sale_quantity: "3"
        },
        {
        sale_id: 11,
        sale_date: new Date('September 4, 2020'),
        sale_store: 1,
        sale_article: "A2",
        sale_quantity: "3"
        },
        {
        sale_id: 12,
        sale_date: new Date('September 5, 2020'),
        sale_store: 1,
        sale_article: "A2",
        sale_quantity: "3"
        },
        {
        sale_id: 13,
        sale_date: new Date('September 6, 2020'),
        sale_store: 1,
        sale_article: "A2",
        sale_quantity: "3"
        },
        {
        sale_id: 14,
        sale_date: new Date('September 7, 2020'),
        sale_store: 1,
        sale_article: "A2",
        sale_quantity: "3"
        },
        {
        sale_id: 15,
        sale_date: new Date('September 1, 2020'),
        sale_store: 1,
        sale_article: "A3",
        sale_quantity: "1"
        },
        {
        sale_id: 16,
        sale_date: new Date('September 2, 2020'),
        sale_store: 1,
        sale_article: "A3",
        sale_quantity: "2"
        },
        {
        sale_id: 17,
        sale_date: new Date('September 3, 2020'),
        sale_store: 1,
        sale_article: "A3",
        sale_quantity: "3"
        },
        {
        sale_id: 18,
        sale_date: new Date('September 4, 2020'),
        sale_store: 1,
        sale_article: "A3",
        sale_quantity: "4"
        },
        {
        sale_id: 19,
        sale_date: new Date('September 5, 2020'),
        sale_store: 1,
        sale_article: "A3",
        sale_quantity: "5"
        },
        {
        sale_id: 20,
        sale_date: new Date('September 6, 2020'),
        sale_store: 1,
        sale_article: "A3",
        sale_quantity: "6"
        },
        {
        sale_id: 21,
        sale_date: new Date('September 7, 2020'),
        sale_store: 1,
        sale_article: "A3",
        sale_quantity: "7"
        }
    ],
    article_stock: [
        {
        stock_id: 1,
        stock_date: new Date('September 1, 2020'),
        stock_store: 1,
        stock_article: "A1",
        stock_quantity: "30"
        },
        {
        stock_id: 2,
        stock_date: new Date('September 2, 2020'),
        stock_store: 1,
        stock_article: "A1",
        stock_quantity: "29"
        },
        {
        stock_id: 3,
        stock_date: new Date('September 3, 2020'),
        stock_store: 1,
        stock_article: "A1",
        stock_quantity: "24"
        },
        {
        stock_id: 4,
        stock_date: new Date('September 4, 2020'),
        stock_store: 1,
        stock_article: "A1",
        stock_quantity: "19"
        },
        {
        stock_id: 5,
        stock_date: new Date('September 5, 2020'),
        stock_store: 1,
        stock_article: "A1",
        stock_quantity: "16"
        },
        {
        stock_id: 6,
        stock_date: new Date('September 6, 2020'),
        stock_store: 1,
        stock_article: "A1",
        stock_quantity: "13"
        },
        {
        stock_id: 7,
        stock_date: new Date('September 7, 2020'),
        stock_store: 1,
        stock_article: "A1",
        stock_quantity: "9"
        },
        {
        stock_id: 8,
        stock_date: new Date('September 8, 2020'),
        stock_store: 1,
        stock_article: "A1",
        stock_quantity: "3"
        },
        {
        stock_id: 9,
        stock_date: new Date('September 1, 2020'),
        stock_store: 1,
        stock_article: "A2",
        stock_quantity: "100"
        },
        {
        stock_id: 10,
        stock_date: new Date('September 2, 2020'),
        stock_store: 1,
        stock_article: "A2",
        stock_quantity: "99"
        },
        {
        stock_id: 11,
        stock_date: new Date('September 3, 2020'),
        stock_store: 1,
        stock_article: "A2",
        stock_quantity: "97"
        },
        {
        stock_id: 12,
        stock_date: new Date('September 4, 2020'),
        stock_store: 1,
        stock_article: "A2",
        stock_quantity: "94"
        },
        {
        stock_id: 13,
        stock_date: new Date('September 5, 2020'),
        stock_store: 1,
        stock_article: "A2",
        stock_quantity: "91"
        },
        {
        stock_id: 14,
        stock_date: new Date('September 6, 2020'),
        stock_store: 1,
        stock_article: "A2",
        stock_quantity: "88"
        },
        {
        stock_id: 15,
        stock_date: new Date('September 7, 2020'),
        stock_store: 1,
        stock_article: "A2",
        stock_quantity: "85"
        },
        {
        stock_id: 16,
        stock_date: new Date('September 8, 2020'),
        stock_store: 1,
        stock_article: "A2",
        stock_quantity: "82"
        },
        {
        stock_id: 17,
        stock_date: new Date('September 1, 2020'),
        stock_store: 1,
        stock_article: "A3",
        stock_quantity: "48"
        },
        {
        stock_id: 18,
        stock_date: new Date('September 2, 2020'),
        stock_store: 1,
        stock_article: "A3",
        stock_quantity: "47"
        },
        {
        stock_id: 19,
        stock_date: new Date('September 3, 2020'),
        stock_store: 1,
        stock_article: "A3",
        stock_quantity: "45"
        },
        {
        stock_id: 20,
        stock_date: new Date('September 4, 2020'),
        stock_store: 1,
        stock_article: "A3",
        stock_quantity: "42"
        },
        {
        stock_id: 21,
        stock_date: new Date('September 5, 2020'),
        stock_store: 1,
        stock_article: "A3",
        stock_quantity: "38"
        },
        {
        stock_id: 22,
        stock_date: new Date('September 6, 2020'),
        stock_store: 1,
        stock_article: "A3",
        stock_quantity: "33"
        },
        {
        stock_id: 23,
        stock_date: new Date('September 7, 2020'),
        stock_store: 1,
        stock_article: "A3",
        stock_quantity: "27"
        },
        {
        stock_id: 24,
        stock_date: new Date('September 8, 2020'),
        stock_store: 1,
        stock_article: "A3",
        stock_quantity: "20"
        }
    ],
    dates: [
        {
        date_id: 1,
        date_value:  new Date('September 1, 2020')
        },
        {
        date_id: 2,
        date_value:  new Date('September 2, 2020')
        },
        {
        date_id: 3,
        date_value:  new Date('September 3, 2020')
        },
        {
        date_id: 4,
        date_value:  new Date('September 4, 2020')
        },
        {
        date_id: 5,
        date_value:  new Date('September 5, 2020')
        },
        {
        date_id: 6,
        date_value:  new Date('September 6, 2020')
        },
        {
        date_id: 7,
        date_value:  new Date('September 7, 2020')
        },
        {
        date_id: 8,
        date_value:  new Date('September 8, 2020')
        },
            
    ]
}

let init = function(){
    calculateArticleData(DATA.articles, DATA.article_sales)
    loadMaster(DATA.articles, DATA.dates);
}

let calculateArticleData = function(articles, article_sales){
    article_sales.forEach(sale => { 
        if(sale.sale_article == "A1") {
            articles[0].days_sold++;
            articles[0].total_sold = +articles[0].total_sold + +sale.sale_quantity;
        }
        if(sale.sale_article == "A2") {
            articles[1].days_sold++;
            articles[1].total_sold = +articles[1].total_sold + +sale.sale_quantity;
        }
        if(sale.sale_article == "A3") {
            articles[2].days_sold++;
            articles[2].total_sold = +articles[2].total_sold + +sale.sale_quantity;
        }
    });
    articles.forEach(article => {
        article.quantity = 5*article.total_sold/article.days_sold;
    })

}


let loadMaster = function(articles){
    let ul = document.querySelector('.master-list');
    let df = document.createDocumentFragment();
    articles.forEach(article => {
        let li = document.createElement('li');
        li.textContent = article.article_name;
        li.className = 'article';
        li.setAttribute('data-key', article.article_id);
        li.addEventListener('click', showDetails);
        df.appendChild(li);
    });
    ul.appendChild(df);
}

let showDetails = function(ev){
    let article_id = ev.target.getAttribute('data-key');
    let oldActive = document.querySelector('.active');
    (oldActive)?oldActive.classList.remove('active'):null;
    ev.target.classList.add('active');
    let activeArticle;
    DATA.articles.forEach(article=>{
        if(article.article_id == article_id){
            activeArticle = article;
        }
    });
    let ul = document.querySelector('.detail-list');
    ul.innerHTML = "";
    let df = document.createDocumentFragment();
    for(prop in activeArticle){
        if(prop == "article_name" || prop == "quantity") {
            let li = document.createElement('li');
            li.classList.add(prop);
            li.textContent = activeArticle[prop];
            console.log(activeArticle[prop]);
            df.appendChild(li);
        }
    }
    ul.appendChild(df);
}

document.addEventListener('DOMContentLoaded', init);