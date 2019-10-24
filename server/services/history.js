class HistoryService {
  static get tableName() {
    return 'history';
  }

  static async getAll() {
    return Promise.resolve([]);
  }

  static async create() {
    return undefined;
  }
}

module.exports = HistoryService;
