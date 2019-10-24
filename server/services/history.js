const db = require('../db');

class HistoryService {
  static get tableName() {
    return 'games';
  }

  static get histories() {
    return db(this.tableName);
  }

  static async getAll() {
    const histories = await this.histories.select('*');
    return histories;
  }

  static async create(history) {
    return this.histories.insert(history);
  }
}

module.exports = HistoryService;
