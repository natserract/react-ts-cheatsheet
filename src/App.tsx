import React from 'react';
import './App.css';
import RTCEx1 from './components/rtc-example-1'
import RTCEx2 from './components/rtc-example-2'
import RTCEx3 from './components/rtc-example-3'


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: 50 }}>

        {/* Ex1 */}
        <RTCEx1
          typeBoolean={true}
          typeString="Alfin"
          typeNumber={27}
          typeArrayString={['Designer', 'Developer', 'Learner', 'etc']}
          typeArrayNumber={[0, 3, 5, 8]}
          typeArrayFixed={['Fantasktic', 1, 2019, 'Inc']}
          typeAny="Hey!"
          typeCSSProp={{ color: '#fff', opacity: .4 }}
          typeStringExt="VSCode"
          typeStringExtV="TypeScript"
          typeUnion="Black"
          typeVoid={() => console.log("Hello! this works")}
        />

        <RTCEx2
          firstName="Alfin"
          data={['Developer', 2019]}
          typeMouseEvent={() => console.log("Hello! Thank you for click")}
          typeFocusEvent={() => console.log("Focused")}
        />

        <RTCEx3/>
      </header>
    </div>
  );
}

export default App;
