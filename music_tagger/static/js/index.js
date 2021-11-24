var jsmediatags = window.jsmediatags;


const getValuesFromInputs = () =>{
   
   const profileAud = document.querySelector('input.profile-aud').files[0];
   
   return profileAud;

}
const convertInputValues = () => {
  const profileAud = getValuesFromInputs();

  const profileAudURL = URL.createObjectURL(profileAud);
  return profileAudURL;
}
const addInputToProfile = () => {

    const profileAudURL = convertInputValues();
    document.querySelector('.aud').setAttribute('src', profileAudURL);

}
// document.querySelector('button').addEventListener('click', (e) => {
//   e.preventDefault();
//   addInputToProfile();
// });
var genreName;
document.querySelector('.profile-aud').addEventListener("change",(event) => {
    const file = event.target.files[0];
    jsmediatags.read(file, {
        onSuccess: function(tag){
            genreName = tag.tags.genre;
            console.log(genreName);

        },
        onError: function(error){
            console.log(error);
        }
    })
})
var x = 0;
function displayImage(){
    var img = document.createElement("img");
    if(genreName == "Blues"){
        if (x == 1){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/selfattentiondrums.png";
        }
        else if(x == 2){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/crnndrums.png";
        }
        else if(x == 3){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/fcndrums.png";
        }
        else if(x == 4){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/harmoniccnndrums.png";
        }
        else if(x == 5){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/musicnndrums.png";
        }
        else if(x == 6){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/samplelevelcnn.png";
        }
        else if (x == 7){
            document.getElementById("outputImage").innerHTML = "";
            
            img.src = "/static/images/samplecnnexcitationdrumaudio.png";
        }
        else{
            document.getElementById("outputImage").innerHTML = "";
        }
    }
    else if(genreName == "Classical"){
        if (x == 1){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/selfattention.png";
        }
        else if(x == 2){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/crcnn.png";
        }
        else if(x == 3){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/fcn.png";
        }
        else if(x == 4){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/harmoniccnn.png";
        }
        else if(x == 5){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/musicnn.png";
        }
        else if(x == 6){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/samplecnn.png";
        }
        else if (x == 7){
            document.getElementById("outputImage").innerHTML = "";
            img.src = "/static/images/samplelevelcnnexcitation.png";
        }
        else{
            document.getElementById("outputImage").innerHTML = "";
        }
    }
    var block = document.getElementById("outputImage");
    block.appendChild(img);
    img.style.width=200;
    img.style.height=400;


}

function displayComparision(){
    document.getElementById("outputImage").innerHTML = "";
    var img = document.createElement("img");
    if(genreName == "Classical"){
        img.src = "/static/images/outputaudio1_1.png";
    }
    else if(genreName == "Blues"){
        img.src = "/static/images/outputaudio1_2.png";
    }
    var block = document.getElementById("outputImage");
    block.appendChild(img);
    img.style.width=1200;
}
function update() {
    var select = document.getElementById('models');
    var option = select.options[select.selectedIndex];
    if (option.text == "Self-attention"){
        x = 1;
    }
    else if(option.text == "CRNN"){
        x = 2;
    }
    else if(option.text == "FCN"){
        x = 3;
    }
    else if(option.text == "Harmonic CNN"){
        x = 4;
    }
    else if(option.text == "Music NN"){
        x = 5;
    }
    else if(option.text == "Sample Level CNN"){
        x = 6;
    }
    else if (option.text == "Sample Level CNN + Squeeze-and-excitation"){
        x = 7;
    }
    else if (option.text == "Short Chunk CNN"){
        x = 4;
    }
    else{
        x = 0;
    }
    console.log(option.text);
}