// App.js
import React, { useState} from 'react';
import './App.css';
import RestTab from './RestTab';
import MetadataTab from './MetadataTab';
import { DBProvider } from './DBContext';
import Header from './Header';

function App() {
  const [activeTab, setActiveTab] = useState('rest');
  const [showPopup, setShowPopup] = useState(false);

  return (
    <DBProvider>
      <div className="App">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} showPopup={showPopup} setShowPopup={setShowPopup}/>
        
        <div className="tab-content">
          {activeTab === 'rest' && <RestTab showPopup={showPopup} />}
          {activeTab === 'metadata' && <MetadataTab />}
        </div>
      </div>
    </DBProvider>
  );
}

export default App;
