loadURL = function(url) {
    var oRequest = new XMLHttpRequest();
    oRequest.open('GET', url, false);
    oRequest.send(null);
    return oRequest.responseText;
};
let courses = JSON.parse(loadURL('./src/scripts/json/cuorses.json'));
courses = Object.entries(courses);
let length = courses[0][1].length;

for(let i =0; i < length; i++){
    let price = document.querySelector("body > div > div.content > div:nth-child(4) > div > div.pricing > div > div:nth-child("+(i+1)+") > div > div.pricing__top > div.pricing__plan > span:nth-child(4)");
    price.innerHTML =  courses[0][1][i].price;
    let name = document.querySelector("body > div > div.content > div:nth-child(4) > div > div.pricing > div > div:nth-child("+(i+1)+") > div > div.pricing__top > div.pricing__plan > span:nth-child(1)");
    name.innerHTML =  courses[0][1][i].name;
    let features = document.querySelector("body > div > div.content > div:nth-child(4) > div > div.pricing > div > div:nth-child("+(i+1)+") > div.pricing__bg > div.pricing__vista > ul");
    let featureList = courses[0][1][i].features;
    let featureLenght = featureList.length;
    for (let j =0; j < featureLenght; j++){
        features.innerHTML += '<li>'+ featureList[j]+'</li>';
    }
}