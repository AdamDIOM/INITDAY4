async function go(){
    console.log(document.getElementById("curr").value)
    const response = await fetch(`https://restcountries.eu/rest/v2/currency/${document.getElementById("curr").value}`)
        .then(response => response.json());
        json = response

        place = json[Math.floor(Math.random() * json.length)].name

        console.log(place)
        
        document.getElementById("word").innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=${place}}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google map code for website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>`
}

async function one(drinks){
    console.log("1")
    const response = await fetch(`http://www.randomnumberapi.com/api/v1.0/random`)
    .then(response => response.json());
    json = response
    console.log(json)
    document.getElementById("word") = drinks[json].strDrinks;
}