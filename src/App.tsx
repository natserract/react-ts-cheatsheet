import React from 'react';
import './App.css';
import RTCBasic from './components/rtc-example-1'



const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">

        {/* Basic */}
        <RTCBasic
          text="asdas"
          age={19}
          list={['Alfn', 'Surya']}
          listAge={[2, 3, 4]}
          listClass={['10', 2, 10, 'A']}
          role="Developer"
          handleClick={() => console.log("Void")}
          color="Black"
          inlineStyle={{ color:'red', fontSize: 20 }}
          active={true}
        />


      </header>
    </div>
  );
}

export default App;
