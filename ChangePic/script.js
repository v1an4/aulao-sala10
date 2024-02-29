function changeimage(){
   const html = document.documentElement;
   html.classList.toggle("light")

   var image = document.querySelector('#profile')
   var btn = document.getElementsById("btnStyle")
   var dt = document.getElementById("data")

   var registro = new Date();

   dt = FormData(item)

    if(html.classList.contains("light")){
        Imagem.setAtribute("src", "./ChangePic/images/pic1.jpg");
        document.getElementById("data").textContent = FormData(registro);
    }else{
        Imagem.setAtribute("src","./ChangePic/images/pic2.jpg");
        document.getElementById("data").textContent = FormData(registro);
    }
}

   function FormData(item){

 var options = {
                 month: "long",
                 day: "numeric",
                 hour: "numeric",
                 minute: "numeric",
                 secund: "numeric",

                }
                 return item.tolocaleString("pt-BR", options)
}

