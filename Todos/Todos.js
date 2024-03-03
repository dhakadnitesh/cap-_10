const Todos  = async()=>{
   try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    console.log(data)

    let tbody = document.querySelector("tbody");
    

    data.forEach((ele)=>{
        let card = document.createElement("tr")

        let p = document.createElement("td")
        p.innerText = ele.id

        let p1 = document.createElement("td")
        p1.innerText = ele.title

        let p2 = document.createElement("td")
        p2.innerText = ele.completed

        card.append(p,p1,p2)
        tbody.append(card)

    })
    
   } catch (error) {
    console.log(error)
   }
}

Todos()