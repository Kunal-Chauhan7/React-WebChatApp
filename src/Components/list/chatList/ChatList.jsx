import { useState } from 'react'
import './ChatList.css'

const ChatList = () => {
  const[addMode,setMode] = useState(false);
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./assets/search.png" alt="" />
          <input type="text"placeholder='Search...' />
        </div>
        <img src={addMode?"./assets/minus.png":"./assets/plus.png"} alt="" className='add' onClick={()=>setMode(
          (prev)=>!prev
        )} />
      </div>
    </div>
  )
}
export default ChatList