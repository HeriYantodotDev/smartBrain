import { Component} from 'react';
// import Clarifai from 'clarifai';
import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageForm from './components/ImageForm/ImageForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

window.process = {}



// const app = new Clarifai.App({
//   apiKey: '083f50d3cb024a0a90901af8bb7d515b'
//  });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input : '',
      imageUrl: '',
      box : '',
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

  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  loadUser = (user) => {
    this.setState({ user : {
      id : user.id,
      name : user.name,
      email : user.email,
      entries : user.entries,
      joined : user.entries 
    }});
}

  resetImageUrl = () => {
    this.setState({imageUrl : ''});
  }

  onChangeRoute = (route) => {
    if (route === 'home') {
      this.setState({isSignIn: true})
    } else {
      this.setState({isSignIn : false})
    }
    this.setState({route : route})
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

    // // //This is the new API from the website

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": this.state.input
                  }
              }
          }
      ]
    });
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Key b928ec9e95df4ca78e8b700704dcf543`
        },
        body: raw
    };
    
    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
    
    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
        .then(response => response.json())
        .then(result => this.displayFaceBox(this.calculateFaceBox(result)))
        .catch(error => console.log('error', error));
      

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
            <SignIn onChangeRoute={this.onChangeRoute} loadUser={this.loadUser} /> :
            <Register onChangeRoute={this.onChangeRoute} loadUser={this.loadUser} />
        )
        }

      </div>
    );
  }
}

export default App;

//dependencies:      "@svgr/webpack": "^6.5.1",   "overrides": {
  //  "@svgr/webpack": "$@svgr/webpack"