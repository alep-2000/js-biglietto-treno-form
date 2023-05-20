let button= document.getElementById('button');

button.addEventListener('click', function(){
    let km= parseInt(document.getElementById('km').value);
    let age= parseInt(document.getElementById('age').value);
    let name= document.getElementById('name').value;
    let prizetokm= 0.21;
    let prizefinal= prizetokm * km;
    if(!isNaN(km)){
        if (age < 18){
            prizefinal *= 0.8;
            console.log(prizefinal);
        }else if(age > 65){
            prizefinal *=0.6;
            console.log(prizefinal);
        }else{
            prizefinal;
            console.log(prizefinal);
        } 

    document.getElementById('show-name').innerText =name;
    document.getElementById('show-km').innerText =km;
    document.getElementById('show-age').innerText =age;
    document.getElementById('show-price').innerText = prizefinal.toFixed(2) +'€';
    }

})


document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('name').value='';
    document.getElementById('km').value='';
    document.getElementById('age').value='';
    document.getElementById('show-name').innerText ='';
    document.getElementById('show-km').innerText ='';
    document.getElementById('show-age').innerText ='';
    document.getElementById('show-price').innerText = '';
})








