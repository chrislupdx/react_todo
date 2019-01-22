import React from 'react';

function userinput(props){
  return(
  <form>
  <input
    // onClick = {props.click}
    type="text"
    value={props.name}
    onChange={props.changed}/>
  </form>
)
}

export default userinput;
