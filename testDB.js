// Requiring our models for syncing
var db = require("./models");

const { Op } = require("sequelize");

db.sequelize.sync().then(function() {
    // search by id
    db.CodeResource.findAll({
        where: {
            id: 2
        }
    })
    .then(function(result) {
        console.table(result);
    });

    // search by keyword "REST"
    db.CodeResource.findAll({
        where: {
            topic: {
                [Op.substring]: 'REST'
            }
        }
    })
    .then(function(result) {
        console.log(result);
    });

        // search by keyword "WEB" or "API"
        db.CodeResource.findAll({
            where: {
                topic: {
                    [Op.or]: [
                        { [Op.substring]: 'WEB' },
                        { [Op.substring]: 'API' }
                    ]
                }
            }
        })
        .then(function(result) {
            console.log(result);
        });
    
         // search by keyword "WEB" and "API"
        db.CodeResource.findAll({
            where: {
                topic: {
                    [Op.and]: [
                        { [Op.substring]: 'WEB' },
                        { [Op.substring]: 'API' }
                    ]
                }
            }
        })
        .then(function(result) {
            console.log(result);
        });

});