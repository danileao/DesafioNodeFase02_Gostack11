import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: TransactionDTO): Transaction {
    const Balance = this.transactionsRepository.getBalance();
    if (Balance.total - value < 0 && type === 'outcome') {
      throw Error(
        'Action not authorized because the value is bigger than your total',
      );
    }

    const transactionCreated = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    return transactionCreated;
  }
}

export default CreateTransactionService;
