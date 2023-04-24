//https://teachablemachine.withgoogle.com/models/Q4B33sRk_/



Webcam.set({
    quality: '90',
    format: 'png',
    height: 300,
    width: 350
});

camera = document.getElementById("camera");

Webcam.attach("camera");

function takesnapshot(){
    Webcam.snap(function(saved_pic){
        document.getElementById("result").innerHTML = '<img id="captured_pic" src="'+saved_pic+'">';
    })
}

function speak(){
    var synth = window.speechSynthesis;
    speak_1 = "The first prediction is " + prediction1;
    speak_2 = "The second prediction is " + prediction2;
    utterThis = new SpeechSynthesisUtterance(speak_1 + speak_2);
    synth.speak(utterThis)
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Q4B33sRk_/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded")
}