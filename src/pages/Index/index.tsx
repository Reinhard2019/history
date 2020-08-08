import React from 'react';
import arrowReturnRight from 'bootstrap-icons/icons/arrow-return-right.svg';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <Link to="/old">
        <Button
          shape="circle"
          style={{ position: 'fixed', bottom: 20, right: 20 }}
        >
          <img src={arrowReturnRight} />
        </Button>
      </Link>
    </div>
  );
};

export default Index;
