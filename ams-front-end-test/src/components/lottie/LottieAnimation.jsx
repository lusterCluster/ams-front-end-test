import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/app-animation.json';

const LottieAnimation = () => {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
