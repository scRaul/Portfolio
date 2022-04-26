var cards = document.getElementsByClassName("card");
for(let i = 0; i < cards.length;i++){
cards[i].addEventListener("click",loadPage.bind(this,cards[i].id));
}



function loadPage(id){
    let page = projects[index[id]].link;
    if(page != undefined){
        console.log(page);
        window.open(page,'_blank');
    }
}