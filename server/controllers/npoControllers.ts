import { Request, Response, NextFunction } from 'express';
import https, { RequestOptions } from 'https';


const db = require('../model/model');

const npoControllers = {
  ein: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Hit npoControllers.ein");
      const ein = req.body.ein;
      console.log('ein is  ', ein);
      // console.log('ein', ein);
      // String template literal ein to parametized fetch
      // In object of objects
      // Assign values of first object to res.locals
      //   ein, name, address, city, state, zipcode, 
      const options: RequestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      // Make a GET request to the API endpoint
      https.request(`https://projects.propublica.org/nonprofits/api/v2/organizations/${ein}.json`, options, (result) => {
        let data = '';

        result.on('data', (chunk) => {
          data += chunk;
        });

        result.on('end', () => {
          console.log('result', data);
          res.send(data);
        });
      }).end();
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
};

module.exports = npoControllers;