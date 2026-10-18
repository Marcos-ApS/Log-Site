export default function Card({ title, subtitle, children, className = "" }) {
  return (
    <section className={`card ${className}`}>
      {(title || subtitle) && <header className="card-header"><div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div></header>}
      {children}
    </section>
  );
}
