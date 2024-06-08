import React from "react";
import { Rating } from "@material-ui/lab";

const ReviewCard = ({ review }) => {
  const options = {
    size: "small",
    value: review && review.rating,
    readOnly: true,
    precision: 0.1,
  };

  return (
    <div className="reviewCard">
      <img src="https://i.postimg.cc/CKjq67Z6/images.jpg" alt="User" />
      <p>{review && review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review && review.comment}</span>
    </div>
  );
};

export default ReviewCard;
