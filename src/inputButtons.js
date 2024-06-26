import React, { useReducer } from 'react';

const InputWithButtons = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const inputStyle = {
    padding: '10px',
    margin: '0 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '200px'
  };


  const initialState = '';
  function reducer(state,action){
    switch(action.type){
        case 'inc' : return state + 1;
        case 'dec' : return state -1;
        default: return state

    }

  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => dispatch({type:'dec'})}>-</button>
      <input type="text" style={inputStyle} value={state} />
      <button style={buttonStyle} onClick={() => dispatch({type:'inc'})}>+</button>
    </div>
  );
}

export default InputWithButtons;