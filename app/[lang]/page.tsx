import Link from "next/link";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHi = lang === "hi";

  return (
    <>
      <div className="hero">
        <h1>{isHi ? "दर्शन, दान, और सेवा" : "Darshan, Donations, and Seva"}</h1>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          {isHi
            ? "यह एक शुरुआती प्रोजेक्ट है—असली फीचर्स (पेमेंट, लॉगिन) कॉन्फ़िगरेशन के बाद जुड़ेंगे।"
            : "This is a starter—real features (payments, login) come after configuration."}
        </p>
      </div>

      <div className="grid">
        <section className="card">
          <h3>{isHi ? "मंदिर" : "Temples"}</h3>
          <p>
            {isHi
              ? "मंदिर सूची, समय, आरती, और विवरण।"
              : "Temple listing, timings, aarti, and details."}
          </p>
          <Link className="btn" href={`/${lang}/temples`}>
            {isHi ? "देखें" : "Explore"}
          </Link>
        </section>

        <section className="card">
          <h3>{isHi ? "दान" : "Donate"}</h3>
          <p>
            {isHi
              ? "रसीद के साथ सुरक्षित ऑनलाइन दान (स्कैफोल्ड)।"
              : "Secure online donation with receipt (scaffold)."}
          </p>
          <Link className="btn" href={`/${lang}/donate`}>
            {isHi ? "दान करें" : "Donate"}
          </Link>
        </section>
      </div>
    </>
  );
}
