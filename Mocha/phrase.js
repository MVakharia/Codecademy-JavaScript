const Phrase = {

    initials(inputName) {

        const initials = [];

        //Divides 'inputName' into an array of strings and returns the array.
        const words = inputName.split(" ");

        //Goes through the array of strings.
        words.forEach((word) => {

            //Pushes the first character of each string to the array 'initials'.
            initials.push(word.charAt(0));
        });

        //Returns the initials as a single string.
        return initials.join("");
    }
}