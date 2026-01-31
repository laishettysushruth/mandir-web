type Temple = {
  slug: string;
  name_en: string;
  name_hi: string;
  desc_en: string;
  desc_hi: string;
  timings_en: string;
  timings_hi: string;
};

const TEMPLES: Temple[] = [
  {
    slug: "jagannath",
    name_en: "Shri Jagannath Temple",
    name_hi: "श्री जगन्नाथ मंदिर",
    desc_en: "Temple detail page scaffold.",
    desc_hi: "मंदिर विवरण पेज (स्कैफोल्ड)।",
    timings_en: "5:00 AM – 10:00 PM",
    timings_hi: "सुबह 5:00 – रात 10:00",
  },
  {
    slug: "tirupati",
    name_en: "Sri Venkateswara Temple",
    name_hi: "श्री वेंकटेश्वर मंदिर",
    desc_en: "Temple detail page scaffold.",
    desc_hi: "मंदिर विवरण पेज (स्कैफोल्ड)।",
    timings_en: "4:00 AM – 11:00 PM",
    timings_hi: "सुबह 4:00 – रात 11:00",
  },
];

export default async function TempleDetail({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isHi = lang === "hi";

  const temple = TEMPLES.find((t) => t.slug === slug);
  if (!temple) {
    return (
      <div className="hero">
        <h1>{isHi ? "मंदिर नहीं मिला" : "Temple not found"}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="hero">
        <h1>{isHi ? temple.name_hi : temple.name_en}</h1>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          {isHi ? temple.desc_hi : temple.desc_en}
        </p>
      </div>

      <div className="grid">
        <section className="card">
          <h3>{isHi ? "समय" : "Timings"}</h3>
          <p>{isHi ? temple.timings_hi : temple.timings_en}</p>
        </section>

        <section className="card">
          <h3>{isHi ? "लाइव दर्शन" : "Live Darshan"}</h3>
          <p>{isHi ? "यहाँ लाइव स्ट्रीम लिंक/एंबेड आएगा।" : "Live stream link/embed will go here."}</p>
          <a className="btn" href="#">
            {isHi ? "देखें (डेमो)" : "Watch (demo)"}
          </a>
        </section>
      </div>
    </>
  );
}
