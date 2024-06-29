import { useState } from 'react';
import './Chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./assets/avatar.png" alt="avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="icons">
          <img src="./assets/phone.png" alt="phone" />
          <img src="./assets/video.png" alt="video" />
          <img src="./assets/info.png" alt="info" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./assets/avatar.png" alt=''/>
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Harum quos accusamus aut. Eos, vel. Laboriosam neque doloremque 
              magni sequi quisquam consectetur sapiente non odio consequuntur? 
              Exercitationem minus cum eaque praesentium.</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Harum quos accusamus aut. Eos, vel. Laboriosam neque doloremque 
              magni sequi quisquam consectetur sapiente non odio consequuntur? 
              Exercitationem minus cum eaque praesentium.</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./assets/avatar.png" alt=''/>
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Harum quos accusamus aut. Eos, vel. Laboriosam neque doloremque 
              magni sequi quisquam consectetur sapiente non odio consequuntur? 
              Exercitationem minus cum eaque praesentium.</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://i.pinimg.com/564x/2b/58/e8/2b58e8bec19fb432a7681127e8d95e16.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Harum quos accusamus aut. Eos, vel. Laboriosam neque doloremque 
              magni sequi quisquam consectetur sapiente non odio consequuntur? 
              Exercitationem minus cum eaque praesentium.</p>
          <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./assets/img.png" alt="img" />
          <img src="./assets/camera.png" alt="camera" />
          <img src="./assets/mic.png" alt="mic" />
        </div>
        <input 
          type="text" 
          onChange={(e) => setText(e.target.value)}
          placeholder='Type a message...'
          value={text}
        />
        <div className="emoji">
          <img 
            src="./assets/emoji.png" 
            alt="emoji" 
            onClick={() => setOpen((prev) => !prev)}  
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='sendButton'>send</button>
      </div>
    </div>
  )
}

export default Chat;
  