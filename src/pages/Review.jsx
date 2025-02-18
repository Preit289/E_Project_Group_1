import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/pages/Review.scss";
import { FaStar, FaRegStar, FaCheckSquare, FaRegSquare } from "react-icons/fa";

// Import activity images directly
import attractionsImage from "../assets/img/review/attractions.jpg";
import waterparkImage from "../assets/img/review/waterpark.webp";
import beachImage from "../assets/img/review/beach.jpg";
import foodndrinkImage from "../assets/img/review/foodndrink.jpg";
import fishingpierImage from "../assets/img/review/fishingpier.jpg";
import eventsImage from "../assets/img/review/events.jpg";
import accessibilityImage from "../assets/img/review/accessibility.jpg";

const Review = () => {
  useEffect(() => {
    document.title = "Review | KEANSBURG PARK";
  }, []);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [reviewTextError, setReviewTextError] = useState("");
  const [selectedActivities, setSelectedActivities] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      reviewText: "Great park! Had a wonderful time with the family.",
      activities: ["attractions", "waterpark"],
      image: null,
      date: "2024-07-27",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      reviewText: "Fun rides, but the lines were a bit long.",
      activities: ["attractions"],
      image: null,
      date: "2024-07-26",
    },
    {
      id: 3,
      name: "Alice Johnson",
      rating: 5,
      reviewText: "The food was amazing! Loved the variety.",
      activities: ["foodndrink"],
      image: null,
      date: "2024-07-25",
    },
    {
      id: 4,
      name: "Bob Williams",
      rating: 3,
      reviewText: "The beach was nice, but it could have been cleaner.",
      activities: ["beach"],
      image: null,
      date: "2024-07-24",
    },
  ]);

  const handleActivityChange = (activity) => {
    setSelectedActivities((prevActivities) => ({
      ...prevActivities,
      [activity]: !prevActivities[activity],
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setReviewTextError("");
    setSubmissionMessage("");

    let hasError = false;

    if (!name.trim()) {
      setNameError("Please enter your name.");
      hasError = true;
    }
    if (!reviewText.trim()) {
      setReviewTextError("Please enter your review.");
      hasError = true;
    }
    if (rating === 0) {
      setSubmissionMessage("Please select a star rating.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      rating,
      reviewText,
      activities: Object.keys(selectedActivities).filter(
        (key) => selectedActivities[key]
      ),
      image: imageFile,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews((prevReviews) => [newReview, ...prevReviews]);

    setSubmissionMessage("Thank you for your review!");

    setName("");
    setRating(0);
    setReviewText("");
    setSelectedActivities({});
    setImageFile(null);
    setImagePreview(null);

    setTimeout(() => {
      setSubmissionMessage("");
    }, 5000);
  };

  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= (numStars || rating) ? "filled" : ""}`}
          onClick={() => (numStars ? null : setRating(i))}
          onMouseEnter={() => (numStars ? null : setRating(i))}
          onMouseLeave={() => {}}
          style={{
            cursor: numStars ? "default" : "pointer",
            fontSize: "1.5rem",
          }}
        >
          {i <= (numStars || rating) ? <FaStar /> : <FaRegStar />}
        </span>
      );
    }
    return stars;
  };
  // Activity image data and descriptions
  const activityImages = [
    {
      src: attractionsImage,
      alt: "Attractions",
      to: "/activity/attractions",
      description: "Thrilling rides galore!",
    },
    {
      src: waterparkImage,
      alt: "Waterpark",
      to: "/activity/waterpark",
      description: "Splash and cool down!",
    },
    {
      src: beachImage,
      alt: "Beach",
      to: "/activity/beach",
      description: "Sun, sand, and sea!",
    },
    {
      src: foodndrinkImage,
      alt: "Food and Drink",
      to: "/activity/foodndrink",
      description: "Delicious treats await!",
    },
    {
      src: fishingpierImage,
      alt: "Fishing Pier",
      to: "/activity/fishingpier",
      description: "Cast a line, relax!",
    },
    {
      src: eventsImage,
      alt: "Events",
      to: "/activity/events",
      description: "Fun for everyone!",
    },
    {
      src: accessibilityImage,
      alt: "Accessibility",
      to: "/activity/accessibility",
      description: "Inclusive and welcoming!",
    },
  ];

  return (
    <div className="Review">
      <div className="review-content">
        <p className="review-intro">Tell your feelings about us here!</p>

        {/* Display Existing Reviews */}
        <div className="existing-reviews">
          <h3>Recent Reviews</h3>
          {reviews.map((review) => (
            <div className="review" key={review.id}>
              <h4>{review.name}</h4>
              <div className="star-rating-display">
                {renderStars(review.rating)}
              </div>
              <p>{review.reviewText}</p>
              {review.image && (
                <img
                  src={URL.createObjectURL(review.image)}
                  alt={`Review by ${review.name}`}
                  className="review-image"
                />
              )}
              <p className="review-date">Reviewed on: {review.date}</p>
              {review.activities.length > 0 && (
                <p>
                  Activities:{" "}
                  {review.activities.map((activity) => (
                    <span key={activity} className="activity-tag">
                      {activity}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Review Submission Form */}
        <div className="review-form">
          <h3>Submit Your Review</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
              {nameError && <p className="error-message">{nameError}</p>}
            </div>

            {/* Activity Selection */}
            <div className="form-group">
              <label>Activities Reviewed:</label>
              <div className="activity-checkboxes">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedActivities.attractions || false}
                    onChange={() => handleActivityChange("attractions")}
                  />
                  <span className="checkbox-icon">
                    {selectedActivities.attractions ? (
                      <FaCheckSquare />
                    ) : (
                      <FaRegSquare />
                    )}
                  </span>
                  Attractions
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedActivities.waterpark || false}
                    onChange={() => handleActivityChange("waterpark")}
                  />
                  <span className="checkbox-icon">
                    {selectedActivities.waterpark ? (
                      <FaCheckSquare />
                    ) : (
                      <FaRegSquare />
                    )}
                  </span>
                  Waterpark
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedActivities.beach || false}
                    onChange={() => handleActivityChange("beach")}
                  />
                  <span className="checkbox-icon">
                    {selectedActivities.beach ? (
                      <FaCheckSquare />
                    ) : (
                      <FaRegSquare />
                    )}
                  </span>
                  Beach
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedActivities.foodndrink || false}
                    onChange={() => handleActivityChange("foodndrink")}
                  />
                  <span className="checkbox-icon">
                    {selectedActivities.foodndrink ? (
                      <FaCheckSquare />
                    ) : (
                      <FaRegSquare />
                    )}
                  </span>
                  Food and Drinks
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedActivities.fishingpier || false}
                    onChange={() => handleActivityChange("fishingpier")}
                  />
                  <span className="checkbox-icon">
                    {selectedActivities.fishingpier ? (
                      <FaCheckSquare />
                    ) : (
                      <FaRegSquare />
                    )}
                  </span>
                  Fishing Pier
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedActivities.events || false}
                    onChange={() => handleActivityChange("events")}
                  />
                  <span className="checkbox-icon">
                    {selectedActivities.events ? (
                      <FaCheckSquare />
                    ) : (
                      <FaRegSquare />
                    )}
                  </span>
                  Events
                </label>
              </div>
            </div>

            {/* Image Upload */}
            <div className="form-group">
              <label htmlFor="image">Upload Image (Optional):</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                name="image"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="image-preview"
                />
              )}
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <div className="star-rating">{renderStars()}</div>
              {submissionMessage && (
                <p className="error-message">{submissionMessage}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="reviewText">Review:</label>
              <textarea
                id="reviewText"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={4}
                name="reviewText"
              />
              {reviewTextError && (
                <p className="error-message">{reviewTextError}</p>
              )}
            </div>

            <button type="submit">Submit Review</button>
          </form>
          {submissionMessage && (
            <p className="success-message">{submissionMessage}</p>
          )}
        </div>
      </div>

      <aside className="review-sidebar">
        <h3>Explores Activities</h3>
        <div className="activity-images">
          {activityImages.map((image) => (
            <Link to={image.to} key={image.alt} className="activity-card">
              <img src={image.src} alt={image.alt} className="activity-image" />
              <div className="card-overlay">
                <span className="card-description">{image.description}</span>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Review;
