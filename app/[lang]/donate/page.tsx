export default async function Donate({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHi = lang === "hi";

  return (
    <>
      <div className="hero">
        <h1>{isHi ? "दान" : "Donate"}</h1>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          {isHi
            ? "यह UI स्कैफोल्ड है। Razorpay इंटीग्रेशन अगला चरण है।"
            : "This is UI scaffold. Razorpay integration is the next step."}
        </p>
      </div>

      <div className="grid">
        <section className="card">
          <h3>{isHi ? "राशि" : "Amount"}</h3>
          <p>{isHi ? "उदाहरण: ₹101, ₹501, ₹1100" : "Example: ₹101, ₹501, ₹1100"}</p>
          <a className="btn" href="#">
            {isHi ? "Razorpay (अगला चरण)" : "Razorpay (next)"}
          </a>
        </section>

        <section className="card">
          <h3>{isHi ? "रसीद" : "Receipt"}</h3>
          <p>{isHi ? "पेमेंट के बाद PDF रसीद जनरेट होगी।" : "After payment, a PDF receipt will be generated."}</p>
        </section>
      </div>
    </>
  );
}
