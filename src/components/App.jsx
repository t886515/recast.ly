class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: window.exampleVideoData,
      videoPlaying: window.exampleVideoData[0]
    };
  }
  
  handleOnClick(video) {
    this.setState({
      videoPlaying: video
    });
  }

  render() {
    return (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={this.state.videoPlaying}/>
    </div>
    <div className="col-md-5">
      <VideoList videoPlaying={this.handleOnClick.bind(this)} videos={this.state.videos}/>
    </div>
  </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


ReactDOM.render(<App />, document.getElementById('app'));