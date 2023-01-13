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
import Flot from './Components/pages/components/Flot';
import Inline from './Components/pages/components/Inline';
import Uplot from './Components/pages/components/Uplot';
import General from './Components/pages/components/UiElements/General';
import Buttons from './Components/pages/components/UiElements/Buttons';
import Sliders from './Components/pages/components/UiElements/Sliders';
import Modal from './Components/pages/components/UiElements/Modal';
import Ribbons from './Components/pages/components/UiElements/Ribbons';
import AdvancedForm from './Components/pages/components/forms/AdvancedForm';
import SimpleTable from './Components/pages/components/Tables/SimpleTable';
import DataTable from './Components/pages/components/Tables/DataTable';
import Validation from './Components/pages/components/forms/Validation';
import Gallery from './Components/pages/components/Gallery';


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
          <Route path='flot' element={<Flot />} />
          <Route path='inline' element={<Inline />} />
          <Route path='uplot' element={<Uplot />} />
          <Route path='general' element={<General />} />
          <Route path='buttons' element={<Buttons />} />
          <Route path='Sliders' element={<Sliders />} />
          <Route path='modals-&-alerts' element={<Modal />} />
          <Route path='ribbons' element={<Ribbons />} />
          <Route path='advanced_form' element={<AdvancedForm />} />
          <Route path='simple-table' element={<SimpleTable />} />
          <Route path='data-table' element={<DataTable />} />
          <Route path='validation' element={<Validation />} />
          <Route path='gallery' element={<Gallery />} />

        </Routes>
        <Footer />
        {/* <MainView /> */}
      </BrowserRouter>

    </div>


  );
}

export default App;
