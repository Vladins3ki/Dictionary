let list = [];


document.getElementById("add").onclick = function(){
    let word = document.getElementById("words").value;
    list.push(word);
    document.getElementById("words").value = "";

  
}

document.getElementById("addSearch").onclick = function(){
    let searchInput = document.getElementById("search").value;
    let searchValue = (list.indexOf(searchInput) > -1);
    if(searchValue == true){
        document.getElementById("changeText").innerHTML = "The word you type in already exists in the dictionary list!";
    }else{
        document.getElementById("changeText").innerHTML = "The word does not exist in the dictionary list!"
    }
    document.getElementById("search").value = "";
    
}








