import React from 'react';
import './Sleeve.css'; // Import the CSS file for styling

// Import images
import appleMusicIcon from './images/appleMusicIcon.png';
import spotifyIcon from './images/spotify-icon.png';
import dopplerIcon from './images/doppler-icon.jpeg';
import appleIcon from './images/apple-icon.png';
import play from './images/play.png';
import redirectToNextPage from './RedirectToNextPage';
import banner1 from './images/banner1.png';
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import musiclist from './images/musiclist.png';
const Sleeve = () => {
  return (
    <div className="sleeve">
      <h1 className="sleeve-title">Sleeve 2</h1>
      <h2>The ultimate music accessory for your Mac.</h2>
      <h3>
        Sleeve sits on the desktop, displaying and controlling the music you’re
      </h3>

      <div className="icons">
        currently playing in:
        <img src={appleMusicIcon} alt="Apple Music" className="icon" />
        Apple Music
        <img src={spotifyIcon} alt="Spotify" className="icon" /> Spotify, and
        <img src={dopplerIcon} alt="Doppler" className="icon" />
        Doppler.
      </div>
      <div className="purchase-options">
        <div className="purchase-options">
          <a href="https://apps.apple.com/app/mac-app-store" className="button">
            <img src={appleIcon} alt="Apple Icon" className="icon1" />
            Mac App Store
          </a>
          <div className="buy-directly">
            <a href="https://buydirectly.com" className="button-white">
              Buy Directly $5.99
            </a>
          </div>
        </div>
        <p>No subscriptions. </p>
        <p>No in-app purchases. Requires macOS 11 Big Sur</p> <p>or later.</p>
      </div>
      {/* <div>
        <p>Now with shelves and a progress bar. See what's new in Sleeve 2.3</p>
      </div> */}

      <div className="image-container">
        <div className="image-container">
          <img src={play} alt="Shelf Image" className="shelf-image" />
          <button className="play-button">
            <a href="#" className="link-text" onClick={redirectToNextPage}>
              Now with shelves and a progress bar. See what's new in Sleeve 2.3
            </a>
          </button>
        </div>
      </div>

      {/* <button className="play-button" onClick={redirectToNextPage}></button> */}

      <div class="new-in-container">
        <div class="new-in-container">
          <span class="new-in">NEW IN</span>
          <span class="version">2.0</span>
        </div>
      </div>
      <div class="description">
        <h1>Themes. Unlimited themes.</h1>
        <h2>
          Themes in Sleeve make creating and switching between customizations
          easy. Share your own
        </h2>
        <h2>
          creations with friends and install as many themes as you like with
          just a double-click.
        </h2>
      </div>
      <div className="bannerStyle">
        <img src={banner1} alt="Description of the image" />
      </div>
      <div class="image-container">
        <img src={b1} alt="Description of the first image" />
        <img src={b2} alt="Description of the second image" />
      </div>
      <div class="customization-container">
        <div class="title">CUSTOMIZATION</div>
        <div class="description">
          <h1>Countless ways to customize.</h1>
          <h2>
            {' '}
            Customization is at the core of the Sleeve experience — choose from
            any{' '}
          </h2>
          <h2>
            combination of design choices, behaviors and settings to make Sleeve
            at home
          </h2>
          <h2> on your desktop.</h2>
        </div>
      </div>
      <div className="musiclist">
        <img src={musiclist} alt="Description of the image" />
      </div>
    </div>
  );
};

export default Sleeve;
