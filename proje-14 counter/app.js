var counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
    counter.innerHTML = "0";

    var updatecounters = () =>{
        var target = Number(counter.getAttribute("data-target"));

        var c =+ counter.innerHTML;
        var increment = target / 300;
        Math.ceil(increment);
        
        if (c<target) {
            counter.innerHTML = `${Math.ceil(c + increment)}`
            setTimeout(updatecounters, 1);
        }else{
            counter.innerHTML = target;
        }
    } 
    updatecounters()
})

/*
var target = Number(counter.getAttribute("data-target"));
var increment = target / 300;
var c = 0;

var interval = setInterval(() => {
  if (c < target) {
    c += increment;
    counter.innerHTML = Math.ceil(c);
  } else {
    counter.innerHTML = target;
    clearInterval(interval); 
  }
}, 1);

*/