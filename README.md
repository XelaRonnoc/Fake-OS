# Fake-OS
A one-page-app written in Vanilla Java Script built to mimic the look and feel of the windows 10 desktop. 
The application includes a working start button and a real-time date/time clock.
Additonally Three "Apps" are included. These apps can be opened and close via the desktop icon or the start menu icons. These apps share two common features:
  - The "X" button which completley closes the appremoving it from the DOM 
  - The "_" button which just minisises the app to the task bar by hiding
    the app using display: none; These task bar icons can be clicked to re-open minimised apps. 
  - The expand button possess no funcionality.
NOTE: when a new app is opened or unminimised it auto minimises all currently opened apps. Additionally only one app of each type can be open simultaneously.

The "Reminders app" which uses some very not secure password verification to allow access which can then be used to save a reminder
that has both heading and body to the NotePad app as a new entry. 
The note pad app displays all saved reminders as well as a reference list for the icons utilised in the creation of this application
The Images app just displays some images of cats.
