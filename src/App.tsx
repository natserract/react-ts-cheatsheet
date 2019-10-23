import React from 'react';
import './App.css';
import RTCEx1 from './components/rtc-example-1'


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">

        {/* Ex1 */}
        <RTCEx1
          typeBoolean={ true }
          typeString="Alfin"
          typeNumber={27}
          typeArrayString={['Designer', 'Developer', 'Reader', 'etc']}
          typeArrayNumber={[0, 3, 5, 8]}
          typeArrayFixed={['Fantasktic', 1, 2019, 'Inc']}
          typeAny="Hey!"
          typeObject={{ color: '#fff', opacity: .4 }}
          typeStringExt="VSCode"
          typeStringExtV="TypeScript"
          typeUnion="Black"
          typeVoid={() => console.log("Hello! this works")}
        />



      </header>
    </div>
  );
}

export default App;
