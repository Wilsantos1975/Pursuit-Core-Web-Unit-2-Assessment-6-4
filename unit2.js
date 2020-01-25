document.addEventListener("DOMContentLoaded", () => {

    const fetchData = async () => { // to fetch the data and to populate the select.
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films");
            let movies = res.data;
            movies.forEach(movie => {
                let select = document.querySelector("select");
                let option = document.createElement("option");
                option.innerText = movie.title;
                option.value = movie.id;
                select.appendChild(option)
            })
        } catch (err) {
            console.log(err);
        }
    }
   
    const displayMovieInfo = async (id) => { // to get the info of the movie, by id
        let res = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
        let movieData = res.data;
        let title = document.createElement("h3");
        let releaseDate = document.createElement('p');
        let description = document.createElement('p');
        title.innerText = movieData.title;
        releaseDate.innerText = movieData.release_date;
        description.innerText = movieData.description;
        let movieInfo = document.querySelector("#movieInfo");
        movieInfo.innerHTML = ""; // to prevent the info to be display below the previous change
        movieInfo.appendChild(title);
        movieInfo.appendChild(releaseDate);
        movieInfo.appendChild(description);
    
    }
    
    fetchData();

    let select = document.querySelector('select');
    select.addEventListener('change',(e) => {
        displayMovieInfo(e.target.value)
    })

    let form = document.querySelector("form");
    let userReview = document.querySelector("#userInput")
    form.addEventListener("submit", (e) => {
        event.preventDefault()
        let li = document.createElement("li");
        li.innerText = `${title.innerText}: ${userReview.value}`
        ul.appendChild(li)
    })

})