import React from "react";
import "../styles/pages/HomePage.scss";

const reviews = [
  {
    name: "Harlequin59",
    location: "Hastings, United Kingdom",
    rating: 4,
    title: "Fabulous fishing pier",
    content:
      "I was looking for a place to stop in this area, and when I saw the pier on google maps, I knew I wanted to stop here. The pier costs $1 to walk it, and the cost is worth the view and experience. The beach water borders on gross. It's brown and the bay floor feels odd.",
    visited: "February 2024",
    traveledAs: "as a couple",
    written: "February 13, 2024",
  },
  {
    name: "SEALS",
    location: "Tokyo, Japan",
    rating: 5,
    title:
      "A beach that is fun to walk or fish from",
    content:
      "Particularly in the late fall and early spring this is where I enjoy fishing at. You can get a good cast out and the bay always seems to have some type of fish biting. It is really cool to bring in a decent sized bluefish from shore and that is mainly what I go for. Very peaceful only people taking a walk or sunbathing.",
    visited: "June 2023",
    traveledAs: "as a couple",
    written: "March 25, 2024",
  },
  {
    name: "Jessie Jackson",
    location: "New York",
    rating: 5,
    title: "Fun theme park",
    content:
      "We, family of 2 adults and an eight year old, spent a day here and had a fun time. We only went into the theme park and didn’t go to the waterpark or the zoo. We paid for the basic entry plus unlimited ‘train’ travel and already knew from reviews that we’d pay extra for each individual attraction. We...",
    visited: "April 2024",
    traveledAs: "with family",
    written: "May 1, 2024",
  },
];

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <div className="review-header">
      <h3>{review.name}</h3>
      <p>{review.location}</p>
    </div>
    <div className="rating">
      {Array(review.rating)
        .fill()
        .map((_, i) => (
          <span key={i} className="circle filled"></span>
        ))}
      {Array(5 - review.rating)
        .fill()
        .map((_, i) => (
          <span key={i} className="circle"></span>
        ))}
    </div>
    <h4>{review.title}</h4>
    <p>{review.content}</p>
    <div className="review-footer">
      <p>Visited: {review.visited}</p>
      <p>Traveled {review.traveledAs}</p>
      <p>Written: {review.written}</p>
    </div>
  </div>
);

const Reviews = () => (
  <div className="reviews">
    {reviews.map((review, index) => (
      <ReviewCard key={index} review={review} />
    ))}
  </div>
);

export default Reviews;
