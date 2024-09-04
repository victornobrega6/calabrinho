import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://calabrinho_user:rgHZTACT1FbYdKSXO958HFEZ6ZxJ8C8f@dpg-cr75tcbqf0us73fbubq0-a.oregon-postgres.render.com/calabrinho';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;