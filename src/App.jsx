
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const go = useNavigate();
  return (
    <div className="App">
      app
      <Link to='/todolist/873732?a=1#b=3'>点我跳转todolist</Link>
      <div onClick={()=>{go('/test')}}>点我去test</div>
    </div>
  );
}

export default App;
