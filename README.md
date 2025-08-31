1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
getElementById -> selectes a single elements based on its unique id attribute.
getElementsByClassName -> selects all elements that possess a specific class name.
querySelector -> Selects the first element that matches a given CSS selector.
querySelectorAll -> selects all elements that match a given CSS selector.


2. How do you create and insert a new element into the DOM?
ans:
const newDiv = document.createElement("div");
newDiv.innerText = "New Div";
const parentDiv = document.getElementById("parent-div");
parentDiv.appendChild(newDiv);


3. What is Event Bubbling and how does it work?
ans:
If an event handler is set for the element, the event handler is triggered.


4. What is Event Delegation in JavaScript? Why is it useful?
ans:
Event Delegation in javascript is a technique where instead of adding event listeners to multiple child elements, you add a single event listener to their parent element, add use event bubbling to handle events for the children.


5. What is the difference between preventDefault() and stopPropagation() methods?
ans:
The preventDefault() and stopPropagation() methods in js event handling serve distict purposes related to event behavior within the DOM.
