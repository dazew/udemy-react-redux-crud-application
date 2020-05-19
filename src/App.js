import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name:"Taro",age:10},
    {name:"Hanako",age:30},
    {name:"Momo",age:3}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
