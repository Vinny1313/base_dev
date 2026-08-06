const express = require('express');
const { Pool } = require('pg'); // Importa o driver do Postgres

const app = express();
const port = 3333;

// Configura a conexão usando a URL que definimos no docker-compose.yml
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Testa a conexão assim que o servidor inicia
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao adquirir cliente do banco de dados:', err.stack);
  }
  console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
  release();
});

// Rota principal original
app.get('/', (req, res) => {
  res.send('Backend rodando no Docker e preparado para o banco!');
});

// Nova rota para testar o banco de dados na prática
app.get('/teste-db', async (req, res) => {
  try {
    // Faz uma consulta simples pedindo a hora atual para o banco
    const resultado = await pool.query('SELECT NOW()');
    res.json({
      mensagem: 'Conexão ativa e funcionando!',
      horaDoServidorPostgres: resultado.rows[0].now
    });
  } catch (error) {
    console.error('Erro na consulta:', error);
    res.status(500).json({ erro: 'Falha ao consultar o banco de dados' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});