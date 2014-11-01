# Oredev 2014 Angular Workshop
## Notes

### 80% of my Angular use is restricted to:
* [ng-controller](https://docs.angularjs.org/guide/controller)
* [ng-submit](https://docs.angularjs.org/api/ng/directive/ngSubmit)
* [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)
* [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel)
* [ng-repeat + filter](https://egghead.io/lessons/angularjs-ngrepeat-and-filtering-data)
* [Data binding:](https://docs.angularjs.org/guide/databinding)


### General info
* [LinemanJS](http://linemanjs.com/)
* Angular expressions (in the template) [link](https://docs.angularjs.org/guide/expression)
* How to build a filterable, sortable table  [link](http://blog.testdouble.com/posts/2013-12-06-angular-onramp.html)
* Detailed isolated angular testing screencast (with audio!) [video](http://blog.testdouble.com/posts/2014-07-17-test-angular-like-it-was-made-out-of-javascript.html)
* Detailed isolated rails screencast (paid) [link](https://www.destroyallsoftware.com/screencasts/catalog/extracting-domain-objects)
* Test Isolation post [link](https://www.destroyallsoftware.com/blog/2014/test-isolation-is-about-avoiding-mocks)


### Philosophy
* Be pragmatic and always optimize for tight feedback.
* Never default to any tool, including Angular.
* Use Angular instead of jQuery. (Actually Angular is just using jQuery for you.)
* Use Ember for single page apps
* Don't write single page apps unless you've got a good reason. (HTTP solved routing in 1991; reinvent with care.)
* erb/ HAML and Angular are like peas and carrots
* Capybara and rspec/ minitest make great testing tools when you'e testing interactivity
* Try to extract logic into tool agnostic functions whenever possible. (In any language.)
* Mocks are great and mock pain should drive design.


## Workshop

[Repo] (https://github.com/testdouble/oredev2014-angular)

### Instructions
* install node.js
* `npm install -g lineman`
* clone it
* cd into it
* `lineman run` it
* `open http://localhost:8000`
* Complete the 3 exercises

### Exercise 1: [My Name Is](http://youtu.be/_oEdtoO0Q5Q)

### Exercise 2: [List](http://bit.ly/ng-todo)

### Exercise 3: Airstrike
* [Video 1](http://bit.ly/ng-air-1)
* [Video 2](http://bit.ly/ng-air-2)
* [Finished Example](https://github.com/testdouble/railsconf-test-drive-javascript/tree/master/02a_lineman_finish)


![Mockup](/mockup.png?raw=true)

#### MVP
* Single grid, single player game
* User fires blindly until they sink all opponent ships
* The player doesn't have ships of their own

#### Bonus
* Randomize opponent ship positions
* Let the player know when they sink a ship
* Give the player ships and make an AI opponent that can fire back

#### Research

From the wikipedia Battleship [page](http://en.wikipedia.org/wiki/Battleship_(game)):

>After the ships have been positioned, the game proceeds in a series of rounds. In each round, each player takes a turn to announce a target square in the opponent's grid which is to be shot at. The opponent announces whether or not the square is occupied by a ship, and if it is a "hit" they mark this on their own primary grid. The attacking player notes the hit or miss on their own "tracking" grid, in order to build up a picture of the opponent's fleet.
When all of the squares of a ship have been hit, the ship is sunk, and the ship's owner announces this (e.g. "You sank my battleship!"). If all of a player's ships have been sunk, the game is over and their opponent wins.
