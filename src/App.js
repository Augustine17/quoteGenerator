import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Quotes } from './components/quotes/Quotes';

import data from './json/quotes.json'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      {
        data.map((dt,index)=>{
          return <Quotes quote={dt.quote} author={dt.author} key={index}/>
        })
      }
      <Footer />
    </>
  );
}

export default App;