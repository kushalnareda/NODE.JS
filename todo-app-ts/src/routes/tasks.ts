import express, { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Task } from '../entities/Task';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const taskRepository = getRepository(Task);
  const tasks = await taskRepository.find();
  res.render('index', { tasks });
});

router.post('/', async (req: Request, res: Response) => {
  const taskRepository = getRepository(Task);
  const newTask = new Task();
  newTask.description = req.body.newTask;
  await taskRepository.save(newTask);
  res.redirect('/tasks');
});

router.delete('/:id', async (req: Request, res: Response) => {
  const taskRepository = getRepository(Task);
  const id = parseInt(req.params.id, 10);
  await taskRepository.delete(id);
  res.redirect('/tasks');
});


export default router;
