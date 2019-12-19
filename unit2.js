document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("#userInput");
    let select = document.querySelector("#movie");
    
    const getMovie= async () => {
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films");
            let data = res.data;
            data.forEach(movie => {
                let option = document.createElement("option");
                option.innerText = movie.title
                option.id = movie.id
                select.appendChild(option)
                debugger
            })
        } catch (err) {
            console.log("error");
            
        }
    } select.addEventListener("change", () => {
        
    })
    getMovie()
})