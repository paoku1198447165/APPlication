$(function () {
    let recBox = $('.recBox');
    let w = recBox.innerWidth(), h = recBox.innerHeight();
    let canvas = $('canvas');
    canvas[0].width = w;
    canvas[0].height = h;

    let constraints = {audio:true, video:{width:w,height:h}};

    getData();

    function getData() {
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function(mediaStream) {
                // var video = document.querySelector('video');
                video.srcObject = mediaStream;
                video.onloadedmetadata = function(e) {
                    video.play();
                };
            })
            .catch(function(err) { console.log(err.name + ": " + err.message); });
    }
 });
