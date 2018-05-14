'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');
const https = require('https');

const dynamo = new doc.DynamoDB();
const TELEGRAM_TOKEN = '569322470:AAFTJXf-WBNng4MknJ6jQfJ6NqKfEq7oYn0';

function telegramBot(req, done) {
    const {message} = req.body
    console.log('Got teleg message ', message);
    if (!message || message.text.toLowerCase().indexOf('marco') <0) {
        // In case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
        console.log('No message!');
        return done(null, '');
      }
    
      // If we've gotten this far, it means that we have received a message containing the word "marco".
      // Respond by hitting the telegram bot API and responding to the approprite chat_id with the word "Polo!!"
      // Remember to use your own API toked instead of the one below  "https://api.telegram.org/bot<your_api_token>/sendMessage"
      const uri = 'https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage';
      https.post(uri, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
      axios.post('https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage', {
        chat_id: message.chat.id,
        text: 'Polo!!'
      })
        .then(response => {
          // We get here if the message was successfully posted
          console.log('Message posted')
          done(null, 'ok');
        })
        .catch(err => {
          // ...and here if it was not
          console.log('Error :', err)
          done('Error :' + err);
    });
}


/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    switch (event.httpMethod) {
        case 'DELETE':
            dynamo.deleteItem(JSON.parse(event.body), done);
            break;
        case 'GET':
            //dynamo.scan({ TableName: event.queryStringParameters.TableName }, done);
            telegramBot(event, done);
            break;
        case 'POST':
            //dynamo.putItem(JSON.parse(event.body), done);
            telegramBot(eval, done);
            break;
        case 'PUT':
            dynamo.updateItem(JSON.parse(event.body), done);
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};

