//Write your pseduo code first! 

//only on click
document.querySelector('#submit').addEventListener('click', run)

function run() {
    console.log('It works!')
    //Get value from #fahrenheit input
    let temp = document.querySelector('#fahrenheit').value

    //Convert the fahrenheit value into celsius
    temp = temp * 9/5 + 32

    //Display formula value in h2 #celsius
    document.querySelector('#celsius').innerText = temp
}
