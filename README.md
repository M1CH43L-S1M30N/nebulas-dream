### Nebulas Dream
[Live Link](https://m1ch43l-s1m30n.github.io/nebulas-dream/)

## Technologies used
  * JavaScript (ES6)
  * Canvas
  * HTML
  * CSS
  * Webpack
  * AWS

Welcome to Nebula's Dream. This is the HTML canvas game that I developed using JavaScript. The game itself is completely original, with inspiration taken from the classic game Oregon Trail. The objective is to travel to make the journey to a new planet, while dealing with unexpected obstacles. If you make it without all of your passengers going insane, you win.

## Intro Page
![](HazardPhoto.png)



## Hazard
![](NebulaIntro.gif)


## Sanity Algorithm
![](CodeSnippet.png)

This game's key feature is sanity of each passenger. I created a Passenger class which along with storing that passengers sanity out of 100, had a function which handled randomly slicing the sanity of each passenger as time went by. On top of this when the player had a catastrophe one random passenger would lose a certain amount of sanity. In order to keep track of each character's sanity level I wrote the function above which was repeatedly called after each event. I iterated through `this.passengers` which stored the Passenger objects and based on the sanity level, it updated the color of the border accordingly.


