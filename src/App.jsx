import  { useState } from 'react';
import axios from 'axios';
import './App.css';


const RoleSelector = () => {
  const [playerName, setPlayerName] = useState('');
  const [TagLine, setTagLine] = useState('');
  const [selectedRole, setSelectedRole] = useState('');


  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleTagLineChange = (e) => {
    setTagLine(e.target.value);
  }

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };



  return (
    <div>
      <label>
        Game Name:
        <input type="text" value={playerName} onChange={handleNameChange} />
      </label>
      <label>
        TagLine:
        <input type="text" value={TagLine} onChange={handleTagLineChange} />
      </label>
      <label>
        Rol:
        <select value={selectedRole} onChange={handleRoleChange}>
          <option value="">Selecciona un rol</option>
          <option value="Top">Top</option>
          <option value="Jungle">Jungle</option>
          <option value="Mid">Mid</option>
          <option value="Bot">Bot</option>
          <option value="Support">Support</option>
        </select>
      </label>

    </div>
  );
};

const App = () => {
const [selectedPlatform, setSelectedPlatform] = useState('');
const API_KEY = "RGAPI-a2212b03-7b7c-4427-bfdc-2c00c3a4c301";
  
  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };

  const searchPlayer = (e) => {
    console.log("el pepe" + e);
  };

  return (
    <div>
        <h1 className="text-red-500 font-bold underline">
        Wellcome to Meta Team Builder!
    </h1>

<div>
        <label>
          Selecciona una plataforma:
          <select value={selectedPlatform} onChange={handlePlatformChange}>
            <option value="">Selecciona una plataforma</option>
            <option value="br1">BR1</option>
            <option value="eun1">EUN1</option>
            <option value="euw1">EUW1</option>
            <option value="jp1">JP1</option>
            <option value="kr">KR</option>
            <option value="la1">LA1</option>
            <option value="la2">LA2</option>
            <option value="na1">NA1</option>
            <option value="oc1">OC1</option>
            <option value="tr1">TR1</option>
            <option value="ru">RU</option>
            <option value="ph2">PH2</option>
            <option value="sg2">SG2</option>
            <option value="th2">TH2</option>
            <option value="tw2">TW2</option>
            <option value="vn2">VN2</option>
          </select>
        </label>
        {selectedPlatform && <p>Plataforma seleccionada: {selectedPlatform}</p>}
      </div>





      {[...Array(5)].map((_, index) => (
        <RoleSelector key={index} />
      ))}

      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={e => searchPlayer(e)}
      >

        GENERATE TEAM
      </button>

    </div>
  );
};

export default App;
