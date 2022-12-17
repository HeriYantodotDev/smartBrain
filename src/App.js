import { Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageForm from './components/ImageForm/ImageForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const initialState = {
  input : '',
  imageUrl: '',
  box : {},
  route : 'signin',
  isSignIn : false,
  user : {
    id : '',
    name : '',
    email : '',
    entries : 0,
    joined : ''
  }
}

const backEnd = "https://spring-firefly-6976.fly.dev";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input : '',
      imageUrl: '',
      box : {},
      route : 'signin',
      isSignIn : false,
      user : {
        id : '',
        name : '',
        email : '',
        entries : 0,
        joined : ''
      }
    }
  }

  loadUser = (user) => {
    this.setState({ user : {
      id : user.id,
      name : user.name,
      email : user.email,
      entries : user.entries,
      joined : user.joined 
    }});
}

  resetImageUrl = () => {
    this.setState({imageUrl : ''});
    this.setState({box:''});
  }

  onChangeRoute = (route) => {
    if (route === 'home') {
      this.setState({isSignIn: true})
      this.setState({route : route})
    } else if (route === 'signin') {
      this.setState(initialState);
    } else {
      this.setState({route : route})
    }

  }
  
  calculateFaceBox = (data) => {
    const faceBoxData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imageData');
    const width = Number(image.width);
    const height = Number(image.height);
    

    return {
      left : faceBoxData.left_col * width,
      top: faceBoxData.top_row * height,
      right: width - (faceBoxData.right_col * width) ,
      bottom: height - (faceBoxData.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})    
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = (event) => {
    // event.preventDefault();
    this.setState({imageUrl: this.state.input});
    this.setState({box: ''});


    fetch(`${backEnd}/facereg`, {
              method : 'post',
              headers : {'Content-Type' : 'application/json'},
              body : JSON.stringify({
                  input : this.state.input
              })
            })
        .then(response => response.json())
        .then(result => {
          if (result.status.code === 10020) {
            alert('Image URL isn\'t value! Try a valid link');
            
            event.target.parentElement.parentElement[0].value='';
            this.setState({input: '', imageUrl: ''})
            return;
          }

          if (result) {
            fetch(`${backEnd}/image`, {
              method : 'put',
              headers : {'Content-Type' : 'application/json'},
              body : JSON.stringify({
                  id : this.state.user.id
              })
            })
              .then(data => data.json())
              .then(count => this.setState(Object.assign(this.state.user,{entries : count})) )
          }
          this.displayFaceBox(this.calculateFaceBox(result)) 
        })
        .catch(error => console.log('[smart brain]error message:', error));
      

    //This is from the course 

    // app.models.predict('53e1df302c079b3db8a0a36033ed2d15',this.state.input).then(
    //   function(response) {
    //     console.log(response);
    //     // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    //   },
    //   function (err) {
    //     console.log('Error',err)
    //   }
    // );
  }

  
  render() {
    const {imageUrl, box,  route, isSignIn} = this.state
    return (
      <div className=''>
          <ParticlesBg type='cobweb' bg={true}/>
          <Nav onChangeRoute={this.onChangeRoute} resetImageUrl={this.resetImageUrl} isSignIn={isSignIn} />
        {route === 'home' ? 
          <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageForm onInputChange= {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
            <FaceRecognition imageUrl={imageUrl} box={box}/>
          </div> :
          (route === 'signin'?
            <SignIn onChangeRoute={this.onChangeRoute} loadUser={this.loadUser} backEnd={backEnd} /> :
            <Register onChangeRoute={this.onChangeRoute} loadUser={this.loadUser} backEnd={backEnd} />
        )
        }

      </div>
    );
  }
}

export default App;

//dependencies:      "@svgr/webpack": "^6.5.1",   "overrides": {
  //  "@svgr/webpack": "$@svgr/webpack"