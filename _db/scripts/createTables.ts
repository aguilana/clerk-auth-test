import { db } from "@/_db";

async function createTables() {
  try {
    await db.sync({ force: true });
    console.log("Tables created successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Unable to create tables:", error);
    process.exit(1);
  }
}

createTables();
