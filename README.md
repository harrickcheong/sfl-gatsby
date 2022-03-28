# sfl-gatsby

## Description
This web-app is an application designed to have one feature, which is the navigation bar. This bar lists the names of two pages so that when a user clicks one, it redirects them to the corresponding page. The navbar is also responsive to resizing where the elements in the navbar become hidden and a button shows up, after reaching a certain screen size. If the button is clicked, then it provides a drop down menu with the pages as elements to the user. Clicking an element has the same functionality where it redirects the user to the corresponding page. 

## Code Logic
The two page names, found in the navigation bar, are hard-coded in the metadata file `gatsby-config.js`. This data is retrieved by the main component in `layout.js`, using a query from `GraphQL`, and then passed into a child component, which is `header.js`. This header component is responsible for generating the navigation bar, along with its functionality.  The responsiveness of the navigation bar is mostly handled by CSS with an exception for the react hook that signals for a dropdown menu.

The modified files are
- gatsby-config.js
- src/components/header.js
- src/components/layout.js
- src/styles/header.css

Here are references to the resoucres used to create the app
- https://reactjs.org/tutorial/tutorial.html
- https://www.gatsbyjs.com/docs/creating-dynamic-navigation/
- https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
- https://reactjs.org/docs/hooks-intro.html
