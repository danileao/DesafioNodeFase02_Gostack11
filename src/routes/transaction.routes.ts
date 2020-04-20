import { Router } from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import UpdateTransactionService from '../services/UpdateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all();
    const balance = transactionsRepository.getBalance();
    return response.json({ transactions, balance });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;
    const CreateTransaction = new CreateTransactionService(
      transactionsRepository,
    );
    const transaction = CreateTransaction.execute({ title, value, type });
    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.put('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { title, value, type } = request.body;
    const UpdateTransaction = new UpdateTransactionService(
      transactionsRepository,
    );
    const transactionUpdated = UpdateTransaction.execute({
      id,
      title,
      type,
      value,
    });
    return response.json(transactionUpdated);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  transactionsRepository.delete(id);
  return response.status(204).json();
});

export default transactionRouter;
