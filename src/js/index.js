// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const idNumberElement = document.getElementById('id-number');
const adviceElement = document.getElementById('advice');
const buttonElement = document.getElementById('button');

const generateAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    idNumberElement.textContent = `ADVICE #${data.slip.id}`;
    adviceElement.textContent = data.slip.advice;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

generateAdvice();

buttonElement.addEventListener('click', generateAdvice);
