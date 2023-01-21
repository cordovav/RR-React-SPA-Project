import TopBar from './Components/TopBar';
import './App.css';
import BeverageCard from './Components/BeverageCard';
import ContactForm from './Components/ContactForm';
import OrderForm from './Components/OrderForm'

function App() {
  return (
    <div className="App">
      <TopBar />
      <BeverageCard />
      <br/>
      <OrderForm />
      <ContactForm />
    </div>
  );
}

export default App;
