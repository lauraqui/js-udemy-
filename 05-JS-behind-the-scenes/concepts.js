"use strict";

/////// HOW JS WORKS BEHIND THE SCENES //////////////

// 1.A high-level overview of js: "JS is a high-level, prototype-based Oriented-object, multi paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage collected programming language with first-class functions and a non-blocking event loop concurrency model"

// 2.The JS engine and runtime:
// What`s a Js engine? Computer program that execute Js code. All the Js engine contain a call stack and a heap!
// ==> Call stack: Where the code is executed using the execution context.
// ==> Heap: Is a structure memory pool with store all the objects thar our app needs.

// 3.How the code is compiled in machine code so actually can be executed after?
// a) Compilation: The entire source-code is converted in machine-code at once. And this machine-code is written in a portable file that can be executed in any computer.
// b) Interpretation: There's interpreter runs through the source-code and executes it line-by-line. So, the code is read and execute in a same time.
// c) JIT - Just-in-time compilation, that is when the entire code is converted into machine code at once, then executed immediately.

// 4. Runtime in the browser: needs the Js engine. Web API's(DOM, console, fetch API, timers) are functionalities provided to the engine, acessible on window object. The runtime is like a box that have all the stuffs that we need related to Js. A typical Js runtime included callback queue(onClicl, timer, data...), this is a data structure that contain all the callback functions that already be executed.
// OBS: After the event, the callback function is put into callback queue, when the stack is empty the callback function is passed to the stack so it can be executed. This happen by the event loop!

// 5. Execution contexts and the call stack:
// What's is an execution context?  Enviroment in ich a piece of Js is xecuted. Stores all the necessary information for some code to be executed.
// EC(Exatly one global execution context): default context, created for code that is not inside any function(top-level).
// One execution context per function: for each function call, a new execution context is created.
// What`s inside execution context? a) Variable environment: let, var and const declaration, functions arguments object; b) Scope chain; c)this keyword: generated during "creation phase", right before execution.
// The call stack: "place" where execution contexts get stacked on top of each other to keep track of where we are in the execution.

//6.Scope and the scope chain:
// Scoping: how our programs variables are organized and acessed.
// Lexical scope: scoping is controlled by placement of functions and blocks in the code.
// Space or environment in which a certain variables is declared (variables environment in case of functions). There`s global scope, function scope and block scope.
// a) Global Scope: outside of any function or block; Variables declared in global scope are accessible everywhere.
// b) Function Scope: variables are accessible only inside function, NOT outside; also called local scope;
// c) Block Scope(ES6): Variables are accessible only inside block( block scoped); however, this only applies to let and const variables; functions are also block scope (only in strict mode).
// The scope chain: scope has acess to variables from all outer scopes, by the way all this also apply to functions arguments ==> variable lookup in scope chain
// let and const are block-scoped; var is a function-scope;

// 7.Scope chain vs. call stack
//Scope chain: order in which functions are written in the code. Has nothing to do with order in which functions were called.
// Call stack: order in which functions were called.
