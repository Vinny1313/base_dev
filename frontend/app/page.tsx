export default async function Home() {
  // Faz a requisição para o seu backend Node.js (na porta 3333)
  // O cache: 'no-store' garante que ele sempre busque o dado mais atualizado
  const res = await fetch('http://backend:3333/teste-db', { cache: 'no-store' });
  const data = await res.json();

  return (
    <main style={{ padding: '4rem', fontFamily: 'sans-serif', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1>Aplicações Conectadas! 🚀</h1>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>O Next.js está consumindo a API em Node.js com sucesso.</p>
      
      <div style={{ background: '#222', borderLeft: '4px solid #0f0', padding: '1.5rem', borderRadius: '4px' }}>
        <p style={{ margin: '0 0 1rem 0' }}><strong>Mensagem vinda da API:</strong> <span style={{ color: '#0f0' }}>{data.mensagem}</span></p>
        <p style={{ margin: '0' }}><strong>Hora atual no Postgres:</strong> {data.horaDoServidorPostgres}</p>
      </div>
    </main>
  );
}