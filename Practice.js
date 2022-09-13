let cards=["A",1,2,3,4,5,6,7,8,9,10,"C",1,2,3,4,5,6,7,8,9,10,"D",1,2,3,4,5,6,7,8,9,10,"H",1,2,3,4,5,6,7,8,9,10]
let newcards=[]
for (let a of cards){
    if (a!="A"||"C"||"D"||"H")
    newcards.push(`${a}`)
}
shuffle(newcards);
function shuffle(newcards){
    let curindex=newcards.length;
    while (curindex!=0){
        let temp;
        let randomindex;
        curindex-=1
        randomindex=Math.floor(Math.random()*newcards.length)
        temp=newcards[curindex]
        newcards[curindex]=newcards[randomindex]
        newcards[randomindex]=temp
    }
    return newcards
}
console.log(...newcards)