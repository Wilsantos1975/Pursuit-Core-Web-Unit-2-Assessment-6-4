let title = document.querySelector("#movieTitle");
let form = document.querySelector("form");
let ul = document.querySelector("#movieReview")
let userReview = document.querySelector("#userInput")
let select = document.querySelector('select');
let errorMessage = document.createElement("p");
form.style.display = "none"

const fetchData = async () => { // to fetch the data and to populate the select.
    try {
        let res = await axios.get("https://ghibliapi.herokuapp.com/films");
        let movies = res.data;

        
        movies.forEach(movie => {
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

select.addEventListener('change',(e) => {
    displayMovieInfo(e.target.value)
    form.style.display = "block"
    ul.innerHTML=""; // to clear the review from the previous movie
    
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    errorMessage.innerHTML = ""
    if(userReview.value) { //function to fix bug that was allowing to print without any input in the review
        let li = document.createElement("li");
        li.innerText = `${title.innerText}: ${userReview.value}`
        ul.appendChild(li)  
        userReview.value = "" //do not clear input, you want to clear the value
    } else {
        errorMessage.innerText = "Please enter a valid input"
        ul.appendChild(errorMessage)
    }  
}) 