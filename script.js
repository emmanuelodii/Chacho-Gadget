
  // Set the countdown duration (in hours)
  var countdDownDuration = 37.55;
    
  // Get the starting timestamp
  var startingTimeStamp = Date.now();

  // calculate the ending timestamp
  var endingTimeStamp = startingTimeStamp + (countdDownDuration * 60 * 60 * 1000)


  const Timer = () => {
    // Get curent TimeStamp
    var currentTimeStamp = Date.now();

    // calculate time left
    var timeRemaining = endingTimeStamp - currentTimeStamp;
      if (timeRemaining <= 0) {
        startingTimeStamp = Date.now();
        endingTimeStamp = startingTimeStamp + (countdDownDuration * 60 * 60 * 1000)
        timeRemaining = endingTimeStamp - currentTimeStamp;
      }

  // Time calculations for days, hours, minutes and seconds
  var d = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var h = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    

       //Get elements by class (countdown[0]);
        let days = document.querySelector(".days");
        let hours = document.querySelector(".hours");
        let minutes = document.querySelector(".minutes");
        let seconds = document.querySelector(".seconds");
       

        // Get elements by id (countdown[1])
        let day2 = document.querySelector("#days");
        let hour2 = document.querySelector("#hours");
        let minute2 = document.querySelector("#minutes");
        let second2 = document.querySelector("#seconds")

        let btn1 = document.querySelector(".count-down-detector");
        let btn2 = document.querySelector("#second-countdown");

  //Output the result in their various id(s) and class(es)
    // For class(es) ;
    days.innerText = d
    hours.innerHTML = h;
    minutes.innerText = m;
    seconds.innerText = s;
   
    //for id(s)
    day2.innerText = d
    hour2.innerHTML = h;
    minute2.innerText = m;
    second2.innerText = s;

  // If the count down is over, write some text 
    }
    setInterval(Timer, 1000)
  
  let yearNow = new Date().getFullYear(),
  year = document.querySelector(".year")
  year.innerHTML = yearNow
