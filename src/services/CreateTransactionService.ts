// import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

class CreateTransactionService {
  public async execute({ title, type, value }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionRepository.create({
      title,
      type,
      value,
    });
    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
