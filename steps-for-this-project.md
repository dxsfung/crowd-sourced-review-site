ember install ember-bootstrap (this will allow the styling, such as jumbotron to work)

ember install emberfire (this is important to make firebase to work - a firebase adapter will be created)


ember new [project name]
git remote add origin git@github.com:dxsfung/crowd-sourced-review-site.git
git push -u origin master

ember g model review
create firebase and add firebase to config/environment.js
publish firebase rules to true/true

<to be checked below>
update model data structure
update data.json
upload data.json to firebase

ember g route index
ember g route admin
ember g route user
ember g model restaurant
