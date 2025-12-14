import database from "@/database/database";
import "./membros.css";

export default async function Membros() {

  const sql = `
    SELECT
      id,
      nome,
      imagem,
      funcao_neabi,
      cargo_ifce
    FROM membros
    ORDER BY nome ASC
  `;

  const responseDB = await database.query(sql);
  const membros = responseDB.rows;

  return (
    <div className="pageContainer">
      <h1 className="title">Membros do NEABI</h1>

      <div className="membersGrid">
        {membros.map((membro) => (
          <div key={membro.id} className="memberCard">
            
            <img
              src={membro.imagem}
              alt={membro.nome}
              className="memberImage"
            />

            <h3 className="memberName">{membro.nome}</h3>

            <p className="memberRole">{membro.funcao_neabi}</p>

            <p className="memberIfce">{membro.cargo_ifce} No IFCE</p>

          </div>
        ))}
      </div>
    </div>
  );
}
