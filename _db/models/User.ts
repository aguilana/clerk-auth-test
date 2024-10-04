import { DataTypes, Model, Optional } from "sequelize";
import { db } from "@/_db";

enum Role {
  Admin = "admin",
  User = "user",
}
// Define an interface for the User model attributes
interface UserAttributes {
  id: number;
  externalId: string;
  firstName: string;
  lastName: string;
  role: Role.Admin | Role.User;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Extend the Sequelize Model class
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public externalId!: string;
  public firstName!: string;
  public lastName!: string;
  public role!: Role.Admin | Role.User;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    externalId: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    firstName: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    role: {
      type: new DataTypes.ENUM("admin", "user"),
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    sequelize: db,
    modelName: "user",
    timestamps: true,
  }
);

export default User;
