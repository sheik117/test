window.onload = init;

function carFormToJSON(event){
    event.preventDefault();

    var data = new FormData(event.target);
  
    var value = data.get('firstname');
  
    console.log({ value });

    // document.getElementById("results").innerHTML = "Paragraph changed.";

    const output = document.getElementById('results');

    var object = {};
    data.forEach(function(value, key){
        object[key] = value;
    });
    var json = JSON.stringify(object);

    output.innerHTML = json;
}


function init(){
    // const form = document.querySelector('form');
    const form = document.getElementById('myForm');
    if(form){
        form.addEventListener('submit', carFormToJSON);
    }
}
