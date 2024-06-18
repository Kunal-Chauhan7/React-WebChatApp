import { useState } from 'react';
import './Chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./assets/avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="icons">
          <img src="./assets/phone.png" alt="" />
          <img src="./assets/video.png" alt="" />
          <img src="./assets/info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./assets/img.png" alt="" />
          <img src="./assets/camera.png" alt="" />
          <img src="./assets/mic.png" alt="" />
        </div>
          <input type="text" name="" id="" placeholder='Type a message...'/>
          <div className="emoji">
            <img src="./assets/emoji.png" alt="" onClick={(()=>{
              setOpen((prev)=>!prev)
            })}/>
            <EmojiPicker open={open}/>
          </div>
          <button className='sendButton'>send</button>
      </div>
    </div>
  )
}
export default Chat