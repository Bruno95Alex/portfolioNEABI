import { Pool } from "pg";

const url = "postgresql://neondb_owner:npg_zHmuKa7Vw8gl@ep-super-star-ac9habkw-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require";

const database = new Pool({
  connectionString: url,
});

export default database;
