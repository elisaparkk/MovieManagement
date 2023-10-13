const movie_array = [];

function Movie(title, rating, havewatched) {
        return {title:title, rating:rating, haveWatched:havewatched};

} 

function addMovie(movie) {

        console.log("A new movie is added");
        movie_array.length++;
        movie_array[movie_array.length - 1] = movie;

} 

function printMovies() {
        
        let output = "Printing all movies...\n";

        for (let i = 0; i < movie_array.length; i++) {
                let m = movie_array[i];
                output += ("" + m.title + "has a rating of " + m.rating + ", havewatched: " + m.haveWatched + "\n");
    
        } 

        output += ("\nYou have " + movie_array.length + " movies in total\n");
        console.log(output);

} 

function highRatings(rating) {
        let output = "printing movie that has a rating higher than " + rating + "\n";
        let matches = 0;
    
        for (let i = 0; i < movie_array.length; i++) {
            let m = movie_array[i];
    
            if (m.rating > rating) {  // Adjusted the condition to match "higher than" instead of "greater or equal to"
                output += m.title + " has a rating of " + m.rating + "\n";
                matches++;
            }
    
        }
    
        output += "\nIn total, there are " + matches + " matches\n";
        console.log(output);
    }     

function changeWatched(title) {

        console.log("changing the status of the movie...");

        for (let i = 0; i < movie_array.length; i++) {
                
                let m = movie_array[i];

                if (m.title == title) {
                        m.haveWatched = !m.haveWatched;

                } 
    
        } 

} 

console.log("running program...");

addMovie(Movie("Spiderman", 3, true));
addMovie(Movie("Citizen Kane", 4, false));
addMovie(Movie("Zootopia", 4.5, true));

printMovies();

addMovie(Movie("Parasite", 2, false));
changeWatched("Spiderman");

printMovies();

changeWatched("Spiderman");

printMovies();

highRatings(3.5);

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);
