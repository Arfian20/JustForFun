const tombol = document.getElementById('btn')
const theJoke = document.querySelector('.jokes')

tombol.addEventListener('click', function() {
    fetch("https://candaan-api.vercel.app/api/text/random")
    .then((response) => response.json())
    .then((data) => {
        theJoke.innerHTML = data.data
        // theJoke.src = data.data.url
        // console.log(theJoke)
    });
})