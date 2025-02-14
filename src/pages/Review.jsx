import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Review.scss";

const Review = () => {
  useEffect(() => {
    document.title = "Review | KEANSBURG PARK";
  }, []);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5); // Default to 5 stars
  const [reviewText, setReviewText] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !reviewText.trim()) {
      setSubmissionMessage("Please fill in all fields.");
      return;
    }
    // In a real application, you would send this data to a backend server
    console.log("Submitted Review:", { name, rating, reviewText });
    setSubmissionMessage("Thank you for your review!");

    // Clear the form
    setName("");
    setRating(5);
    setReviewText("");
  };

  return (
    <div className="Review">
      <div className="review-content">
        <p className="review-intro">
          {/* ... Your existing introduction text ... */}
          Tell you feeling about us here !!
        </p>

        {/* Placeholder for existing reviews (you'd fetch these from a database) */}
        <div className="existing-reviews">
          <h3>Recent Reviews</h3>
          <div className="review">
            <h4>John Doe</h4>
            <p>Rating: ★★★★★</p>
            <p>Great park! Had a wonderful time with the family.</p>
          </div>
          <div className="review">
            <h4>Jane Smith</h4>
            <p>Rating: ★★★★☆</p>
            <p>Fun rides, but the lines were a bit long.</p>
          </div>
          {/* ... more placeholder reviews ... */}
        </div>

        {/* Review Submission Form */}
        <div className="review-form">
          <h3>Submit Your Review</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value, 10))}
              >
                <option value={5}>★★★★★</option>
                <option value={4}>★★★★☆</option>
                <option value={3}>★★★☆☆</option>
                <option value={2}>★★☆☆☆</option>
                <option value={1}>★☆☆☆☆</option>
              </select>
            </div>
            <div>
              <label htmlFor="reviewText">Review:</label>
              <textarea
                id="reviewText"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
                rows={4} // Added rows for better textarea size
              />
            </div>
            {submissionMessage && (
              <p className="submission-message">{submissionMessage}</p>
            )}
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>

      <aside className="review-sidebar">
        <h3>Explore More</h3>
        <ul>
          <li>
            <Link to="/attractive-zones">Attractive Zones</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link to="/submit-review">Submit Review</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Review;
