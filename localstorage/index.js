document.getElementById("form").addEventListener("submit",function(){
    getdata1()
})

var arr = JSON.parse(localStorage.getItem("arr")) || []
function getdata1(){
    event.preventDefault()
    var name = document.getElementById("int1").value;
    var age = document.getElementById("int2").value;
    // console.log(name,age)

    if(!name|| !age){
       alert("Please fill the all field!")
       return
    }


    var obj = {
        name,
        age
    }
    // console.log(obj)
    arr.push(obj)
    console.log(arr)

    localStorage.setItem("arr",JSON.stringify(arr))


}





document.getElementById("btn").addEventListener("click",function(){
    Retrevingdata(arr)
})

function Retrevingdata(arr){
    var tbody = document.querySelector("tbody")
    tbody.innerText =""
    arr.forEach(function(ele){
        var tr = document.createElement("tr")

        var tn = document.createElement("td")
        tn.innerText = ele.name

        var ta = document.createElement("td")
         ta.innerText = ele.age

         tr.append(tn,ta)
         tbody.append(tr)


    })

}