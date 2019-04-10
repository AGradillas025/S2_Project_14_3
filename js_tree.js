"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Anthony S,A Gradillas
   Date:   4.5.19

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/

// Keeps track of the total count of nodes, element nodes, text nodes, and white-space nodes
var nodeCount = 0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0;

// Runs the makeTree function when the page loads
window.onload = makeTree;

// The makeTree function will be used to create the node tree for the source article and places the node tree within the HTML document and displays the node counts from the document
function makeTree() {
      var treeBox = document.createElement("aside");
      treeBox.id = "treeBox";
      treeBox.innerHTML = "<h1>Node Tree</h1>";

      var mainSection = document.getElementById("main");
      mainSection.appendChild(treeBox);

      var nodeList = document.createElement("ol");
      treeBox.appendChild(nodeList);

      var sourceArticle = document.querySelector("#main article");
      makeBranches(sourceArticle, nodeList);

      document.getElementById("totalNodes").textContent = nodeCount;
      document.getElementById("elemNodes").textContent = elemCount;
      document.getElementById("textNodes").textContent = textCount;
      document.getElementById("wsNodes").textContent = wsCount;
}

// The function makeBranches will append node branches to the node tree
function makeBranches(treeNode, nestedList) {
      nodeCount++;
      var liElem = document.createElement("li");
      liElem.innerHTML = "+--";
      var spanElem = document.createElement("span");
      liElem.appendChild(spanElem);
      nestedList.appendChild(liElem);

      if (treeNode.nodeType === 1) {
            // If the treeNode represents an element it will increase the elemCount variable by 1
            elemCount++;
            spanElem.setAttribute("class", "elementNode");
            // The textContent will append the text of the element tag
            document.textContent = "<" + treeNode.nodeName + ">";
      } else if (treeNode.nodeType === 3) {
            // If else the treeNode represents an element it will increase the textCount variable by 1
            textCount++;
            var textString = treeNode.nodeValue;

            if (isWhiteSpaceNode(textString)) {
                  // If the isWhiteSpaceNode with a parameter of textstring is true then the wsCount variable will increase by 1
                  wsCount++;
                  spanElem.setAttribute("class", "WhiteSpaceNode");
                  spanElem.textContent = "#text";
            } else {
                  spanElem.setAttribute("class", "textNode");
                  spanElem.textContent = textString;
            }
      }

      // Determining if the treeNode is false should help the makeBranches function move recursively through the different levels of node throught the article
      if (treeNode.childNodes.length > 0) {
            var newList = document.createElement("ol");
            newList.innerHTML = "|";

            nestedList.appendChild(newList);
            for (var n = treeNode.firstChild; n !== null; n = n.nextSibling) {
                  makeBranches(n, newList);
            }
      }
}

function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}