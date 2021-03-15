import React from 'react';
import UserCard from "./components/UserCard";
import axios from 'axios';


class App extends React.Component {
  state = {
    user: [],
    followerData: []
  }

  componentDidMount() {
      axios
        .all([
        axios.get('https://api.github.com/users/casey-dietz'),     
        axios.get('https://api.github.com/users/casey-dietz/followers'),
       ])    
        .then(
          axios.spread((res1, res2) => {
            console.log(res1, res2)
            this.setState({
              user: res1.data,
              followerData: res2.data
            })
          })
        )
        .catch(err => console.log(err))
    }

  render() {
    return (
      <UserCard user={this.state.user} followerData={this.state.followerData} />
    )
  }
}

export default App;
