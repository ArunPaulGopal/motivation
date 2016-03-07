$(document).ready(function(){
//Make logo dissapear when clicked, first jquery test
  $('#logo').click(function(){
    $(this).fadeOut("slow");
  })
// RECOMMENDATIONS: SECTION START
  // RECOMMENDATIONS: Data
  var recommendations = [
    {
      title: "Recommendation 1",
      description: "TBD",
      img: 'images/logo.jpg',
      id: "R1"
    },
    {
      title: "Recommendation 2",
      description: "TBD",
      img: 'images/logo.jpg',
      id: "R2"
    },
    {
      title: "Recommendation 3",
      description: "TBD",
      img: 'images/logo.jpg',
      id: "R3"
    }
  ]
  // RECOMMENDATIONS: Function to build the grid
    //Get variables ready to be appended
    //ID will be in the array, use that property to set the right ID for link
/*
    function recommendBuild(object) {
      var description
      var title
      var image
      var buttonid
      var media = document.createElement('div');
      var
    }
    */
    //Append variables to the recommendations ID

// COMMENTS: SECTION START
  //COMMENTS: Box Data
  var commenthistory = [
    {
      comment: "Much Amaze.So much feeling.",
      img: 'images/doge.jpeg'
    },
    {
      comment: "Is he an artist?",
      img: 'images/troll.jpg'
    },
    {
      comment: "I always make great art!",
      img: 'images/baby.jpg'
    }
  ]
  // COMMENTS: Function to build the history
  //Indents below indicate components that are needed to build final variables.
  function commentBuilder(object) {
    //Build variables for comment history
    var image = document.createElement('img');
      image.setAttribute('src',object.img);
      image.setAttribute('class','img-circle');
    var medialeft = document.createElement('div');
      medialeft.setAttribute('class','media-left');
    var text = object.comment;
      var node = document.createTextNode(text);
        var paragraph = document.createElement('p');
    var mediabody = document.createElement('div');
      mediabody.setAttribute('class','media-body');
    var media = document.createElement('div');
      media.setAttribute('class','media');
    var history = document.getElementById('history');
    //Append comment history variables
    medialeft.appendChild(image);
    paragraph.appendChild(node);
    mediabody.appendChild(paragraph);
    media.appendChild(medialeft);
    media.appendChild(mediabody);
    history.appendChild(media);
  };
  // COMMENTS: Call the comment history builder function when user searches
  searchresults.addEventListener('click',function(e) {
      for (var i=0; i<commenthistory.length; i++){
        commentBuilder(commenthistory[i]);
      }
    });
  // COMMENTS: Function that builds new comments by the user
  submit.addEventListener('click',function(e) {
    // Create variables to be appended
    var submit = document.getElementById('submit');
    var commentbox = document.getElementById('comment');
      var commenttext = commentbox.value;
        var text = document.createTextNode(commenttext);
    var attr = document.createElement('a');
    var image = document.createElement('img');
      image.setAttribute('src','images/profile.jpg');
      image.setAttribute('class','img-circle');
    var para = document.createElement('p');
    var mediabody = document.createElement('div');
      mediabody.className = ('media-body');
    var medialeft = document.createElement('div');
      medialeft.className = ('media-left');
    var media = document.createElement('div');
      media.className = ('media');
    var history = document.getElementById('history');
    // Append variables
    para.appendChild(text);
    attr.appendChild(image);
    mediabody.appendChild(para);
    medialeft.appendChild(attr);
    media.appendChild(medialeft);
    media.appendChild(mediabody);
    history.appendChild(media);
  });
  //COMMENTS: Turn thumbs blue when clicked
    $('.thumb').click(function(){
      $(this).toggleClass("blue");
    })
// SEARCH RESULTS: SECTION START
    // SEARCH RESULTS: Data
    var videoresults = [
    {
      title: "Neil Gaiman: 2012 Commencement Speech",
      uploadinfo: "Secret Art Society  12/12/12",
      views:  "39 million",
      description: "A reminder not to forget why you do what you do.",
      likes:  871,
      img: 'images/neil-gaiman.jpg',
      videoid: "speech",
      url: "https://www.youtube.com/embed/plWexCID-kA",
      buttonid: "togglespeech"
    },
    {
      title: "Will Smith: Running and Reading",
      uploadinfo: "TheFreshPrince 1/12/15",
      views:  "42 million",
      description: "Simple truths from a beloved actor.",
      likes:  871,
      img: 'images/will-smith.jpg',
      videoid: "reading",
      url: "https://www.youtube.com/embed/plWexCID-kA",
      buttonid: "togglereading"
    },
    {
      title: "Inside the Superhman World of the Iceman",
      uploadinfo: "VICE 2/26/15",
      views:  "98 million",
      description: "Question what you believe is possible.",
      likes:  871,
      img: 'images/wim-hof.jpg',
      videoid: "iceman",
      url: "https://www.youtube.com/embed/plWexCID-kA",
      buttonid: "toggleiceman"

    },
    {
      title: "Steve Jobs: 2005 Stanford Commencement",
      uploadinfo: "APPLE INC. 2/26/14",
      views:  "95 million",
      description: "He wasn't the nicest guy, but he sure was passionate.",
      likes:  871,
      img: 'images/steve-jobs.jpg',
      videoid: "Jobs",
      url: "https://www.youtube.com/embed/plWexCID-kA",
      buttonid: "togglejobs"
    },
    {
      title: "Senecca: Health, Happiness, and Stoicism",
      uploadinfo: "Philosopher 1/1/16",
      views:  "100 million",
      description: "A refreshing look on happiness as a skill and mindset to achieve.",
      likes:  1258,
      img: 'images/senecca.jpg',
      videoid: "senecca",
      url: "https://www.youtube.com/embed/plWexCID-kA",
      buttonid: "togglesenecca"
    }
    ];
  // SEARCH RESULTS: Create hidden videos upon search

  function videoBuilder(object){
    //Create variables for video data
    var iframe = document.createElement('iframe');
      iframe.setAttribute('class','embed-responsive-item');
      iframe.setAttribute('src',object.url);
    var videoDiv = document.createElement('div');
      videoDiv.setAttribute('class','col-md-12 embed-responsive embed-responsive-16by9 hide')
      videoDiv.setAttribute('id',object.videoid);
    var videos = document.getElementById('videos');
    //Append variables and create hidden videos
    videoDiv.appendChild(iframe);
    videos.appendChild(videoDiv);
  }
  //Upon search, use function to build hidden videos
  searchresults.addEventListener('click',function(e) {
      for (var i=0; i<videoresults.length; i++){
        videoBuilder(videoresults[i]);
      }
    });
  // SEARCH RESULTS: Function for creation
  function resultBuilder(object){
    // Getting variables ready for images
    var attribute = document.createElement('a');
      attribute.setAttribute('href','#videos');
    var icontent = object.img;
      var inode = document.createTextNode(icontent);
        var image = document.createElement('img');
          image.setAttribute('src',object.img);
          image.setAttribute('class','img-rounded togglevideo');
    var medialeft = document.createElement('div');
      medialeft.className= ("media-left");
    var media = document.createElement('div')
      media.className= ('media');
    // Appending image variables
    image.appendChild(inode);
    attribute.appendChild(image)
    medialeft.appendChild(attribute);
    media.appendChild(medialeft);
    // Body: Getting variables ready for Title, Description, Username,Upload Date, Likes, and Views
    var button = document.createElement('button');
     button.setAttribute('id',object.buttonid);
    var uploadcontent = object.uploadinfo;
      var uploadtext = document.createTextNode(uploadcontent);
        var uploadinfo = document.createElement('p');
    var titlecontent = object.title;
      var titletext = document.createTextNode(titlecontent);
        var title = document.createElement('h1');
          title.className=("media-heading");
    var content = object.description;
      var text = document.createTextNode(content);
        var paragraph = document.createElement('p');
    var mediabody = document.createElement('div');
      mediabody.className= ("media-body");
    // Appending body variables
    uploadinfo.appendChild(uploadtext);
    paragraph.appendChild(text);
    paragraph.appendChild(button);
    title.appendChild(titletext);
    mediabody.appendChild(title);
    mediabody.appendChild(paragraph);
    mediabody.appendChild(uploadinfo);
    media.appendChild(mediabody);
    results.appendChild(media);
  };
  var results = document.getElementById('results');
  // SEARCH RESULTS: Execute the function upon search.
  // Also added in Video Toggling functionality here.
  searchresults.addEventListener('click',function(e) {
    var searchbox = document.getElementById('searchtext');
    var searchtext = searchbox.value;
    if (searchtext.toLowerCase() === "motivation") {
      for (var i=0; i<videoresults.length; i++){
        resultBuilder(videoresults[i]);
        // Toggle video on
        $('.togglevideo').click(function(){
          $('#speech').toggleClass("hide");
          $('#comments').toggleClass("hide");
        })
      }
    }
  });
});
