//obtendo as informaçoes do html
let addBtn = document.querySelector('#addBtn');
let tituloRef = document.querySelector('#tituloForm');
let descricaoRef = document.querySelector('#descricaoForm');
let imgRef = document.querySelector('#imagemForm');
let itemReference = document.querySelector('.item')

//banco de dados
let postagem = [];

//adicionando dados no banco de dados
function mandarPostagem() {
    postagem.push({
        titulo: tituloRef.value,
        descricao: descricaoRef.value,
        img: imgRef.value
    })
};

//adiconando a postagem no html
function postarPostagem() {
    if (postagem.length == 0) {
        document.querySelector('.container').innerHTML += `
        <div class="item">
        <h3>${postagem[0].titulo}</h3>
        <img src="${postagem[0].img}">
        <p>${postagem[0].descricao}</p>
    </div>`
    }
    else {
        let ultimaPostagem = postagem[postagem.length - 1]
        document.querySelector('.container').innerHTML += `
        <div class="item">
        <h3>${ultimaPostagem.titulo}</h3>
        <img src="${ultimaPostagem.img}">
        <p>${ultimaPostagem.descricao}</p>
    </div>`
    }
};

//postar o coneudo do usuario
addBtn.addEventListener('click', function (event) {
    event.preventDefault()

    mandarPostagem()

    postarPostagem()
});

itemReference.addEventListener('click',function(event){
    event.preventDefault()

    
})



window.onload()