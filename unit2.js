document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("#userInput");
    let select = document.querySelector("#movie");
    
    const getMovie= async () => {
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films");
            let data = res.data.data;
            data.forEach(movie => {
                let option = movie.title
                option.innerText = option.value
                select.appendChild(option)
                debugger
            })
        } catch (err) {
            console.log("error");
            
        }
    }
    getMovie()
})