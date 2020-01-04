document.addEventListener("DOMContentLoaded", () => {
  
    const fetchData = async (url, callback) => {
        try {
            let res = await axios.get(url)
            callback(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const buildSelect = (arr) => {
        let select = document.querySelector("select");
        arr.forEach(movieObj => {
            let option = document.createElement("option")
            option.innerText = movieObj.title;
            option.value = movieObj.id;
            select.appendChild(option)
        })

    }
    
    // const getMovie= async () => { 
    //     try {
    //         let res = await axios.get("https://ghibliapi.herokuapp.com/films");
    //         let data = res.data;
    //         data.forEach(movie => {
    //             let option = document.createElement("option");
    //             option.innerText = movie.title
    //             option.id = movie.id
    //             select.appendChild(option)
    //             debugger
    //         })
    //     } catch (err) {
    //         console.log("error");
            
    //     }
    // }

    const updateMovieInfo = (id) => {
        let url = (`https://ghibliapi.herokuapp.com/films/${id}`)
        fetchData(url,diplayMovieInfo)
    }

    const diplayMovieInfo = (movie) => {
        let h3 = document.createElement("h3")
        let releaseDate = document.createElement("p")
        let description = document.createElement('p')
        title.innerText = movie.title;
        releaseDate.innerText = movie.release_date
        description.innerText = movie.description
        let movieInfo = document.querySelector("#movieInfo")
        movieInfo.innerHTML = ""
        movieInfo.appendChild(title)
        movieInfo.appendChild(release_date)
        movieInfo.appendChild(description)
    }

    fetchData("https://ghibliapi.herokuapp.com/films",buildSelect);
    let select = document.querySelector("select");
    select.addEventListener("change", (event) => {
        updateMovieInfo(event.target.value)
    })
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let title = document.querySelector("h3").innerText;
        let ul = document.querySelector("ul");
        let li = document.querySelector("li");
        let input = document.querySelector("#movieReview")
        let review = input.value
        input.value = ""
        li.innerHTML = `<b>${title}: </b> ${review}`
        ul.appendChild(li)


    })
})