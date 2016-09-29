Cellular Automata
=================

![Screenshot](https://raw.githubusercontent.com/drola/cellular-automata/master/docs/screenshot.png)

Project intented to experiment with

 - Functional programming
 - React
 - Redux
 - Cellular Automata
 - SVG graphics
 
 ### Theory

<<blockquote cite="https://en.wikipedia.org/wiki/Cellular_automaton">
	A cellular automaton consists of a regular grid of cells, each in one of a finite number of states, such as on and off (in contrast to a coupled map lattice). The grid can be in any finite number of dimensions. For each cell, a set of cells called its neighborhood is defined relative to the specified cell. An initial state (time t = 0) is selected by assigning a state for each cell. A new generation is created (advancing t by 1), according to some fixed rule (generally, a mathematical function) that determines the new state of each cell in terms of the current state of the cell and the states of the cells in its neighborhood.
</blockquote>

### Current state

 - Project uses React, Refux, SVG and implements a dynamic rules for calculating next generation of cellular automata. Rule can be flipped by clicking on an image which represents initial state of a cell and its neighborhood.
 
 
### TODO

 - Explain rules better or make editing them more intuitive
 - Make computation of new state more functional, perhaps with ClojureScript
 
 
