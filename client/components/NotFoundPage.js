import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <br /><br />
      <img className="not-found-image" src="https://www.boredpanda.com/blog/wp-content/uploads/2019/09/food-realistic-cakes-luke-vincentini-fb2.png" style={{ textAlign: 'center' }} />
      <p style={{ textAlign: 'center' }}>We ran out of eggs and haven't been able to make a recipe for that yet 😨</p>
      <p style={{ textAlign: 'center' }}>Why don't you give <Link to='/products'><strong style={{ fontSize: '20px' }}>these other treats</strong></Link> a chance?</p>
      <br /><br /><br /><br />
    </div>
  );
};

export default NotFoundPage;