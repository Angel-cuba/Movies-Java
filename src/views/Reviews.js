import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/reviews/ReviewForm';
import api from '../api/axiosConfig';

function Reviews({ getMovieData, movie, reviews, setReviews }) {
  const reviewText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = reviewText.current;

    try {
      await api.post('/api/v1/reviews', {
        reviewBody: rev.value,
        imdbId: movieId,
      });
      const updatedReviews = [...reviews, { body: rev.value }];
      rev.value = '';
      setReviews(updatedReviews);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <h1>Reviews</h1>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    reviewText={reviewText}
                    labelText="Write a review"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Reviews</h2>
                </Col>
              </Row>
            </>
          }
          {reviews?.map((review, index) => {
            return (
              <Row
                key={index}
                style={{
                  marginTop: 10,
                  backgroundColor: 'rgba(250, 110, 430,.13)',
                  width: 'fit-content',
                  padding: 3,
                  borderRadius: 4,
                }}
              >
                <Col>{review.body}</Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Reviews;
