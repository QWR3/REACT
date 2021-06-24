import './App.css';
import Menu from "./components/menu/Menu";
import Users from "./components/users/Users";

function App() {
  return (
      <div>
        <Menu pages={['page1','page2','page3']}/>
        <Users/>
        <Menu pages={['page4','page5','page6']}/>
      </div>
  );
}

export default App;
