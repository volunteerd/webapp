import express from 'express';
import { Request, Response, NextFunction } from 'express';
// import node-fetch
// const fetch = require('node-fetch');

const db = require('../model/model');

const npoControllers = {
  ein: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Hit npoControllers.ein");
      const ein = req.body.ein;
      console.log('ein', ein);
      // String template literal ein to parametized fetch
      // In object of objects
      // Assign values of first object to res.locals
        // ein, name, address, city, state, zipcode, 
      // https://projects.propublica.org/nonprofits/api/v2/organizations/142007220.json
        const result = await fetch(`https://projects.propublica.org/nonprofits/api/v2/organizations/${ein}.json`);
        console.log('result',result);
        res.send(result);
    } 
    catch (error) {
        console.error(error);
        next(error);
    }
  }
}

module.exports = npoControllers;