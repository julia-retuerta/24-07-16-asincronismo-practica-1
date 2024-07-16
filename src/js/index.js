// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const buttonElement = document.getElementById('button');

const generateAdvice = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

buttonElement.addEventListener('click', () => generateAdvice('https://api.adviceslip.com/advice'));
