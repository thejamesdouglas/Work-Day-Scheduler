Work Day Scheduler

This is a simple daily planner app that allows you to schedule your tasks for the day. The app uses HTML, CSS, and JavaScript, and is designed to work in any modern web browser.

Features
Displays the current date at the top of the page
Color-codes time blocks based on whether they are in the past, present, or future
Allows users to add and save tasks for each time block
Automatically saves tasks to the browser's local storage
Retrieves and displays saved tasks when the page is refreshed
Updates color coding of time blocks every 10 minutes to reflect the current time
How to Use
Open the daily planner app in your web browser.
The current date will be displayed at the top of the page.
Each time block represents a one-hour period of your day.
Time blocks are color-coded based on whether they are in the past, present, or future.
Grey blocks represent past hours
Red blocks represent the current hour
Green blocks represent future hours
Click on a time block to enter a task for that hour.
Click the "Save" button to save your task for that hour.
Your task will be saved in your browser's local storage, and will be displayed if you refresh the page.
Technical Details
The app uses jQuery to simplify JavaScript code, and Moment.js library to handle date and time operations.

The app's time blocks are created dynamically using JavaScript and appended to the HTML document. Each time block contains a description field for entering tasks, and a save button for saving tasks.

When a user enters and saves a task for a particular time block, the task is saved in the browser's local storage using the time block's ID as the key. The app retrieves the tasks from local storage on page load, and displays them in the corresponding time block.

The app's color coding of time blocks is updated every 10 minutes to reflect the current time.