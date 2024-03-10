var list=document.getElementById("todolist");
var inputbox=document.getElementById("searchbar");
var btnadd=document.getElementById('additem');
var btnupdate = document.getElementById('updateitem');
var btnremove=document.getElementById('removeitem');
var currentvalue=''
inputbox.addEventListener('input',function(e){
    currentvalue = e.target.value;
});
inputbox.addEventListener('keyup',function(e){
    if(e.keyCode===13){
        addlistitem();

    }
})

function createnewnode(){
    var newlistelement = document.createElement('li');
    var textNode =document.createTextNode(currentvalue)
    newlistelement.appendChild(textNode);
    newlistelement.id="item"+(list.childElementCount+1);
    return newlistelement;

}
function addlistitem(){
    if(currentvalue !== undefined && currentvalue !== null && currentvalue !==''){
        var newlistelement=createnewnode();
        list.appendChild(newlistelement);
        console.log(list.childElementCount);
        inputbox.value = '';
        currentvalue ='';
    }
    else{
        alert('enter a valid value');
    }
}

btnadd.addEventListener('click',addlistitem)

btnupdate.addEventListener('click',function(){
    var firstelement=list.firstElementChild;
    var newlistelement =createnewnode();
    list.replaceChild(newlistelement,firstelement);


});

btnremove.addEventListener('click',function(){
    var firstelement=list.firstElementChild;
    list.removeChild(firstelement);
})