import './UserInfo.css';
const UserInfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="./assets/avatar.png" alt="" />
            <h2>Kunal Chauhan</h2>
        </div>
        <div className="icons">
            <img src="./assets/more.png" alt="" />
            <img src="./assets/video.png" alt="" />
            <img src="./assets/edit.png" alt="" />
        </div>  
    </div>
  )
}
export default UserInfo