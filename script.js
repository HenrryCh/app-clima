
const api_key = '5ab8410024321372c63d6c1347ccfcf8';
const urlBase ='https://api.openweathermap.org/data/2.5/weather'
const difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () =>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}


function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')

    divDatosClima.innerHTML= ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

 
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}` 

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad} %`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    
    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripción meteorológica es: ${description}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(iconInfo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descriptionInfo)
}


