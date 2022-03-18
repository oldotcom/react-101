import React from "react";
import Greet from "./components/Greet";

import List from "./components/List";
import Contact from "./components/Contact";

export default class App extends React.Component {
  state = {
    name: "Ivan",
    page: "list"  // 'list' 'contact'
  }



  changeName = () => {
    console.log(this);

    this.setState({
      name: "Oleksii"
    })
  }


  render() {
    const {name, page}=this.state;

    return <div>
      <Greet name={name} age={30}/>

      <button onClick={this.changeName}>Change Name</button>
      <br/>

      <a
        onClick={() => this.setState({page:"list"})}
        href="#">
        Go to List
      </a>       |

      <a
        onClick={() => this.setState({page:"contact"})}
        href="#">
        Go to Contact
      </a>

      <br/>

      {(page === 'list') ? <List/> : ''   }
      {(page === 'contact') ? <Contact/> : ''   }


    </div>
  }
}
