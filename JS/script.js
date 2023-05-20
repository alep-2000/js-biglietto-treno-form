let button= document.getElementById('button');

button.addEventListener('click', function(){
    let km= parseInt(document.getElementById('km').value);
    console.log(km)
    let age= parseInt(document.getElementById('age').value);
    console.log(age)
    let prizetokm= 0.21;
    let prizefinal= prizetokm * km;
    if(!isNaN(km)){
        if (age < 18){
            prizefinal *= 0.8.toFixed(2);
            console.log(prizefinal);
        }else if(age > 65){
            prizefinal *=0.6.toFixed(2);
            console.log(prizefinal);
        }else{
            prizefinal.toFixed(2);
            console.log(prizefinal);
        } 
    }
})








