import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import {Routes, Route} from 'react-router-dom';

const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>  
    <Route path="/" element={<Navigation />} >
    <Route index element={<Home />} />
    {/* index will allow to show the homepage also when the component matches the path "/"  */}
    <Route path="shop" element={<Shop />} />
    <Route path="sign-in" element={<SignIn />} />
    </Route>
    {/* path will be a string containg the specific path & element will be the component itself where it will be routing */}
    </Routes>
  );
};

export default App;
