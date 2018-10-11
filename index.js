/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "UP879064";
  // e.g. return "UP654321";
}

function fn() {
  return "Finlay";
}

function sn() {
  return "Plant";
}

// add your functions here

function replaceText(element, string) {
  element.textContent = string;
  return element;
}

function addTextTo(addto, newText) {
  window.addto.textContent = addto.textContent + newText;
  return addto, newText;
}

function moreBears() {
  window.animals.src = "http://placebear.com/400/200";
  window.animals.alt = "A bear.";
  window.animals.title = "A BEAR!";
}

function setId(ele, str){
  ele.id = str;
  return ele;
}

function setClass(ele, str){
    ele.className = str;
  return ele;
}

function addAClass(ele, str){
      ele.classList.add(str);
  return ele;
}

function removeAClass(ele, str){
    ele.classList.remove(str);
  return ele;
}
