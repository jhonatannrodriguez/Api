const palabra = document.getElementById("palabra");
const btn = document.getElementById("button-addon2");
const container = document.getElementById("container");



function showSearch(data) {
        container.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${data[0].flags.png} alt="Card image cap">
          <h5 class="card-title">${data[0].name.common}</h5>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">
          <strong>Nombre Oficial:</strong>
           ${data[0].translations.spa.official}</li>
          <li class="list-group-item"><strong>Abreviación: </strong> ${data[0].fifa}</li>
          <li class="list-group-item"><strong>Capital: </strong> ${data[0].capital}</li>
          <li class="list-group-item"><strong>Continente: </strong> ${data[0].continents[0]}</li>
          <li class="list-group-item"><strong>Zona horaria: </strong> ${data[0].timezones}</li>
        </ul>
        <div class="card-body">
          <a href= ${data[0].maps.googleMaps} class="card-link" target="_blank">Buscar en el Mapa</a>
        </div>
      </div>
            `
}


async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    showSearch(data);
}




btn.addEventListener("click", function(){
    container.innerHTML = '';
    const url = "https://restcountries.com/v3.1/name/" + palabra.value;
    console.log(url);
    fetchData(url);
})