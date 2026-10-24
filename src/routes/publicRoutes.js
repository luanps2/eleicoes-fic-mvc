import { Router } from "express";

const publicRouter = Router()

publicRouter.get('/', (req, res) => {
  res.send('Olá! Este é um servidor MVC.\n');
})

export default publicRouter