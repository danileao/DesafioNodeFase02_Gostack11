import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface TransactionDTO {
  id: string;
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
export default class UpdateTransactionService {
  private transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute({ id, title, value, type }: TransactionDTO): Transaction {
    const Balance = this.transactionRepository.getBalance();
    if (Balance.income - value < 0 && type === 'outcome') {
      throw Error(
        'Action not authorized because the value is bigger than your total',
      );
    }
    const transactionUpdated = this.transactionRepository.update({
      id,
      title,
      value,
      type,
    });
    return transactionUpdated;
  }
}
