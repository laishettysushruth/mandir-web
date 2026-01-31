import Link from "next/link";

export default function RootPage() {
  return (
    <main className="container">
      <div className="nav">
        <div className="brand">
          <div className="logo" />
          <div>Mandir Web</div>
        </div>
      </div>

      <div className="hero">
        <h1>Choose language</h1>
        <p style={{ color: "var(--muted)", marginTop: 6 }}>
          Pick a language to continue.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          <Link className="pill active" href="/en">English</Link>
          <Link className="pill" href="/hi">हिन्दी</Link>
        </div>
      </div>

      <div className="footer">Starter project. Configure backend/payments next.</div>
    </main>
  );
}
