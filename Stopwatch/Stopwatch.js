var play = document.getElementById('play');
var pause = document.getElementById("pause");
var stop = document.getElementById('stop');
var input = document.getElementById("data");

var temp = input.value;
var interval;
play.addEventListener("click",function(event)
                              {
                              interval=setInterval(execute,1000)
                              function execute()
                              {
                                if(input.value==0)
                                {
                                  alert("Your Time's Up");
                                  clearInterval(interval);
                                }
                                else
                                {
                                  input.value = input.value-1;
                                }
                              }
                              pause.addEventListener("click",function(event)
                                                            {
                                                    clearInterval(interval);
                                                    alert("STOP WATCH PAUSED");
                                                    alert("Click On Play button to Resume");
                              });
                              stop.addEventListener("click",function(event)
                                                            {
                                                              alert("STOP WATCH RESET");
                                                              input.value=temp;
                                                              clearInterval(interval);
                            });
});
