import { Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import Order from './Pages/Dashboard/Order';
import Profile from './Pages/Dashboard/Profile';
import Review from './Pages/Dashboard/Review';
import Booking from './Pages/Home/Booking';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Header from './Pages/Share/Header/Header';
import NotFound from './Pages/Share/NotFound/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import SeeAll from './Pages/Home/SeeAll';
import Blog from './Pages/Other/Blog';
import Portfolio from './Pages/Other/Portfolio';

function App() {
  return (
    <div className='mx-auto'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="seeAll" element={<SeeAll/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="portfolio" element={<Portfolio/>} />



        {/* <Route path="dashboard" element={<Dashboard/>} /> */}
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<Profile></Profile>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="order" element={<Order></Order>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin/>}></Route>
          <Route path="addProduct" element={<AddProduct/>}></Route>
          <Route path="manageProducts" element={<ManageProducts/>}></Route>
          {/* <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route> */}
        </Route>

        {/* login section */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {/* require */}
        <Route path='parts/:id' element={
        <RequireAuth>
          <Booking></Booking>
        </RequireAuth>
      }></Route>

      <Route path="*" element={<NotFound/>}></Route>
      </Routes>
     
      <ToastContainer />
    </div>

  );
}

export default App;
