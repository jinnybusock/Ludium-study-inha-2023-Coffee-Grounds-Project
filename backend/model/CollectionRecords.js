const Sequelize = require("sequelize");

class CollectionRecords extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        record_id: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
        },
        coffee_amount: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        coffee_status: {
          type: Sequelize.ENUM("drying", "moisture", "mold", "impossible"),
          allowNull: false,
          defaultValue: "moisture",
        },
        collection_date: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        reward_status: {
          type: Sequelize.ENUM("수거요청", "수거완료", "보상완료"),
          allowNull: false,
        },
        reward_amount: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        updated_at: {
          //임시 True 원래는 false
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
        created_at: {
          //임시 True 원래는 false
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: "CollectionRecord",
        tableName: "collectionRecords",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.CollectionRecords.belongsTo(db.CafeDetails, {
      foreignKey: "cafe_id",
      targetKey: "cafe_id",
    });
    db.CollectionRecords.belongsTo(db.CollectorDetails, {
      foreignKey: "collector_id",
      targetKey: "collector_id",
    });
  }
}

module.exports = CollectionRecords;
