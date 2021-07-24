# Assessment_2

Project For Evaluation
Assume that you are creating a static web page for a media company(xyz.com).
The media company has some interesting images that are only for private view and some images are allowed for public view.
They wish to show their private images to the users who have valid userid/password. The media company will decide to which users it should provide the access, so the website need not have a signup functionality. They will also have public content that can be viewed by public/all users (without logging in)
The website should have 3 pages
● Homepage
● Gallery page (visible only for private users)
● About page
All the pages should have Header,Body,Footer.
Body content will differ for public users & private users
For public users
Header should have a Home link ,about links and a login button on the top right.
Footer should contain the company's copyright information. You can add additional details if required.
HomePage
- Body can contain any content, you can pick any topic of your personal interest and render it here.
- Body content can be of images/text/video, but make sure what you are adding has meaningful details in it.
Functionality to mention a user in the text area:
In the home page, add the below functionality for mentioning other users. You can use the userDB for getting the list of usernames to mention a user. (add it in the top of the home page)
===> usersDB: [ {userid : “abc@media.com”,password:”abc123”,”username”:”tom”}, {userid : “def@media.com”,password:”def123”,”username”:”dick”}]
Create a text area in which you need to take the usernames like in the below image: 

Once you are typing @ in the text area then the usernames should come in the dropdown.
You should be able to select one out of the usernames in the drop down by either using keyboard (up and bottom arrow key) or by using the Mouse. 


In the above scenarios if you choose or select Paula from the dropdown menu, it needs to be highlighted as shown below:

About us page
○ Display some content on what the company does and key members
Login functionality
- As the login button should be on the header, it should be available both on home page,about us page
- onclick login button display a form with user-id(textbox),password(textbox), sign-in(button) elements
- This form should be displayed in the homepage, you can display it in either modal popup, or you can slide it inside the homepage, or any other ways. it’s up to you.
- The userid,password has to be maintained in the array of json objects. The userid,password entered in the textbox should be validated against the array of json objects. if login is success, display the details required for private users
usersDB: [ {userid : “abc@media.com”,password:”abc123”,”username”:”tom”}, {userid : “def@media.com”,password:”def123”,”username”:”dick”}
]
For private users
Everything remains the same except for below changes
- Header should have Home link ,Gallery link, About link and logged-in user-id(show the username of the userid which was used to login).
- Logout functionality: Header should have logout button, onclick return to homepage
- Display images in grid view(any number of rows * 4 columns). Use any images of your choice.
- Optional: You can add texts on top of image,animation effects, show full image on popup
No server side code is required for Login/logout. You can simulate it via frontend itself.
To simulate, User authentication you can have list of valid users in array of JSON
usersDB: [ {userid : “abc@media.com”,password:”abc123”,”username”:”tom”}, {userid : “def@media.com”,password:”def123”,”username”:”dick”}
]
- You can use local storage if you want.
- You can use any state management of your choice. This example does not require any statemangement, but think of it like - in future this website would have many features and also paid visitors and so, you might need state management at the time. So, why not have the barebones today? Of course, using state management is optional.
- You can add additional features if you want to. The ones that are highlighted as optional are optional.
- You can use any css framework like material,bootstrap ...etc of your choice and it's optional.
You are expected to use angular framework (latest version of angular is preferred) to build this project.
if you’re not able to finish this project, do as much as you can and keep the project in runnable condition. The project should be in a position to generate the html files,hosted in a static server.
We don’t wish to see any errors in the browser console.You can document details in Readme.md on the notable features, libraries you have used to implement this project.
Upload the source code in your github and share the link with us. I hope these details are clear. All the best
