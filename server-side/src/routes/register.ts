import { Request, Response } from 'express';
import controller  from '../controller/register';
const { Router } = require('express');

const router = Router();

router.post('/',  controller.RegisterUser);

export {router};