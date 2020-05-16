const output = document.getElementById('output');
const btnSendRandom = document.getElementById('send-random');

const getRandomNumber = () => {
    return Math.round(Math.random() * 1000);
};

// send message from iframe ===> parent
btnSendRandom.addEventListener('click', () => {
   console.log('sending random number');
   const randomNumber = '' + getRandomNumber();
    output.innerText = randomNumber;
    window.top.postMessage(randomNumber, '*');
});

// receive messages from parent ===> iframe
window.addEventListener('message', (event) => {
    console.log('plugin received message', event);
    if (event.origin === 'localhost:3000') {
        output.innerText = event.data;
        console.log('message received', event);
    }
});
