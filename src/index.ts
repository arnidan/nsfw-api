import 'reflect-metadata';
import 'module-alias/register';

import express from 'express';
import bodyParser from 'body-parser';
import {ControllersLoader} from 'simple-ts-express-decorators';
import {NsfwController} from 'app/controllers/NsfwController';

const app = express();

app.use(bodyParser.json());

new ControllersLoader({
  controllers: [NsfwController]
}).load(app);

app.listen(3000);
