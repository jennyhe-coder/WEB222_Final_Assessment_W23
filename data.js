// Attach reviewData to the global window Object 

// so other scripts can access it at runtime. 

window.reviewData = [ 
  /* Your Review Data Goes Here… */
  {name: "Anna Rhode", date: "12/08/2018", rating: 2, text: "I'm sorry but this boardgame is not as fun as I thought it would be, would not recommend."},
  {name: "Gorden Lee", date: "03/02/2020", rating: 5, text: "exciting and family-friendly game that is ideal for game nights!"},
  {name: "Hubert Choi", date: "06/12/2019", rating: 4, text: "There was never a boring moment when playing this game, however I wish that there were more interesting deck of cards"},
  {name: "Grace Jill", date: "10/23/2021", rating: 1, text: "Horrible game, very boring.... Did not live up to my expectations"},
  {name: "Rachel Smith", date: "07/17/2022", rating: 3, text: "My experience was okay, the game was easy to learn but not the best game I have ever played."},
  {name: "Benny King", date: "09/10/2022", rating: 4, text: "Highly recommend! The best!"}
  ]; 

const { reviewData } = window;
console.log({reviewData}, "App Data");
var reviewContainer = document.getElementById("review-container");

//When the page loads, use the review data in data.js to generate one card per review
window.onload = () => {

  function generateReview(review){
    //create a div to hold the card review
    var reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
        
    // ... rest of your card building code here
    var reviewName = document.createElement('h2');
    reviewName.classList.add('review-name');
    reviewName.textContent = review.name;
        
    var reviewDate = document.createElement('time');
    reviewDate.classList.add('review-date');
    reviewDate.textContent = review.date;
        
    var reviewRating = document.createElement('div');
    reviewRating.textContent = "★".repeat(review.rating);
        
    var reviewText = document.createElement('p');
    reviewText.classList.add('review-text');
    reviewText.textContent = review.text;
    
    //add the elements to the review card
    reviewCard.appendChild(reviewName);
    reviewCard.appendChild(reviewDate);
    reviewCard.appendChild(reviewRating);
    reviewCard.appendChild(reviewText);

    return reviewCard;
  }

  reviewData.forEach((review) => {
    //add the review card to the review container
   reviewContainer.appendChild(generateReview(review));
 });

//add a new object to the reviewsData array
const form = document.getElementById("review-form");
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newReview = {
    name: document.getElementById("name").value,
    date: document.getElementById("date").value,
    rating: document.getElementById("rating").value,
    text: document.getElementById("text").value
  }
  reviewData.push(newReview); 

  reviewContainer.innerHTML = "";
  reviewData.forEach((review) => {
    //add the review card to the review container
   reviewContainer.appendChild(generateReview(review));
   });
  })
}

