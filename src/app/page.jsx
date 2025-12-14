import Link from "next/link";
import styles from "./page.module.css";
import database from "@/database/database";

export default async function Home() {

  const sql = `
    SELECT 
      id,
      nome,
      imagem
    FROM projetos
    ORDER BY data_inicio DESC
  `;

  const responseDB = await database.query(sql);
  const projetos = responseDB.rows;

  return (
    <div className={styles.pageContainer}>
      
      {/* Header */}
      <header className={styles.mainHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.siteTitle}>NEABI JAGUARUANA</h1>
          <nav className={styles.mainNav}>

            <Link href="/gallery" className={styles.navLink}>
              Galeria
            </Link>

            <Link href="/membros" className={styles.navLink}>
              Membros
            </Link>

            <Link href="/about" className={styles.navLink}>
              Sobre O NEABI
            </Link>

          </nav>
        </div>
      </header>

      {/* Projetos */}
      <section className={styles.gallerySection}>
        <div className={styles.imageGrid}>
          {projetos.map((projeto) => (
            <Link
              key={projeto.id}
              href={`/projetos/${projeto.id}`}
              className={styles.imageCard}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={projeto.imagem}
                  alt={projeto.nome}
                  className={styles.image}
                />
              </div>

              <h3 className={styles.imageTitle}>
                {projeto.nome}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.mainFooter}>
        <p className={styles.copyright}>
          © 2025 NEABI Jaguaruana
        </p>
      </footer>

    </div>
  );
}

