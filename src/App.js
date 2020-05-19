import React from 'react';

/*
class App extends Component {

  render (){
    return <h1>Hello World!</h1>
  };

}
*/
function App(){
//  const greeting ="H1!??"
//  const dom = <h1 className="foo">{greeting}</h1>
  return(
    <React.Fragment>
      <lable htmlFor="bar">bar</lable>
      <input type="text" onChange={()=>{console.log("I am clicked.")}} />
    </React.Fragment>
  );
}

export default App;
