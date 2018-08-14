# veym project

Objective: To build a web-app service that will bridge the use of recent technology with legacy forms of registration, attendance, and grade sheets.

Projected features/goals:
- User login capability (HT & parents)
  - Varying levels of access (admin [BCH/BTV], HT, parents)
- Attendance logging
  - Submit attendance
  - View attendance
- Grade/behavior logging
  - Submitting
  - Viewing
- Emergency contact info/Parent contact info
- Push Notifications about upcoming events/deadlines
- Ability to view/manage members (HT, TT and Students)
  - Heirarchical breakdown into BTV, BCH, Nganh, Doi Truong (if necessary)
- More to come...

# Project Setup
1) run 'npm init -y'
2) create .gitignore and add node_modules and package-lock.json
3) run 'npm install'
4) create assets folder 'mkdir assets assets/css assets/images assets/js'
5) create starter files 'touch assets/css/styles.css assets/js/main.js'
6) Initialize SQL Database
    - Download MySQL server here: https://dev.mysql.com/downloads/mysql/
    - Download MySQL workbench here: https://www.mysql.com/products/workbench/
    - Install MySQL server, make sure to select "Use Legacy Passowrd Encryption" and select an easy to remember password (I just used "password" without quotes)
    - Install MySQL workbench and then launch. When you click on the MySQL connection local instance 3306, user should be root and the password is the same as the password you used above
    - Create a SQL query and copy the schema.sql and create the 'exampledb'
7) After creating the exampledb, we can now start the server. Run 'node server.js'

Project Development by:
Jonathan Mai & John Tran
