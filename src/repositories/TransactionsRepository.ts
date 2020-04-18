import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    let somaIncome = 0;
    let somaOutcome = 0;
    this.transactions.map(transaction => {
      if (transaction.type === 'income') somaIncome += transaction.value;
      return somaIncome;
    });
    this.transactions.map(transaction => {
      if (transaction.type === 'outcome') somaOutcome += transaction.value;
      return somaOutcome;
    });
    const Balance = {
      income: somaIncome,
      outcome: somaOutcome,
      total: somaIncome - somaOutcome,
    };
    return Balance;
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
