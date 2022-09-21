import { Link } from "react-router-dom";
import "../styles/App.css";
import Card from "./UserCard";

function App() {
  return (
    <div
      className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900"
      style={{ flexDirection: "column" }}
    >
    <div className="container mx-auto text-gray-900  font-sans p-2 antialiased">
      <div className="flex flex-wrap -mx-4">
        <Card name='Rukundo Kevin' twitterHandle='rukundokevin_'/>
                  <Card name='Jane Doe' twitterHandle='janedoe'/>

      </div>
    </div>

    </div>
  );
}

export default App;
