import React, { useState } from 'react';
import './Article.css';
import SocialComponent from './SocialComponent';
import drawers from '../images/drawers.jpg';
import avatar from '../images/avatar-michelle.jpg';
import share from '../images/icon-share.svg';
import shareActive from '../images/icon-share-active.svg';

const Article = () => {
  const [isActive, setIsActive] = useState(false);

  const handleShareClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="article-card">
      <div className="img-container">
        <img src={drawers} alt="drawers" />
      </div>
      <div className="article">
        <h1 className="article-header">
          {' '}
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="article-para">
          {' '}
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="user">
          <div className="user-info">
            <img src={avatar} className="avatar" alt="michelle" />
            <div className="user-name-title">
              <h2 className="user-name">Michelle Appleton</h2>
              <em className="date">28 Jun 2020</em>
            </div>
          </div>
          <button
            className={`icon-share ${isActive ? 'active' : undefined}`}
            onClick={handleShareClick}
          >
            <img src={isActive ? shareActive : share} alt="share" />
          </button>
          {isActive && <SocialComponent handleShareClick={handleShareClick} />}
        </div>
      </div>
    </div>
  );
};

export default Article;
