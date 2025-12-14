import database from "@/database/database";
import Link from "next/link";

// 👉 função auxiliar para formatar datas
function formatarData(data) {
  if (!data) return "";
  return new Date(data).toLocaleDateString("pt-BR");
}

export default async function ProjetoPage({ params }) {

  const { id } = await params;

  const sql = `
    SELECT 
      p.id,
      p.nome,
      p.descricao,
      p.imagem,
      p.data_inicio,
      p.data_fim,
      m.nome AS responsavel
    FROM projetos p
    JOIN membros m ON m.id = p.responsavel_id
    WHERE p.id = $1
  `;

  const responseDB = await database.query(sql, [id]);

  if (responseDB.rows.length === 0) {
    return <h1>Projeto não encontrado</h1>;
  }

  const projeto = responseDB.rows[0];

  return (
    <div className="pageContainer">

      <Link href="/" className="voltar">
        Voltar
      </Link>

      <h1 className="title">{projeto.nome}</h1>

      <img
        src={projeto.imagem}
        alt={projeto.nome}
        className="image"
      />

      <p className="description">
        {projeto.descricao}
      </p>

      <div className="info">
        <p>
          <strong>Responsável:</strong> {projeto.responsavel}
        </p>

        <p>
          <strong>Período:</strong>{" "}
          {formatarData(projeto.data_inicio)} — {formatarData(projeto.data_fim)}
        </p>
      </div>

    </div>
  );
}
