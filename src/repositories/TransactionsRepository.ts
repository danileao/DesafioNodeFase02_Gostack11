import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
interface TransactionDTO {
  id: string;
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
    const Income = this.transactions.reduce((sumIncome, transaction) => {
      if (transaction.type === 'income') return sumIncome + transaction.value;

      return sumIncome;
    }, 0);
    const Outcome = this.transactions.reduce((sumOutcome, transaction) => {
      if (transaction.type === 'outcome') return sumOutcome + transaction.value;

      return sumOutcome;
    }, 0);
    const Balance = {
      income: Income,
      outcome: Outcome,
      total: Income - Outcome,
    };
    return Balance;
  }

  public create({
    title,
    value,
    type,
  }: Omit<TransactionDTO, 'id'>): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }

  public update({ id, title, value, type }: TransactionDTO): Transaction {
    const indexTransaction = this.transactions.findIndex(
      transaction => transaction.id === id,
    );
    const transactionUpdated = {
      id,
      title,
      value,
      type,
    };
    this.transactions[indexTransaction] = transactionUpdated;
    return transactionUpdated;
  }

  public delete(id: string): void {
    const indexTransaction = this.transactions.findIndex(
      transaction => transaction.id === id,
    );
    this.transactions.splice(indexTransaction, 1);
  }
}

export default TransactionsRepository;
