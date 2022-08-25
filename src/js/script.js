var PostNum = 3;
var btn = document.getElementById("btn");
var titleShown = false;


btn.addEventListener( "click", getTitle);

function getTitle(){

    if(titleShown === false){
        fetch('https://jsonplaceholder.typicode.com/posts/3')
        .then(response => response.json())
        .then(data => {
        document.getElementById('apiText').innerHTML = data.title;
        })
    }
    
    else{
        document.getElementById('apiText').innerHTML = "";
    }
    titleShown = !titleShown;
}



