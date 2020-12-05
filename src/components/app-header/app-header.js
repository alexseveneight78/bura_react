//import React from 'react';

const AppHeader = ({doneCount, remainingTasks}) => {

    return (
      <div className='app-header'>
        {doneCount} is done, {remainingTasks} to do.
      </div>
    )
  }

  export default AppHeader