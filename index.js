const from=document.getElementById("from")
const to=document.getElementById("to")
const inputNumber=document.getElementById("input-number")
const resultBox=document.getElementById("result-box")

document.getElementById("convert").addEventListener("click",()=>{
    //grab from
    let fromValue=from.value
    //grab to
    let toValue=to.value
    //grab input number
    let inputValue=inputNumber.value
    //convert input number "from to "to"
    let result=convertBase(fromValue,toValue,inputValue)
    //show the result in result box
    resultBox.innerText=result
})
function convertBase(fromBase,toBase,num)
{
    console.log(fromBase)
    let d=parseInt(num,fromBase)
    let res=d.toString(toBase)
    return res

}
document.getElementById("swap").addEventListener("click",()=>{
    let temp=from.value
    from.value=to.value
    to.value=temp
})