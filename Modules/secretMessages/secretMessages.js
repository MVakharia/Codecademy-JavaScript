import { toggleHiddenElement as toggleHidden } from "../domFunctions";

const buttonElementMessage = document.getElementById('secret-button');

const pElement = document.getElementById('secret-p');

buttonElementMessage.addEventListener('click', () => {
   toggleHidden(pElement);
});