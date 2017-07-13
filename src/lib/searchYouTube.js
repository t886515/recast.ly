var searchYouTube = (options, callback) => {
  // $.get('https://www.googleapis.com/youtube/v3/search', {
  //   q: options.query,
  //   maxResults: options.max,
  //   key: options.key},
  //       callback
  // );
  
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      type: 'video'
    },
    success: (data) => { callback(data.items); }
  });
};

window.searchYouTube = searchYouTube;
