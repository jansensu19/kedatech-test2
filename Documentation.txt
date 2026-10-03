# Documentation

## library npm used on this project
- create vite@latest kedatech-test2 -- --template react
- npm install react-router-dom
- npm install -D sass-embedded
- npm install @formspree/react

## Mock login data
- email: "test@gmail.com", password: "test1234"
- email: "test2@gmail.com", password: "test4321"

## Explanation
- npm install -D sass-embedded
-- Why using sass, because for personal use css/scss will have cleaner looks for HTML, jsx code. This is also easier for creating token if there is many repeated same size, color, or other styling.

- npm install @formspree/react
-- For this case, creating form for contact us will also perform a real interaction to send a contact into email directly. For this case it's for improving the use of the form contact us.

- Login
-- Login is not using Auth manual mock data that when successfully login, it will set the data and login time into localStorage. For each reload page it will check if have login data on localStorage. Login data will be remove if past the login timestamp.

- Scroll Smooth Behavior
-- For scroll it will have 2 function which is element check scroll and full scroll ( for scroll into top page). This function already put on hooks for easier use in each components ( right now on nav-bar, home-page hero button and far right bottom screen)

- CI/CD
-- For this case, it's just to makes access this code easier with web that ready but only for github link at the moment.