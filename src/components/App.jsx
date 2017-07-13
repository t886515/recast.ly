class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: window.exampleVideoData,
      videoPlaying: window.exampleVideoData[0],
      options: {
        key: window.YOUTUBE_API_KEY,
        query: 'cats',
        max: 5}
    };
  }
  
  componentDidMount() {
    this.props.searchYouTube(this.state.options, (data) => this.setState({ videos: data, videoPlaying: data[0] }));
  }
  
  componentDidUpdate() {
    //this.props.searchYouTube(this.state.options, (data) => this.setState({ videos: data, videoPlaying: data[0] }));
  }
 
  
  handleOnClick(video) {
    this.setState({
      videoPlaying: video
    });
  }
  
  handleSearch(searchedItem) {
    this.props.searchYouTube(
      {
        key: window.YOUTUBE_API_KEY,
        query: searchedItem,
        max: 5 
      }, (data) => this.setState({ videos: data, videoPlaying: data[0] }));
    this.setState({
      options: {
        key: window.YOUTUBE_API_KEY,
        query: searchedItem,
        max: 5 
      }
    });
  }

  render() {
    return (
  <div>
    <Nav searchMe={this.handleSearch.bind(this)}/>
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


ReactDOM.render(<App searchYouTube={window.searchYouTube}/>, document.getElementById('app'));