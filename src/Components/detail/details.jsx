import React from 'react';
import './detail.css';

const Details = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./assets/avatar.png" alt="Avatar" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./assets/arrowUp.png" alt="Arrow Up" />
          </div> 
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./assets/arrowUp.png" alt="Arrow Up" />
          </div> 
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./assets/arrowDown.png" alt="Arrow Down" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <img src="https://i.pinimg.com/564x/2b/58/e8/2b58e8bec19fb432a7681127e8d95e16.jpg" alt="" />
              <span>photo_2024</span>    
            </div>
            <img src="./assets/download.png" alt="Download" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./assets/arrowUp.png" alt="Arrow Up" />
          </div> 
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}
export default Details;
