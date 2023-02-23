var button = document.querySelector('.btn');
var inputCity= document.querySelector('#city');
var dailyW = document.querySelector('.dailyW');
var cityName= document.querySelector('.cityName');
var tempNow = document.querySelector('.temp');
var windNow = document.querySelector('.wind');
var humidNow = document. querySelector('.humidity');
var searchCity = docuement.querySelector('.cityListContainer');
var cityBtn = document.querySelector('.cityButton');

var APIKey= '43973cffb25813812c8321c091ad172c';
var today= dayjs().format("MM/DD/YYYY");
var nextDay= "";


var searchCities = [];

function init(){
    var listName = JSON.parse(localStorage.getItem("cityData"))
        if(listName !== null) {
            searchCities = listName;
        }
        saveToList()
};

function saveToList(){
    searchCity.innerHTML= "";
    for (let i = 0; i <searchCities.length; i++){
        var selectedCity = searchCities[i]
        var newName = document.createElement('button')
        newName.setAttribute("type", "button")
        newName.setAttribute("class", "col-12 btn bg-light cityButton mt-3")
        newName.setAttribute("data-city", selectedCity)
        newName.textContent = selectedCity
        searchCity.appendChild(newName)
    }
}

