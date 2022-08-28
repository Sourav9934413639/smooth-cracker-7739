import navbar from "./Account_Navbar_Footer/components/navbar.js"

    document.getElementById('navbar').innerHTML=navbar();

    import footer from "./Account_Navbar_Footer/components/foot.js";

    document.getElementById('footer').innerHTML = footer()


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
        // div.style.border = "1px solid red"

        let img = document.createElement('img')
        img.src = el.urlToImage;
        img.style.width="100%"

        let title  = document.createElement('h3')
        title.innerText = el.title;
        // title.style.color="black";
        title.style.marginLeft="4%"

        let desc = document.createElement('p');
        desc.innerText = el.description;
        desc.style.marginLeft="4%"
        desc.style.fontFamily="sans-sarif";
        desc.style.fontSize="17px"

        let date = document.createElement('p');
        date.innerHTML=  `Date:- ${el.publishedAt}`;
        date.style.fontWeight="bold"
        date.style.marginLeft="4%"


        div.append(img,title,desc,date);
        document.getElementById('cont').append(div)
    })
}