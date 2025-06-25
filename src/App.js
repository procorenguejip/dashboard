import './App.scss';
import './style/dark.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={ darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="users">
              <Route index element={<List />}/>
              <Route path=":userid" element={<Single />}/>
              <Route path="new" element={<New />}/>
            </Route>
            <Route path="categories">
              <Route index element={<List />}/>
              <Route path=":categoryid" element={<Single />}/>
              <Route path="new" element={<New />}/>
            </Route>
            <Route path="products">
              <Route index element={<List />}/>
              <Route path=":productid" element={<Single />}/>
              <Route path="new" element={<New />}/>
            </Route>
            <Route path="merchants">
              <Route index element={<List />}/>
              <Route path=":merchantid" element={<Single />}/>
              <Route path="new" element={<New />}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
