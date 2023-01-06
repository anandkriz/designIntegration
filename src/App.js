import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import MainView from './Components/pages/MainView';
import Dashboard from './Components/pages/Dashboard2';
import Widgets from './Components/pages/Widgets';
import ChartJs from './Components/pages/components/ChartJs';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (


    <div class="wrapper">

      <BrowserRouter>
        <Header />
        <SideBar />
        <Routes>

          <Route path="/" element={<MainView />} />
          <Route path='dashboard-v2' element={<Dashboard />} />
          <Route path='widgets' element={<Widgets />} />
          <Route path='chartjs' element={<ChartJs />} />
        </Routes>
        <Footer />
        {/* <MainView /> */}
      </BrowserRouter>

    </div>


  );
}

export default App;
