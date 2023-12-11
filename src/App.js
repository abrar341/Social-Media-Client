import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="App">
      <header>
        <h1>Memories</h1>
      </header>
      <div className="main">
        <div className="posts-container">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="form-container">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default App;
