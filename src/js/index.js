// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const idNumberElement = document.getElementById('id-number');
const adviceElement = document.getElementById('advice');
const buttonElement = document.getElementById('button');

const printAdvice = (id, advice) => {
  idNumberElement.textContent = `ADVICE #${id}`;
  adviceElement.textContent = advice;
};

const generateAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const id = data.slip.id;
    const advice = data.slip.advice;
    printAdvice(id, advice);
  } catch (error) {
    console.log(error);
  }
};

generateAdvice();

buttonElement.addEventListener('click', generateAdvice);
