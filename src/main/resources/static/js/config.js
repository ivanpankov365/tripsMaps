$(document).ready(function(){
    $('.collapsible').collapsible();
});

$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
});

$(document).ready(function(){
    $('.modal').modal();
});

$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

});

var host = 'http://srv144057.hostiman.com:9034';
let map;
let lat;
let lng;
let win;
let ids = [];
let markersLat = [];
let markersLng = [];
let path1 = [];
let path2 = [];
let path3 = [];
let text = [];
let lostMarker;

window.onload = function(){

    jQuery('#photo-card').addClass('hidden')

    fetch(host+'/getAll',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
        .then((res1) => {
            res1.json()
                .then((res2)=>{
                    //console.log('res2',res2);
                    for (let i = 0; i < res2.length; i++) {
                        markersLat[i] = res2[i].lat;
                        markersLng[i] = res2[i].lng;
                        path1[i] = res2[i].path1;
                        path2[i] = res2[i].path2;
                        path3[i] = res2[i].path3;
                        text[i] = res2[i].description;
                    }
                loadAllMarkers();
                });

        });
}