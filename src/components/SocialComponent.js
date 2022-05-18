import React from 'react';
import './SocialComponent.css';
import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import shareActive from '../images/icon-share-active.svg';
import Polygon from './Polygon';

const SocialComponent = ({ handleShareClick }) => {
  return (
    <div className="social">
      <div className="social-left">
        <button className="btn-share">share</button>
        <img src={facebook} className="icon" alt={'facebook'} />
        <img src={twitter} className="icon" alt={'twitter'} />
        <img src={pinterest} className="icon" alt={'pinterest'} />
      </div>
      <button className="icon-share active mobile" onClick={handleShareClick}>
        <img src={shareActive} alt="share" />
      </button>
      <Polygon />
    </div>
  );
};

export default SocialComponent;
