import React from 'react'
import Display from './ListDisplay';

const Authorize = () => {
    const users= [
      {
          id: 1,
          name: 'Sirju',
          isAuthorized: true,
      
  },
  {
      id: 1,
      name: 'Bikram',
      isAuthorized: false,
  },
{
  id: 1,
  name: 'Sangit',
  isAuthorized: false,
},
{
  id: 1,
  name: 'Sabita',
  isAuthorized: true,
},

  ];
  return (
    <>
        <ul>
            {users.map((user) => (
            <Display
            names={users.name} 
            key={users.id} 
            authorized={users.isAuthorized}/>))}
        </ul>
    </>
  )
}

export default Authorize;