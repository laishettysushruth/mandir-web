import Link from "next/link";

const SUPPORTED = ["en", "hi"] as const;

function t(lang: string) {
  const isHi = lang === "hi";
  return {
    brand: isHi ? "मंदिर" : "Mandir",
    home: isHi ? "होम" : "Home",
    temples: isHi ? "मंदिर" : "Temples",
    donate: isHi ? "दान" : "Donate",
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langSafe = SUPPORTED.includes(lang as any) ? lang : "en";
  const tx = t(langSafe);

  return (
    <html lang={langSafe}>
      <body>
        <main className="container">
          <div className="nav">
            <div className="brand">
              <div className="logo" />
              <div>{tx.brand}</div>
            </div>

            <div className="navLinks">
              <Link href={`/${langSafe}`}>{tx.home}</Link>
              <Link href={`/${langSafe}/temples`}>{tx.temples}</Link>
              <Link href={`/${langSafe}/donate`}>{tx.donate}</Link>
            </div>

            <div className="lang">
              <Link className={`pill ${langSafe === "en" ? "active" : ""}`} href="/en">
                EN
              </Link>
              <Link className={`pill ${langSafe === "hi" ? "active" : ""}`} href="/hi">
                HI
              </Link>
            </div>
          </div>

          {children}

          <div className="footer">
            © {new Date().getFullYear()} Mandir Web (starter)
          </div>
        </main>
      </body>
    </html>
  );
}
