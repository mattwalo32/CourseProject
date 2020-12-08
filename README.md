# CourseProject
## Running the project
#### Prereqs
Must have the following software installed:
* Python 3.7
* Pip 3
* NodeJS 14.15.0
* Flask (See below)
* Yarn (See below)

### Installing Flask and Yarn
From anywhere in your command line, to install flask (and other dependencies), run
```
pip3 install flask
pip3 install flask_cors
pip3 install requests
pip3 install bs4
pip3 install html5lib
```
And to install yarn, run
```
npm install -g yarn
```

#### Running the Backend
Navigate to the backend/ directory and run the following command:
```
flask run
```
This will start the backend on port 5000

#### Running the Frontend
Navigate to the frontend/ directory and run the following two commands in order:
```
yarn
yarn start
```
This will start the frontend on port 3000.
