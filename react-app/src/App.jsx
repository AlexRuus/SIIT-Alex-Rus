import './App.css'
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <div className='cards'>
        <Card path='./Images/Image1.png'/>
        <Card path='./Images/Image2.png'/>
        <Card path='./Images/Image3.png'/>
      </div>
    </div>
  );
}

export default App;