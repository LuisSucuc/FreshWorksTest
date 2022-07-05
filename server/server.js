const axios = require('axios');

exports = {

  // args is a JSON block containing the payload information.
  // args['iparam'] will contain the installation parameter values.
  onContactCreateHandler: function(args) {
    console.log('Hello ' + args['data']['actor']['email']);
  },
  onTaskUpdateCallback: function(payload) {
    
    console.log(payload)
  axios
    .post('https://3891-190-148-53-32.ngrok.io/post', {
    firstName: 'Fred',
    lastName: 'Flintstone'
    })
    .then(res => {
      console.log(`****************`);
      console.log(`statusCode: ${res.status}`);
      console.log(res.data);
    })
    .catch(error => {
      console.error(error);
    });
  },
  validateVIPPhoneNumber: function (request) {    
    console.log('Numero: ', request.input);
    let validVIPNumbers = ['+50245098553'],
    response = validVIPNumbers.includes(request.input) ? 'luis': 'other',
    data = {
      response,
      "app_variables": {}
    };
    
    return renderData(null, { data });
  }
};
