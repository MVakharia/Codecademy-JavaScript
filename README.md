# Codecademy-JavaScript
Code written while studying JavaScript with Codecademy.

![The JavaScript logo.](https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg)

Within an object declaration, place an underscore \_ before the name of a property that must remain constant (should not be altered).

The difference between methods and functions

*   A method is a property with a function as its value.

Scoping rules - 'let' vs 'var'

![A screenshot from StackOverflow.](https://i.ibb.co/jvKWfS2D/scoping-rules-let-vs-var.png)

typeof

The difference between === and ==

Loose equality with double-equals (==)

*   \== is loose equality.
*   When comparing, it performs a type conversion.
*   A comparison between the number 3 and the string "3" will return 'true' if loose equality is used.

Strict equality with triple-equals (===)

*   \=== is strict equality.
*   When comparing, it performs no type conversions.
*   Comparing the number 3 to the string '3' will return false if strict equality is used.

Truthy and falsy

*   A truthy value is a value that evaluates to 'true' in the context of the Boolean datatype.
*   All values are truthy unless they are explicitly defined as 'false'.
*   [Falsy values in JS](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

![A screenshot from StackOverflow.](https://i.ibb.co/jvKWfS2D/scoping-rules-let-vs-var.png)

Short-circuiting

Function expressions

arrow function syntax

array.push

array.pop

The array methods '.join(), .slice(), .splice(), .shift(), .unshift(), and .concat().

Destructive array methods

Concise body arrow functions

Accessing elements in nested arrays

array.join()

for... of loop

Objects

*   Objects are mutable, meaning that you can add new properties to an object after creating it.
    *   Add a new property to an object by using the dot operator, writing the name of the new property, (and assigning it a value?)

![A screenshot from Codecademy.](https://i.ibb.co/Zp4PPKH0/adding-a-new-property-to-an-object.png)

*   Use single quotation marks for property names with multiple words separated by spaces.

![A screenshot from Codecademy.](https://i.ibb.co/x8XNDCbm/object-with-spaces-in-property-names.png)

*   When accessing properties named with quotation marks through their containing object, use square brackets to access the property.

![A screenshot from Codecademy.](https://i.ibb.co/xttf6VMT/object-with-property-name-in-square-brackets.png)

Creating a method within an object

*   To create a method within an object, omit the 'function' keyword.
*   Multiple methods in an object should be separated with commas.

Object Accessors (getters and setters)

*   [JavaScript Object Accessors @ w3schools](https://www.w3schools.com/js/js_object_accessors.asp)

### Mocha

Bash command: '$ npm install mocha -D'

*   'npm install' tells npm to install a package from the internet, plus any other packages that the package depends on.
*   'mocha' is the package we wish to download.

  

*   '-D' signifies that this is a development dependency.
*   Development dependencies will show up under the 'devDependencies' section in **package.json**.
*   Development dependency packages are only included in development mode.
*   They are not included in the production bundle.

### Assert

assert.equal and assert.strictEqual

*   assert.equal performs a '==' comparison.
*   assert.strictEqual performs a '===' comparison.
*   **As of July 2021, the node.js API recommends always using assert.strictEqual instead of assert.equal.**

assert.deepStrictEqual

*   If two objects are created from the same class with the exact same property values, they're still not considered equal when using loose or strict equality.
*   If we need to compare the values within two objects, we can use assert.deepStrictEqual().
*   assert.deepStrictEqual compares the values of one object with the values of the other, rather than comparing the two objects directly.
*   We can also use deepStrictEqual to compare arrays\[\].

Requests and Fetch API

*   Study this topic on W3Schools and write your own code.

### Coding exercises and projects

* Complete 'Workaround Explorer' https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-javascript-syntax-part-iii/modules/wdcp-22-learn-javascript-syntax-modules/projects/es6-modules-workaround off-platform, then refactor it, annotate it, and extend it.
* 