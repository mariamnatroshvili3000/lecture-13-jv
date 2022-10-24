var strSum = prompt ("შეიყვანეთ ანაბარის თანხა", 1000)
var strPercent= prompt ("შეიყვანეთ საპროცენტო განაკვეთი", 10)

var sum= parseInt (strSum);
var percent = parseInt ( strPercent);

sum=sum + sum * percent / 100;
alert ( "პროცენტი დარიცხვის შემდეგ თანხა იქნება" + sum)


if (income >= 2000 && income <=4000) {
    alert( "sashualo xelfasi")
}

var income = 1000
if (income < 2000){
    alert("საშუალოზე დაბალი")
}
else {
    alert ("კაი ხელფასი")
}

var income = 200;
switch (income) {
    case 100:
        console.log ("საშუალზე დაბალი")
        break;
    case 200 :
        console.log ("საშუალო ხელფასი")
        break
    case 3000 :
        console.log ("კაი ხელფასი")
}