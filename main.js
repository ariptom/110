Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>'
    })
}
console.log("ml5 version : "+ ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pyQxTS_Dx/model.json',modelLoaded);
function modelLoaded (){
    console.log("model loaded!");
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="the first prediction is=" +prediction1;
    speakdata1="the first prediction is=" +prediction2;
    var utterThis= new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterThis);

}