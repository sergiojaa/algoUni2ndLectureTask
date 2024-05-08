// 1. დაწერეთ პროგრამა,რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი
    let number1 = Number(prompt('enter the number'))
    if(number1 % 2 === 0){
        console.log('რიცხვი ლუწია')
    }else{
        console.log('რიცხვი კენტია')
    }
//2. დაწერეთ პროგრამა,რათა შეამოწმოთ რიცხვი დადებითია  თუ უარყოფითი თუ ნული
let num2 = Number(prompt('Enter the number'))
if(num2 > 0){
    console.log('დადებითი რიცხვი')
}else if(num2 < 0 ){
    console.log('უარყოფითი რიცხვი')
}else if(num2 === 0){
    console.log('რიცხვი 0-ის ტოლია')
}else{
    console.log('invalid number')
}

//3. დაწერეთ პროგრამა,რათა შეამოწმოთ იყოფა თუ არა რიცხვი სხვა რიცხვზე
let number3 = 9
let nu3 = 3
if(number3 % nu3 === 0){
    console.log('იყოფა')
}else{
    console.log('არ იყოფა')
}

//4. დაწერეთ პროგამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა
let task4 = 'Hello serioj'
if(task4 === ''){
    console.log('ცარიელია')
}else{
    console.log('არ არის ცარიელი')
}  or
 if(task4.length === 0){
    console.log('ცარიელია')
 }else{
    console.log('არ არის ცარიელი')
 }
//5. დაწერეთ პროგრამა,რათა შეამოწმოთ სტრიქონი შეიცავს თუ არა კონკრეტულ სიტყვას
const task5 = 'me var sergi '
const taskk5 = task5.includes('var')
console.log(taskk5)

//6. დაწერეთ პროგრამა, რომ იპოვოთ მაქსიმალური ორი რიცხვიდან 
console.log(Math.max(5,6,10,20))
//7. დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან 
console.log(Math.min(5,20,30,40))
//8. დაწერეთ პროგრამა,რომელიც მომხმარებელს შეეკითხება თავის ასაკს და დაადგენს არის თუ არა 18 წლის ან უფრო მეტის.
//   თუ არის გამოპრინტეთ 'Adult' ,თუ არადა - 'Minor'
let age8 = Number(prompt('enter your age'))
if(age8 >= 18 ){
    console.log('adult')
}else if(age8 < 18 ){
    console.log('minor')
}

//9. დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შეასაბამის შეფასებას.
//   91-100->A. 81-90 ->B. 71-80 -> C. 61-70 ->D. 51-60->F. E= 0-50 -> ჩაიჭრა. გამოიყენეთ ორივე- if/else if/else და switch
let num = Number(prompt('enter your mark'))
switch(true){
    case num > 90 && num <= 100:
        console.log('A')
        break;
    case num > 80 && num <=90:
        console.log('B')
        break;
    case num > 70 && num <= 80:
        console.log('C')
        break;
    case num > 60 && num <= 70:
        console.log('D')
        break;
    case num > 50 && num <= 60:
        console.log('E')
        break;
    case num >= 50:
        console.log('თავიდან სცადე')
        break
        default:
            console.log('unknown number')
            break
}
if(num > 90 && num <=100){
    console.log('A')
}else if(num > 80 && num <=90){
    console.log('B')
}else if (num > 70 && num <= 80){
    console.log('C')
}else if (num > 60 && num <= 70){
    console.log('D')
}else if (num > 50 && num <= 60){
    console.log('E')
}else{
    console.log('თავიდან სცადე')
}
//10. დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას 
//    switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
let task10 = prompt('enter the character')
switch(task10){
    case 'A':
        console.log('შესანიშნავი')
        break;
    case 'B':
        console.log('კარგი')
        break;
    case 'C':
        console.log('ნორმალური')
        break;
        default:
        console.log('კიდევ სცადე უკეთესი შედეგისთვის')
}

//11. დაწერეთ პროგრამარომელიც input-ის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის) და 
//   ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.
let task11 = Number(prompt( 'write the number of month' ))
switch(task11){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31 days')
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('30 days')
        break;
    case 2:
        console.log('28 or 29 days')
        break
    default:
        console.log('invalid month number')
}

 