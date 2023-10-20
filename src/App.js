// import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPComponent from './IPComponent';

function App() {
  return (

    <div className="app">
      <Banner />
      {/* The rest of your application content */}

      <Exhibit heading="IP Addresses">
        {/* Place your components or content here */}
        <IPComponent ipAddressType="ipv4" />
        <IPComponent ipAddressType="ipv6" />
      </Exhibit>
      {/* Add more Exhibit components or other content as needed */}
    </div>
  );
}

export default App;
