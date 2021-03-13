import React from 'react';
import UserCard from "./components/UserCard"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: []
    }

  }
  render() {
    return (
      <UserCard />
    )
  }
}

export default App;
