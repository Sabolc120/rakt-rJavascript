function searchProductByType(){
    //Variables for storing down the search box contents
    let searchInput = document.getElementById('search').value;

    //Data from the HTML
    let termekTipus = document.getElementsByClassName('termekTipus')

    //Arrays for storing down the data
    let arrayOfProducts = [];

    let elemek = document.getElementsByClassName('elem')
    //The search starts
    if(searchInput != undefined){
        for(let i = 0; i < termekTipus.length; i++){
            arrayOfProducts[i] = termekTipus[i].innerHTML
        }
        for(let i = 0; i < arrayOfProducts.length; i++)
        if(arrayOfProducts[i].includes(searchInput)){
            elemek[i].style.display = ""
        }
        else{
            elemek[i].style.display = "none"
        }
    }
}
function searchProductByMax(){
    let quantities = document.getElementsByClassName('mennyi')
    let searchByMax = document.getElementById('searchByMax').value
    let elemek = document.getElementsByClassName('elem')
    if(searchByMax != null){
        let quantitiesString = [];
        let quantitiesInt = [];
        for(let i = 0; i < quantities.length; i++){
            quantitiesString[i] = quantities[i].innerHTML;
        }
        for(let i = 0; i < quantitiesString.length; i++){
            quantitiesInt[i] = parseInt(quantitiesString[i]);
        }
        for(let i = 0; i < quantitiesInt.length; i++){
            if(quantitiesInt[i] > searchByMax){
                elemek[i].style.display="";
            }
            else{
                elemek[i].style.display="none"
            }
        }
    }
}
function searchProductByMin(){
    let quantities = document.getElementsByClassName('mennyi')
    let searchByMin = document.getElementById('searchByMin').value
    let elemek = document.getElementsByClassName('elem')
    if(searchByMin != null){
        let quantitiesString = [];
        let quantitiesInt = [];
        for(let i = 0; i < quantities.length; i++){
            quantitiesString[i] = quantities[i].innerHTML;
        }
        for(let i = 0; i < quantitiesString.length; i++){
            quantitiesInt[i] = parseInt(quantitiesString[i]);
        }
        for(let i = 0; i < quantitiesInt.length; i++){
            if(quantitiesInt[i] < searchByMin){
                elemek[i].style.display="";
            }
            else{
                elemek[i].style.display="none"
            }
        }
    }
}
function searchClothByType(){
    let searchInput = document.getElementById('search').value
    
    //Data from the HTML
    let termekTipus = document.getElementsByClassName('termekTipus')

    //Arrays for storing down the data
    let arrayOfProducts = [];

    let elemek = document.getElementsByClassName('elem')
    if(searchInput != undefined){
        let arrayOfClothType = []
        for(let i = 0; i < termekTipus.length; i++){
            arrayOfClothType[i] = termekTipus[i].innerHTML;
        }
        for(let i = 0; i < arrayOfClothType.length; i++){
            if(arrayOfClothType[i].includes(searchInput)){
                elemek[i].style.display = ""
            }
            else{
                elemek[i].style.display = "none";
            }
        }
    }
}
function searchClothByMax(){
    let searchByMax = document.getElementById('searchByMaxQuantity').value
    let quantities = document.getElementsByClassName('mennyi')

    let quantitiesString = [];
    let quantitiesInt = [];

    let elemek = document.getElementsByClassName('elem')
    if(searchByMax != null){
        for(let i = 0; i < quantities.length; i++){
            quantitiesString[i] = quantities[i].innerHTML;
        }
        for(let i = 0; i < quantitiesString.length; i++){
            quantitiesInt[i] = parseInt(quantitiesString[i]);
        }
        console.log(quantitiesInt);
        for(let i = 0; i < quantitiesInt.length; i++){
            if(quantitiesInt[i] < searchByMax){
                elemek[i].style.display="";
            }
            else{
                elemek[i].style.display="none";
            }
        }
    }
}
function searchClothByMin(){
    let searchByMin = document.getElementById('searchByMinQuantity').value
    let quantities = document.getElementsByClassName('mennyi')

    let quantitiesString = [];
    let quantitiesInt = [];

    let elemek = document.getElementsByClassName('elem')
    if(searchByMin != null){
        for(let i = 0; i < quantities.length; i++){
            quantitiesString[i] = quantities[i].innerHTML;
        }
        for(let i = 0; i < quantitiesString.length; i++){
            quantitiesInt[i] = parseInt(quantitiesString[i]);
        }
        for(let i = 0; i < quantitiesInt.length; i++){
            if(quantitiesInt[i] < searchByMin){
                elemek[i].style.display="";
            }
            else{
                elemek[i].style.display="none";
            }
        }
    }
}