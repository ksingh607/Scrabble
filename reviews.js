function addReview() {
    // Get the values from the Form
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let review = document.getElementById("review").value;
  
    // Create a new review Object
    let newReview = {
      name: name,
      date: date,
      review: review
    };
  
    // Add the new review to the reviews Array
    reviewData.push(newReview);
  
    // Redraw the reviews
    drawReviews();
  }
  
  function drawReviews() {
    let reviewsDiv = document.getElementById("reviews");
    reviewsDiv.innerHTML = ""; // Clear all existing reviews
  
    // Loop over the reviews Array
    for (let i = 0; i < reviewData.length; i++) {
      // Get the current review
      let review = reviewData[i];
  
      // Create a <div> element to hold the review
      let reviewDiv = document.createElement("div");
      reviewDiv.className = "review";
  
      // Add the review data to the <div>
      reviewDiv.innerHTML = `
        <p><strong>Name:</strong> ${review.name}</p>
        <p><strong>Date:</strong> ${review.date}</p>
        <p><strong>Review:</strong> ${review.review}</p>
      `;
  
      // Add the review <div> to the reviews <div>
      reviewsDiv.appendChild(reviewDiv);
    }
  }
  
  // Draw the reviews when the page loads
  drawReviews();