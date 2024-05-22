//create web server
//create a route that sends back a list of comments
//create a route that adds a new comment to the list

//create a web server
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//create a route that sends back a list of comments
app.get('/comments', (req, res) => {
  //read the file
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.send('Error');
    } else {
      //parse the file
      const comments = JSON.parse(data);
      //send the comments
      res.send(comments);
    }
  });
});

//create a route that adds a new comment to the list
app.post('/comments', (req, res) => {
  //read the file
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.send('Error');
    } else {
      //parse the file
      const comments = JSON.parse(data);
      //add the new comment
      comments.push(req.body);
      //write the new file
      fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
        if (err) {
          console.log(err);
          res.send('Error');
        } else {
          //send the new comments
          res.send(comments);
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
