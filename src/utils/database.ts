import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({
    host: "postgresql-database-sc.alwaysdata.net",
    database: "database-sc_rispot-check",
    port: 5432,
    user: "database-sc_web",
    password: "passwordforwebaccount",
  });
}
export { conn };
