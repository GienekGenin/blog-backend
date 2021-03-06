const UserRepository = require("../repositories/UserRepository");

module.exports = {
    findAll: callback => {
        UserRepository.getAll((err, data) => {
            callback(null, data);
        });
    },

    findAllWithIds: (ids, callback) => {
        UserRepository.getByIds(ids, (err, data) => {
            callback(err, data);
        });
    },

    findOne: (id, callback) => {
        UserRepository.getById(id, (err, data) => {
            callback(err, data);
        });
    },

    removeOne: (id, callback) => {
        UserRepository.removeById(id, (err, data) => {
            callback(err, data);
        });
    },

    save: (obj, callback) => {
        UserRepository.saveOne(obj, (err, data) => {
            callback(err, data);
        });
    },

    update: (obj, callback) => {
        UserRepository.update(obj, (err, data) => {
            callback(err, data);
        });
    },
};
