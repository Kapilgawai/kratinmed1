// JavaScript code

// Function to toggle the navigation menu on small screens
function toggleMenu() {
    var nav = document.querySelector('header nav');
    nav.classList.toggle('show');
  }
  
  // Event listener for the menu toggle button
  var menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', toggleMenu);
  
  // Function to update the steps counter based on the screen size
  function updateStepsCounter() {
    var steps = document.getElementById('steps');
    var stepsValue = parseInt(steps.innerText);
    
    if (window.innerWidth < 768) {
      steps.innerText = stepsValue.toLocaleString();
    } else {
      steps.innerText = stepsValue + ' steps';
    }
  }
  
  // Event listener for the window resize event
  window.addEventListener('resize', updateStepsCounter);
  
  // Call the function on page load
  updateStepsCounter();
  
  // Function to play the exercise video
  function playVideo(videoElement) {
    videoElement.play();
  }
  
  // Function to pause the exercise video
  function pauseVideo(videoElement) {
    videoElement.pause();
  }
  
  // Get all exercise videos
  var exerciseVideos = document.querySelectorAll('#exercise-fitness video');
  
  // Add event listeners to play/pause the videos
  exerciseVideos.forEach(function(video) {
    var videoPlayButton = video.nextElementSibling;
    videoPlayButton.addEventListener('click', function() {
      playVideo(video);
    });
  
    video.addEventListener('click', function() {
      if (video.paused) {
        playVideo(video);
      } else {
        pauseVideo(video);
      }
    });
  });
  
  // Function to display exercise instructions
  function displayInstructions(exerciseName) {
    var instructions = document.getElementById('instructions');
    var exerciseInstructions = {
      'strength': 'Include a description and instructions for the strength training exercise routine.',
      'flexibility': 'Include a description and instructions for the flexibility exercises routine.',
      'balance': 'Include a description and instructions for the balance workouts routine.',
      'cardio': 'Include a description and instructions for the cardiovascular exercises routine.'
    };
  
    instructions.textContent = exerciseInstructions[exerciseName];
  }
  
  // Get all exercise buttons
  var exerciseButtons = document.querySelectorAll('#exercise-fitness button');
  
  // Add event listeners to the exercise buttons
  exerciseButtons.forEach(function(button) {
    var exerciseName = button.getAttribute('data-exercise');
    
    button.addEventListener('click', function() {
      displayInstructions(exerciseName);
    });
  });
  