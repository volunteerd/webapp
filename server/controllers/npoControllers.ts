import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

const npoControllers = {
  einLookup: async (req: Request, res: Response, next: NextFunction) => {

    try {

      const ein = req.body.ein;
      const result = await fetch(`https://projects.propublica.org/nonprofits/api/v2/organizations/${ein}.json`);
      const data = await result.json();
      res.status(200).send(data.organization);

    } 

    catch (error) {
        console.error(error);
        next(error);
    }
  }
}

module.exports = npoControllers;