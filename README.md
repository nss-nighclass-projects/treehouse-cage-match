# Treehouse Cage Match

## Setup

Your project should have:
* index.html
* javascripts folder with a main.js
* lib folder
* styles folder with a main.css

Install and load:
* jquery
* bootstrap
* grunt stuff

## Requirements
* Your site should have two inputs and a button
* In the inputs you type in a treehouse username and then hit the button
* Once the button is hit your code should 
	* Make ajax requests to treehouse and return the profile 
		* Example url = https://teamtreehouse.com/krissycaron.json
	* Use Promise.all to return the two profiles at the same time
	* Display the profile pictures of the two profiles
	* Display the profile picture for each of the two profiles
	* Display the total number of points for each profile
	* Pick the cage match winner - the person with the most points
	* Clearly display who the winner is
	* Display the winners badges
	* Use jquery .animate method to apply animation to the images


* Your code should:
	* Not have any grunt errors
	* Use es6 syntax - let, const, fat arrows
	* Show an user friendly message if no data comes back from treehouse - ie you type in a username that doesn't exist (hint: use .catch on your promise.all to catch the error from treehouse)
	* Have cool animations
	* Not be styled unless you have 100% functionality complete