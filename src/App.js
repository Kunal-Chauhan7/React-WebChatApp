import Chat from "./Components/chats/Chat";
import Details from "./Components/detail/details";
import List from "./Components/list/List";
function App() {
  return (
    <div className="container">
      <List/>
      <Chat/>
      <Details/>
    </div>
  );
}

export default App;
