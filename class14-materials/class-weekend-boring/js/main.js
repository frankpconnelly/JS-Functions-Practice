//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();
  // const insertClass = document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS!";
  // const insertWeekend = document.querySelector('#placeToSee').innerText = "It's the weekend..";
  // const insertBoring = document.querySelector('#placeToSee').innerText = "Boooooriiiiing!";
// need to figure out how to make this work. ^


  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS!";
  }else if(day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerText = "It's the weekend..";
  }else if(day === "wednesday"){
    document.querySelector('#placeToSee').innerText = "HumpDAAAYY!";
  }else{
    document.querySelector('#placeToSee').innerText = "Boooooriiiiing!";
  }

}


