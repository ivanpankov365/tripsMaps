$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
});
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 64.875561, lng: -18.609111},
        zoom: 7
    });
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
        pointLocation = event.latLng;
    });
    /*let iconAnchor = {
        url: './anchor-153304_960_720.png', // url
        scaledSize: new google.maps.Size(40, 70), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0,0) // anchor
    };*/

    /* var marker = new google.maps.Marker({

         // Определяем позицию маркера
         /!*position: {lat: 55.760186, lng: 37.618711},*!/

         // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
         map: map,

         // Пишем название маркера - появится если навести на него курсор и немного подождать
         title: 'Наш маркер: Большой театр',

         // Укажем свою иконку для маркера

         icon: iconAnchor
     });*/




}


function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: {
            scaledSize: new google.maps.Size(40, 30), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }
    });
    //console.log('location.LatLng', location.lat());
    //console.log('location.LatLng', location.lng());
    lng = location.lng();
    lat = location.lat();
    lostMarker = marker;
    openGooglePhotos();
    // markers.push(marker);
}

function openGooglePhotos() {
    setTimeout(function () {
        win = window.open("https://photos.google.com/share/AF1QipMOs1nq9f4CBOzklyb8z7ZtketW1Fr8TJX9S3nbxhDZDDNYwVveGwK8pqmnvd54aQ?key=NmIwdW1lT1hVQTczLW5MZ2o0bUxtTl93R25YakdB", "card", "width=900,height=700");
        win.moveTo(600,100);
        let card = document.getElementById("my-card");
        jQuery('#photo-card').addClass('hidden')
        card.style.display = "block";
    }, 500)

}

function addNewCard() {
    win.close();
    document.getElementById("my-card").style.display = "none";
    let path1 = document.getElementById('path1').value;
    let path2 = document.getElementById('path2').value;
    let path3 = document.getElementById('path3').value;
    let text = document.getElementById('textarea2').value;
    console.log(path1);
    console.log(path2);
    console.log(path3);
    console.log(text);
    console.log(lat);
    console.log(lng);
        let json = '{\n' +
            '"lat": "' + lat + '",\n' +
            '"lng": "' + lng + '",\n' +
            '"path1": "' + path1 + '",\n' +
            '"path2": "' + path2 + '",\n' +
            '"path3": "' + path3 + '",\n' +
            '"description": "'+ text+'"\n' +
            '}';
        fetch(host+'/save',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: json
            })
            .then((res1) => {
                res1.json()
                    .then((res2)=>{
                        console.log('res2',res2)
                    });

            });
}

function loadAllMarkers() {
    for(let i=0;i<markersLat.length;i++){
        var latLng = new google.maps.LatLng(markersLat[i], markersLng[i]);
        marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
        marker.setMap(map);
        google.maps.event.addListener(marker, 'click', function(event) {
            openCard(event.latLng);
        });
    }

}

function openCard(latLng) {
    if(win) win.close();
    document.getElementById("my-card").style.display = "none";
    if(lostMarker) lostMarker.setMap(null);
    let latitude = latLng.lat();
    let index = markersLat.indexOf(latitude);
    let cardDescription = text[index];
    let photo1 = path1[index];
    let photo2 = path2[index];
    let photo3 = path3[index];

    if(photo1 == "") photo1 = "./nophoto.jpg";
    if(photo2 == "") photo2 = "./nophoto.jpg"
    if(photo3 == "") photo3 = "./nophoto.jpg"
    console.log(latitude);
    console.log(index);
    console.log(photo1);
    console.log(photo2);
    console.log(photo3);
    document.getElementById("description").innerText = cardDescription;
    document.getElementById("photo1").src = photo1;
    document.getElementById("photo2").src = photo2;
    document.getElementById("photo3").src = photo3;
    jQuery('#photo-card').removeClass('hidden');
}

function addClass() {
    console.log("add class")

    //document.getElementById("photo-card").className = "hidden";
}