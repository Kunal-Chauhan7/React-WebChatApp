import Chat from "./Components/chats/Chat";
import Details from "./Components/detail/details";
import List from "./Components/list/List";
import Login from "./Components/Login/Login";
import Notification from "./Components/Notification/Notification";

const user = false

function App() {
  return (
    <div className="container">
      {user?(
        <>
          <List/>
          <Chat/>
          <Details/>
        </>
      ):(
        <Login/>
      )}
      <Notification/>
    </div>
  );
}

export default App;
