
import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageForm from './components/ImageForm/ImageForm';
import Rank from './components/Rank/Rank';
import { Component } from 'react';
import ParticlesBg from 'particles-bg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Logo />
        <Rank />
        <ImageForm />
        <ParticlesBg  type='cobweb' bg={true}/>
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
