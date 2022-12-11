function buttonalert() {
    alert("NGERIII");
  }
  
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  setInterval(() => {
    data = {
      temperature: randomNumber(50,100)
    }
    console.log(data)
    document.getElementById("temp").innerHTML = data.temperature
  }, 1000 )