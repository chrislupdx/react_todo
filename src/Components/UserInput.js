import React from 'react';

function userinput(props){
  return(
  <form>
  <input
    onClick = {props.click}
    type="text"
    value=""/>
  </form>
)
}

export default userinput;
