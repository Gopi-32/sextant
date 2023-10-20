// import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (

    <div className="app">
      <Banner />
      {/* The rest of your application content */}

      <Exhibit heading="Sample Exhibit">
        {/* Place your components or content here */}
        <p>This is some content within the exhibit.</p>
        <button>Button</button>
      </Exhibit>
      {/* Add more Exhibit components or other content as needed */}
    </div>
  );
}

export default App;
