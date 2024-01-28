var btn = document.querySelector("form")
btn.addEventListener("submit", function () {
    getdata1()
})
var arr = []

function getdata1() {
    event.preventDefault()
    var name = document.getElementById("name").value
    var employeeID = document.getElementById("employeeID").value
    var department = document.getElementById("department").value
    var exp = document.getElementById("exp").value
    var email = document.getElementById("email").value
    var mbn = document.getElementById("mbn").value
    var obj = {
        name,
        employeeID,
        department,
        exp,
        email,
        mbn
    }
    // console.log(obj)
    arr.push(obj)
    console.log(arr)

    display1(arr)

}





// if(!name || !employeeID || !department || !exp || !email ||!mbn){
//     alert('Fill the form')
//     return;
// }

function display1(arr) {
    var tbody = document.querySelector("tbody")
    tbody.innerText = ""

    arr.forEach(function (ele, i) {
        var tr1 = document.createElement("tr")

        var tn = document.createElement("td")
        tn.innerText = ele.name
        var te = document.createElement("td")
        te.innerText = ele.employeeID

        var td = document.createElement("td")
        td.innerText = ele.department

        var texp = document.createElement("td")
        texp.innerText = ele.exp

        var temail = document.createElement("td")
        temail.innerText = ele.email

        var tm = document.createElement("td")
        tm.innerText = ele.mbn

        var trole = document.createElement("td")
       if(ele.exp>=5){
        trole.innerText = "senior"
       }
       else if(ele.exp>=2 && ele.exp<=5){
        trole.innerText = "junior"
       }
       else{
        trole.innerText= "Fresher"
       }


        var btn = document.createElement("button")
        btn.innerText = "Delete"
        btn.addEventListener("click",function(){
           delete1(ele,i)
        })

        tr1.append(tn, te, td, texp, temail, tm,trole,btn)
        tbody.append(tr1)


    })
}

function delete1(ele,i){
    arr.splice(i,1)
    console.log(arr)
    display1(arr)
}