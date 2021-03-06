'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var faker = require('faker');
const jsf = require('json-schema-faker');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  photo: getPhoto
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getPhoto(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  const dateRightNow = new Date();
  let fullDateText = `${dateRightNow.getFullYear()}-${dateRightNow.getMonth() + 1 >= 10
    ? dateRightNow.getMonth() + 1
    : "0" + (dateRightNow.getMonth() + 1)
    }-${dateRightNow.getDate() >= 10
      ? dateRightNow.getDate()
      : "0" + dateRightNow.getDate()
    }`;

  var date = req.swagger.params.date.value || fullDateText;

  // this sends back a JSON response which is a single string
  res.json([{
    "location": faker.address.city(),
    "img1": faker.image.image(),
    "img2": faker.image.image(),
    "date": faker.date.future(),
    "name1":""+ faker.company.companyName(),
    "name2": ""+ faker.company.companyName(),
  }]);
}