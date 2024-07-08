import './addUser.css'
const addUser = () => {
  return (
    <div className="adduser">
            <form>
                <input type="text" name="username" placeholder='username' />
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./assets/avatar.png" alt="" />
                    <span>Jane Doe</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
  )
}
export default addUser;