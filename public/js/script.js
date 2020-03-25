var wrap = document.querySelector('.wrap');
function yhandler (){
                var ourRequest;
                var contentHeight = wrap.offsetHeight;//gets page content height
                var yOffset = window.pageYOffset;//gets the vertica scroll positionn
                var y = yOffset + window.innerHeight;
                if(y>= contentHeight){
                    var newdata 
                    //wrap.innerHTML += '<div class ="newData"></div>';
                    //AJAX call
                    ourRequest = new XMLHttpRequest();
                    ourRequest.open('GET','https://api.github.com/users',true)
                    ourRequest.onload = function(){
                        if(ourRequest.status >=200 && ourRequest.status<400){
                            var ourData = JSON.parse(ourRequest.responseText);
                            renderHTML(ourData)
                        }else{
                            console.log("Error")
                        }
                    }
                    
                }
                  ourRequest.send();
                

    
            }
        
window.onscroll = yhandler

function renderHTML(data){
    var htmlString = "";

    for(i = 0;i<data.length;i++){
        htmlString += "<h1>"+data[i].login + "</h1>"
    }

    wrap.innerHTML += htmlString

}
