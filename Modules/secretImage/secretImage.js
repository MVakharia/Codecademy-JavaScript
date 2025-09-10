import { toggleHiddenElement as toggleHidden } from "../domFunctions";

import resources from "../domFunctions";

const buttonElementImage = document.getElementById('secret-button');

const pElement = document.getElementById('secret-p');

buttonElementImage.addEventListener('click', () => {
   toggleHidden(pElement);
});