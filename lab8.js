// massive/array -> olon utga zereg hadgalh
// var z = 5;
// []-> massive/array
// var massiveName = ['string','number','null','boolean']
var too = [1,2,3,4,5,6,7];
console.log(too);
//  index --> element-iin ezleh dugaar --> index 0-ees ehelne
// lenth --> massive-iin elementiin too
console.log(too[0]);
console.log(too[4]);
too[5]=8;
too[0]=0;
console.log(too);
console.log(too[0]);
// food massive/uusgeed 3 hool nerleed tus burdene hevel
var food = ["pizza","burgar","sushi"];
console.log(food);
console.log(food[0]);
console.log(food[1]);
console.log(food[2]);
var test = ["text",true,50,null];
console.log(test);
// for -> massive
// first -> too[0]
// last -> length ahiglana
// too[too.length-1] hamgiin ehnii element-iig gargana
// length ashgalval hamgiin suulchiin element-iig gargaj irne
console.log(too[too.length-1]);
console.log(too.length);
for(var i=0; i<=too.length-1;i++){
    console.log(too[i]);

}
// bodlog 1
var a =[8,4,9,6,2];
console.log(a[0]*a[a.length-1]);
// bodlog 2
var sum=0;
var urjver=1;
var b =[4,5,6,7,8,9,10,11,12,13];
for(var i=0; i<=b.length-1;i++){
    sum=sum+b[i];
    urjver=urjver*b[i];
}
console.log(sum);
console.log(urjver);
// bodlog 3
var c = [1,2,3,11,13,5,7,8,9,10];
for(var i=0;i<=c.length-1;i++){
    if(c[i]%2==0){
        console.log(c[i]+"bol tegsh too")
    }else if(c[i]%2!=0){
        console.log(c[i]+"sondgoi too")
    }
}
// project
var color=['aqua','blue','purple','red','green'];
var body = document.getElementsByTagName('body')[0];
var button = document.getElementsByTagName('button')[0];
var random;
console.log(body);
var i = -1;
function changeColor(){
    i++;
    body.style.backgroundColor = color[i];
    if(i>color.length-1){
        i=random ; 
        random=Math.floor(Math.random()*5);
    }
    console.log(i)
    random=Math.floor(Math.random()*5);
    if(i==0){
        body.style.backgroundColor = color[0]; 
        button.innerText = color[0];
    }else if(i==1){
        body.style.backgroundColor = color[1]; 
        button.innerText = color[1];
    }else if(i==2){
        body.style.backgroundColor = color[2]; 
        button.innerText = color[2];
    }else if(i==3){
        body.style.backgroundColor = color[3]; 
        button.innerText = color[3];
    }else if(i==4){
        body.style.backgroundColor = color[4]; 
        button.innerText = color[4];
    }else if(i==5){
        body.style.backgroundColor = color[5]; 
        button.innerText = color[5];
    }
    body.style.backgroundColor = color[i]; 
    button.innerText = color[i];
}
// homework--> random oor ungiig uurchluh Math.floor(Math.random);
// indexOf -> utga haddeh index deer baigaag gargaj irne
// typeOf -> ymar uildelteig gargaj irne
var a =5;
console.log(typeof(a));
var d = [5,3,6,5]
console.log(d.indexOf(3));
// github deerh iluuts zuilsee ustga