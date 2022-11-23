Welcome to a Code Institutions Advanced frontend project. This app will fit you, who loves horses, perfect! The SaddleClub connects folks all over the world, who all has one common passion: Horses! Here you are able to sign up and become a member of SaddleClub. as a member You can post posts and comment other users posts. As a user you can also edit and delete you post.

# Content
* [User Story](#User-Story)
  * [Goal](#Goal)
  * [User Stories](#User-Stories)
 
* [Design](#Design)
 * [Colour](#Colour)
 * [Font](#Font)
 * [Wireframe](#Wireframe)
* [Features](#Features)
 * [Existing-Features](#Existing-Features)
 * [Future-Features](#Future-Features)
* [Technology](#Technology)
 * [Testing](#Testing)
 * [Bugs](#Bugs)
* [Credits](#Credits)
* [Deployment](#Deployment)
 * [Heroku](#Heroku)
 * [Github](#Github)

# User Story
## Goal
User should be able to log in and log out. Post posts aswell as edit and delete posts. When navigating trough the app users should be able to see "Home", "Add Post" "Profile" and "sign out". 

## User Stories
* User should be able to sign up and later on sign in and sign out: 
As a user I can sign up so that i can sign in, sign out and add a post
* When signed in user should se a option for watching their feed, press home, add post, sign out, like, profile.
* When a post is posted: 
As a user I can edit my post so that I can make changes
As a user I can see my post so that I can manage them
As a user I can delete my post so that I dont have that post anymore
As a loged in site visiter I can add and delet comments 





# Design

* For this app code institutions CSS files are used as styling. Aswell as navigation component and the home component. The navigation codes are left for view purposes but are also left to later on render functions to the backend. Pictures and text coloring are implemented by me.





# Features
## Existing Features
* A navbar that hleps user navigate troughout the page. Links to Add Post, Profile, Home, Feed and Sign out works as for "like" link is not yet connected.
* A add post app where user can uplode pictures with content and category
* Edit and delete a post troughout a dropdown menu on the post
* Add a comment and delete a comment witrh a dropdown menu.
* Log in
* sign up
* Log out
* Watch my own profile och "Profile"-link as well as other profiles when they post in the feed.
* Watch other users posts on a feed and be able to click on their profile name and get directed to their profile.
* See how many posts somebody has posted on their profile
* See who is a new on the platform trough the "New members bar"

Some of the fetures below

![bild](/src/readmeimages/testcaseaddpost.jpg)
![bild](/src/readmeimages/frontprofile.jpg)
![bild](/src/readmeimages/testcase1.jpg)

## Future Features

* Add a rate app. As a User I want to be able to rate a post from 1-5.
as a post owner I want to be able to se when and who rates my post.
* Add a function and connection to api for likes(in the navbar aswell as on the post) 
* add function to "followers" on the profiles pages aswell as the sidebar with the "Populare Profiles"
* Going to add a searchbar to search posts by categories. The searc results will then be shown on the "Feeds"
* As a user I want to be able to edit and delete my profile


# Technology

## Validator

* PEP8 check. I had some error regarding the to long lines in my codes. 

## Languages
* React
* CSS
* Javascript
* HTML

<br>



* Packages

  * cloudinary
  * dj-database-url
  * dj3-cloudinary-storage
  * Django
  * django-allauth
  * gunicorn


* Libraries
  * Allauth
  * React-bootstrap

* Programs
  * GitPod:
  * Gitpod was used as IDE to commit and push the project to GitHub.
  * GitHub:
  * Was used for all storing and backup of the code pertaining to the project.

## Testing
I did testing on my webpage troughout the project: Testings performed:

|Test | What to do | Status |
|----|:---------|:-------|
|Tested my connectfion to API when signing in| Filled in the sing in form and tryed to log in. Opend backend heroku app(saddelclubbackend) and typed "python3 manage.py runserver" Then added "/profiles" to my preview browser | good |
|Tested my connectfion to API when signing up| Filled in the sing up form and tryed to sign up. Opend backend heroku app(saddelclubbackend) and typed "python3 manage.py runserver" Then added "/profiles" to my preview browser | good |
|Tryed to press the links in the navbar| Clicked on all navbar links except "likes" that dosent work yet| good |
|Try to add a post|press add post on the navbar. add a image, add a title, choose a category, post| good |
|Edit a post|click on "Home" in navbar. Click on a post of mine. Click on the three dots on the post. Click edit. Fill out a new title and content, aswell as choosing a new category and adding a new image| good |
|Delete a post|click on "Home" in navbar. Click on a post of mine. Click on the three dots on the post. Click delete. | good |
|Sign out|click on "sign out" on the navbar.| good |
|See if warning messages work when wrong information is filled in on aign up and sign in|click on "Sign up" Write a short password. Go to "Sign in" on the navbar, write wrong password and username. | good |
|Sign out|click on "sign out" on the navbar.| good |

![bild](/src/readmeimages/testcase1.jpg)
![bild](/src/readmeimages/testcase2.png)
![bild](/src/readmeimages/testcaseaddpost.jpg)
![bild](/src/readmeimages/testcase3front.png)



## Bugs
|Test | What to do | Status |
|----|:---------|:-------|
|Did not connect to backend api| My CLIET_ORIGI_DEV had the wrong URL Link. When I tried to show my profiles on the  saddleclubbackend heroku app i got an erros. Console log a error in the connection between frontend and api.| fixed |

## Unfixed Bugs
* Due to trouble installing the jwt-decode I could not remove my 404 errors logging on the consul. I did not have time to fix this issus.
* Cloudinary default image is not loading as supposed from the backend.
* In the last minutes before my due time a error occuerd. A 500 error showing an internal error. either me or my tutor knew where the error came from. I had not been changing anything neither frontend or the backend before the error occuerd. I updated config vars and traced my steps back but nothing.

## Desktop
The app is responsive and tested on both mobileview and desktop view.


# Deployment
## Heroku

  * Logged in to my account on herouku
  * At dashboard I created a new app called "saddleclub" and chose region Europe
  * In Resources I searched for PostGres in the add-ons to use as my database
  * Connected the fronend to my backend by adding the preview url to api "Saddleclubbackend" config vars
  * I referenced this in settings.py
  * I added the value of 8000 and key to config vars
  * I connected cloudinary to env.py and my herouku with the same value and key
  * Added Allowed Hosts in settings
  * Went to the deploytab in herouku
  * searched for my github repo(my github was already connected)
  * Then clicked on deploy branch 

## Github
  * Log in to github
  * Go to repositaries
  * Click on relevant repositery
  * Go to settings
  * Click on pages at the sidebar
  * Choose to save on 'main'
  * Save

# Credits


* 
  * Code institutes walktrough project "Moment" 
  * Code institut for all CSS Files with miner changes in the textcoloring. Code institution for ProfileCreatForm and for sign in and sign out aswell as sign up. And for the context folder. Dropdown menu code from Code Institution
  * React and Javascript
  * Sign in/sing up and sign out codes are from allauth 


## Thanks to
* Code Institution for education
* My mentor for mentroing and pushing me to always try my best
* Tutor support for all help resolving issus
