import './App.css';
import Menu from "./components/menu/Menu";
import Posts from "./components/posts/Posts";


function App() {
  return (
      <div>
        <Menu pages={['page1','page2','page3']}/>
        <Posts/>
        <Menu pages={['page4','page5','page6']}/>
      </div>
  );
}

export default App;
