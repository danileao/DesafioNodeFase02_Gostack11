import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionRepository = transactionsRepository;
  }

  public execute({ title, value, type }: TransactionDTO): Transaction {
    const Balance = this.transactionRepository.getBalance();
    if (Balance.total - value < 0 && type === 'outcome') {
      throw Error(
        'Action not authorized because the value is bigger than your total',
      );
    }

    const transactionCreated = this.transactionRepository.create({
      title,
      value,
      type,
    });
    return transactionCreated;
  }
}

export default CreateTransactionService;
