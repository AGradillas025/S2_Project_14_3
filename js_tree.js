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
nodeCount = 0;
elemCount = 0;
textCount = 0;
wsCount = 0;

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
}

// The function makeBranches will append node branches to the node tree
function makeBranches(treeNode, nestedList) {
      nodeCount++;
}

function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}