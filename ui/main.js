console.log('Loaded!');
//change the text of main text div
var button=document.getElementbyId('counter');
var count=0;
button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};