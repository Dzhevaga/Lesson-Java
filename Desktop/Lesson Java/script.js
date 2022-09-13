
window.addEventListener('load', function(){
    // console.log ('Процесс пошел!!!!!');
    // let ul = document.getElementById ('menu');
    let arrayLi = document.getElementsByClassName('item-menu');

    let content = document.getElementsByClassName('content');

    // console.log(arrayLi)
    
    Object.keys(arrayLi).forEach( key => { 
        arrayLi[key].addEventListener('click', Contact)
    })
    // let Arr = ['Kolya','Vasya','Petya'];

    // Arr.forEach( (element) => {console.log(element)})

    // console.log(ul);
    // console.log(arrayLi);
function Contact (e) {

    // if (e.target.innerText === 'пункт4') {
    //     content[0].innerText = 'Анна Каренина'
    // }

    // if (e.target.innerText === 'пункт5') {
    //     content[0].innerText = 'Война  мир'
    // }

    // if (e.target.innerText === 'пункт6') {
    //     content[0].innerText = 'Преступление и наказание'
    // }

    switch(e.target.innerText){
           case 'пункт1':
            content[0].innerText = "Анна Каренина"
           break;

           case 'пункт2':
            content[0].innerText = "1984"
           break;

           case 'пункт3':
            content[0].innerText = "Незнайка"
           break;

           case 'пункт4':
            content[0].innerHTML = '<img src="./img/image 18-3.png">'
           break;

           case 'пункт5':
            content[0].innerHTML = '<img src="./img/image 2jungle">'
           break;

    }

}



})

