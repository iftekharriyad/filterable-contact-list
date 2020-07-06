//Listen to keyup event
document.querySelector('#name-input').addEventListener('keyup', filterList)

function filterList(){
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




