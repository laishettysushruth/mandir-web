const TEMPLES = [
  { slug: "jagannath", name_en: "Shri Jagannath Temple", name_hi: "श्री जगन्नाथ मंदिर", city_en: "Puri", city_hi: "पुरी" },
  { slug: "tirupati", name_en: "Sri Venkateswara Temple", name_hi: "श्री वेंकटेश्वर मंदिर", city_en: "Tirupati", city_hi: "तिरुपति" },
];

export default async function Temples({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHi = lang === "hi";

  return (
    <>
      <div className="hero">
        <h1>{isHi ? "मंदिर" : "Temples"}</h1>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          {isHi ? "उदाहरण डेटा (बाद में एडमिन से आएगा)।" : "Sample data (later comes from admin)."}
        </p>
      </div>

      <div className="grid">
        {TEMPLES.map((t) => (
          <div key={t.slug} className="card">
            <h3>{isHi ? t.name_hi : t.name_en}</h3>
            <p>{isHi ? t.city_hi : t.city_en}</p>
            <a className="btn" href={`/${lang}/temples/${t.slug}`}>
              {isHi ? "विवरण" : "Details"}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
