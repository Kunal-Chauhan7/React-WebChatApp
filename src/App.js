import Chat from "./Components/chats/Chat";
import Details from "./Components/detail/details";
import List from "./Components/list/List";
import Login from "./Components/Login/Login";

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
    </div>
  );
}

export default App;
