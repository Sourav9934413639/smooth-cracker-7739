let url = 'https://newsapi.org/v2/top-headlines?country=in&category=Sports&apiKey=3fbeddfb8b474c858aded713acc19c9c';

let getData = async () =>{

    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    append(data.articles)
}

getData();


let append = (data)=> {

    data.forEach((el)=>{

        let div = document.createElement('div');

        let img = document.createElement('img')
        img.src = el.urlToImage;

        let title  = document.createElement('h3')
        title.innerText = el.title;

        let desc = document.createElement('p');
        desc.innerText = el.description;


        div.append(img,title,desc);
        document.getElementById('cont').append(div)
    })
}