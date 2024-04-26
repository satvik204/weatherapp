const search_btn = document.querySelector('.search-btn')
const location_btn = document.querySelector('.location-btn')

search_btn.addEventListener('click',() => {
    var cityname = document.querySelector(".input").value;
    
       
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=d229f57a51f6578f0cb21ce55c6f327c&units=metric`).then((res) => res= res.json()).then((res) =>{
          if (res.cod==="404") {
             alert("City not found! Please enter valid city name!")
          }  else{
          console.log(res);
            const citytime = document.querySelector('.citytime');
            const temp = document.querySelector('.temp');
            const wind = document.querySelector('.wind');
            const humid = document.querySelector('.humid');
            const imgfirst = document.querySelector('.imgfirst');
            const imgfirsttype = document.querySelector('.imgfirsttype');

            citytime.innerHTML = `${res.city.name}(${res.list[0].dt_txt.split(" ")[0]})`
            wind.innerHTML = `Wind: ${res.list[0].wind.speed}m/s`
            humid.innerHTML = `Humidity: ${res.list[0].main.humidity}%`
            temp.innerHTML = `Temperature: ${res.list[0].main.temp}&deg;C`
            imgfirst.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[0].weather[0].icon}@2x.png`)  
            imgfirsttype.innerHTML = `${res.list[0].weather[0].main}`
            console.log(res.list[0].weather[0].icon);

            const citytime1 = document.querySelector('.citytime1');
            const temp1 = document.querySelector('.temp1');
            const wind1 = document.querySelector('.wind1');
            const humid1 = document.querySelector('.humid1');
            const imgfirst1 = document.querySelector('.imgfirst1');

            citytime1.innerHTML = `${res.city.name}(${res.list[9].dt_txt.split(" ")[0]})`
            wind1.innerHTML = `Wind: ${res.list[9].wind.speed}m/s`
            humid1.innerHTML = `Humidity: ${res.list[9].main.humidity}%`
            temp1.innerHTML = `Temperature: ${res.list[9].main.temp}&deg;C`
            imgfirst1.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[9].weather[0].icon}@2x.png`)  
            console.log(res.list[9].weather[0].icon);

            const citytime2 = document.querySelector('.citytime2');
            const temp2 = document.querySelector('.temp2');
            const wind2 = document.querySelector('.wind2');
            const humid2 = document.querySelector('.humid2');
            const imgfirst2 = document.querySelector('.imgfirst2');

            citytime2.innerHTML = `${res.city.name}(${res.list[17].dt_txt.split(" ")[0]})`
            wind2.innerHTML = `Wind: ${res.list[17].wind.speed}m/s`
            humid2.innerHTML = `Humidity: ${res.list[17].main.humidity}%`
            temp2.innerHTML = `Temperature: ${res.list[17].main.temp}&deg;C`
            imgfirst2.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[17].weather[0].icon}@2x.png`)  
            console.log(res.list[17].weather[0].icon);

            const citytime3 = document.querySelector('.citytime3');
            const temp3 = document.querySelector('.temp3');
            const wind3 = document.querySelector('.wind3');
            const humid3 = document.querySelector('.humid3');
            const imgfirst3 = document.querySelector('.imgfirst3');

            citytime3.innerHTML = `${res.city.name}(${res.list[25].dt_txt.split(" ")[0]})`
            wind3.innerHTML = `Wind: ${res.list[25].wind.speed}m/s`
            humid3.innerHTML = `Humidity: ${res.list[25].main.humidity}%`
            temp3.innerHTML = `Temperature: ${res.list[25].main.temp}&deg;C`
            imgfirst3.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[25].weather[0].icon}@2x.png`)  
            console.log(res.list[25].weather[0].icon);

            const citytime4 = document.querySelector('.citytime4');
            const temp4 = document.querySelector('.temp4');
            const wind4 = document.querySelector('.wind4');
            const humid4 = document.querySelector('.humid4');
            const imgfirst4 = document.querySelector('.imgfirst4');

            citytime4.innerHTML = `${res.city.name}(${res.list[33].dt_txt.split(" ")[0]})`
            wind4.innerHTML = `Wind: ${res.list[33].wind.speed}m/s`
            humid4.innerHTML = `Humidity: ${res.list[33].main.humidity}%`
            temp4.innerHTML = `Temperature: ${res.list[33].main.temp}&deg;C`
            imgfirst4.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[33].weather[0].icon}@2x.png`)  
            console.log(res.list[33].weather[0].icon);

            const citytime5 = document.querySelector('.citytime5');
            const temp5 = document.querySelector('.temp5');
            const wind5 = document.querySelector('.wind5');
            const humid5 = document.querySelector('.humid5');
            const imgfirst5 = document.querySelector('.imgfirst5');

            citytime5.innerHTML = `${res.city.name}(${res.list[39].dt_txt.split(" ")[0]})`
            wind5.innerHTML = `Wind: ${res.list[39].wind.speed}m/s`
            humid5.innerHTML = `Humidity: ${res.list[39].main.humidity}%`
            temp5.innerHTML = `Temperature: ${res.list[39].main.temp}&deg;C`
            imgfirst5.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[39].weather[0].icon}@2x.png`)  
            console.log(res.list[39].weather[0].icon);
}})
    }
)

location_btn.addEventListener('click',() => {
   var latlon = navigator.geolocation.getCurrentPosition(getlatlon);
    function getlatlon(pos) {
        var crd = pos.coords;
        const lat = crd.latitude;
        const lon = crd.longitude;
        console.log(lat,lon)
          fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d229f57a51f6578f0cb21ce55c6f327c&units=metric`).then((res) => res= res.json()).then((res) =>{
            console.log(res);
            const citytime = document.querySelector('.citytime');
            const temp = document.querySelector('.temp');
            const wind = document.querySelector('.wind');
            const humid = document.querySelector('.humid');
            const imgfirst = document.querySelector('.imgfirst');
            const imgfirsttype = document.querySelector('.imgfirsttype');

            citytime.innerHTML = `${res.city.name}(${res.list[0].dt_txt.split(" ")[0]})`
            wind.innerHTML = `Wind: ${res.list[0].wind.speed}m/s`
            humid.innerHTML = `Humidity: ${res.list[0].main.humidity}%`
            temp.innerHTML = `Temperature: ${res.list[0].main.temp}&deg;C`
            imgfirst.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[0].weather[0].icon}@2x.png`)  
            imgfirsttype.innerHTML = `${res.list[0].weather[0].main}`
            console.log(res.list[0].weather[0].icon);

            const citytime1 = document.querySelector('.citytime1');
            const temp1 = document.querySelector('.temp1');
            const wind1 = document.querySelector('.wind1');
            const humid1 = document.querySelector('.humid1');
            const imgfirst1 = document.querySelector('.imgfirst1');

            citytime1.innerHTML = `${res.city.name}(${res.list[9].dt_txt.split(" ")[0]})`
            wind1.innerHTML = `Wind: ${res.list[9].wind.speed}m/s`
            humid1.innerHTML = `Humidity: ${res.list[9].main.humidity}%`
            temp1.innerHTML = `Temperature: ${res.list[9].main.temp}&deg;C`
            imgfirst1.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[9].weather[0].icon}@2x.png`)  
            console.log(res.list[9].weather[0].icon);

            const citytime2 = document.querySelector('.citytime2');
            const temp2 = document.querySelector('.temp2');
            const wind2 = document.querySelector('.wind2');
            const humid2 = document.querySelector('.humid2');
            const imgfirst2 = document.querySelector('.imgfirst2');

            citytime2.innerHTML = `${res.city.name}(${res.list[17].dt_txt.split(" ")[0]})`
            wind2.innerHTML = `Wind: ${res.list[17].wind.speed}m/s`
            humid2.innerHTML = `Humidity: ${res.list[17].main.humidity}%`
            temp2.innerHTML = `Temperature: ${res.list[17].main.temp}&deg;C`
            imgfirst2.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[17].weather[0].icon}@2x.png`)  
            console.log(res.list[17].weather[0].icon);

            const citytime3 = document.querySelector('.citytime3');
            const temp3 = document.querySelector('.temp3');
            const wind3 = document.querySelector('.wind3');
            const humid3 = document.querySelector('.humid3');
            const imgfirst3 = document.querySelector('.imgfirst3');

            citytime3.innerHTML = `${res.city.name}(${res.list[25].dt_txt.split(" ")[0]})`
            wind3.innerHTML = `Wind: ${res.list[25].wind.speed}m/s`
            humid3.innerHTML = `Humidity: ${res.list[25].main.humidity}%`
            temp3.innerHTML = `Temperature: ${res.list[25].main.temp}&deg;C`
            imgfirst3.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[25].weather[0].icon}@2x.png`)  
            console.log(res.list[25].weather[0].icon);

            const citytime4 = document.querySelector('.citytime4');
            const temp4 = document.querySelector('.temp4');
            const wind4 = document.querySelector('.wind4');
            const humid4 = document.querySelector('.humid4');
            const imgfirst4 = document.querySelector('.imgfirst4');

            citytime4.innerHTML = `${res.city.name}(${res.list[33].dt_txt.split(" ")[0]})`
            wind4.innerHTML = `Wind: ${res.list[33].wind.speed}m/s`
            humid4.innerHTML = `Humidity: ${res.list[33].main.humidity}%`
            temp4.innerHTML = `Temperature: ${res.list[33].main.temp}&deg;C`
            imgfirst4.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[33].weather[0].icon}@2x.png`)  
            console.log(res.list[33].weather[0].icon);

            const citytime5 = document.querySelector('.citytime5');
            const temp5 = document.querySelector('.temp5');
            const wind5 = document.querySelector('.wind5');
            const humid5 = document.querySelector('.humid5');
            const imgfirst5 = document.querySelector('.imgfirst5');

            citytime5.innerHTML = `${res.city.name}(${res.list[39].dt_txt.split(" ")[0]})`
            wind5.innerHTML = `Wind: ${res.list[39].wind.speed}m/s`
            humid5.innerHTML = `Humidity: ${res.list[39].main.humidity}%`
            temp5.innerHTML = `Temperature: ${res.list[39].main.temp}&deg;C`
            imgfirst5.setAttribute('src',`https://openweathermap.org/img/wn/${res.list[39].weather[0].icon}@2x.png`)  
            console.log(res.list[39].weather[0].icon);
        })
    }
})