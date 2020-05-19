import React from 'react';

const App = () => {
  const profiles = [
    {name:"Taro",age:10},
    {name:"Hanako",age:30},
    {name:"Baby"}
  ];
  return (
    <div>H1 function conponent!
      {
        profiles.map((profile,index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      

    </div>
    
    )
}

const User = (props) => {
  return <div>Hi! I am {props.name},and {props.age}yers old.</div>
}

User.defaultProps = {
  age:1
}

export default App;
