// let url = 'https://newsdata.io/api/1/news?apikey=pub_10560ccfda5180ad3a9e3c95dbd133c40005d&q=sports&country=in&language=en&category=sports'

// pub_10560639d33c71b60f5e8995fe804af001366

let url = 'https://newsdata.io/api/1/news?apikey=pub_10560639d33c71b60f5e8995fe804af001366&category=sports'

// let url = 'https://newsdata.io/api/1/news?apikey=pub_10560639d33c71b60f5e8995fe804af001366&q=sports&country=cn,in,jp&category=sports '

// let url = 'https://newsdata.io/api/1/news?apikey=pub_10560639d33c71b60f5e8995fe804af001366'

async function getData () {
  
    try{
        let res = await fetch (url);
        let data = await res.json();
        console.log(data)
        append(data.results)
    }catch(err){
        console.log(err)
    }
}
getData()



let append = (data) =>{

    data.forEach((el)=>{

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.image_url;

        let title = document.createElement('h3');
        title.innerText = el.title

        // console.log(img,title)
        div.append(img,title);
        document.getElementById('cont').append(div)
    })

}