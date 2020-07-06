//Listen to keyup event
document.querySelector('#name-input').addEventListener('keyup', filterList)
// Listen to blur event
document.querySelector('#name-input').addEventListener('blur', addHeaders)

function filterList(){
    //Get rid of headers
    removeHeaders()
    // get form input value
    var formInput= document.querySelector('#name-input').value.toLowerCase()
    // get name list
    let ul=document.querySelector('.list-group')
    let li= ul.querySelectorAll('li.contact-name')
    //Loop through name list
    for(let i=0;i<li.length;i++){
        let name=li[i].innerHTML.toLowerCase()
        //console.log(name)
        if(name.indexOf(formInput)>-1){
            li[i].style.display='initial'
        }
        else{
            li[i].style.display='none'
        }
    }
}

function removeHeaders(){
    //get headers
    let headers= document.querySelectorAll('.header')
    headers.forEach((header)=>header.style.display='none')
}

function addHeaders(){
    var formInput= document.querySelector('#name-input').value.toLowerCase()
    if(formInput===''){
        //get headers
        let headers= document.querySelectorAll('.header')
        headers.forEach((header)=>header.style.display='initial')
    }
    }
   


