

let url=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ff9f8e8a8e094d76a8d6c4d0f701763e`

async function getData () {
  
  try{
      let res = await fetch (url);
      let data = await res.json();
      
      append(data.articles)
  }
  catch(err){
      console.log("err")
  }
}
getData()



let append = (data) =>{

  data.forEach((el)=>{

      let div = document.createElement('div');

      let img = document.createElement('img');
      img.src = el.urlToImage;
      img.setAttribute("id","sreeimg");

      let title = document.createElement('h2');
      title.innerText = el.description
      title.setAttribute("id","sreetit")

    
      div.append(img,title);
      document.getElementById('sreecontainer').append(div)
  })

}