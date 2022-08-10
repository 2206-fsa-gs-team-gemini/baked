import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>We don't have a recipe for that yet</p>
      <p style={{ textAlign: 'center' }}>Why don't you give <Link to='/products'>these other desserts</Link> a chance?</p>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default NotFoundPage;
