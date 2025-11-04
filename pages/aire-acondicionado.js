import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "../components/ContactWhatsAppCTA_Final";
import HoverButton from "../components/HoverButton";

export default function AireAcondicionadoPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9fafb', color: '#1f2937', position: 'relative' }}>
      
      {/* Language flag */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <Link href="/en">
          <Image src="/flag-uk.png" alt="English" width={36} height={24} />
        </Link>
      </div>

      {/* Logo and subtitle */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem', marginBottom: '2rem', padding: '0 1rem', textAlign: 'center'
      }}>
        <Link href="/">
          <Image src="/logo.png" alt="Innovo Logo" width={300} height={160} style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }} />
        </Link>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.4', color: '#1f2937', maxWidth: '500px' }}>
          Instalaciones eléctricas · Iluminación · Climatización · Automación · Reparación
        </p>
      </div>

      {/* Navigation buttons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <HoverButton href="/">Inicio</HoverButton>
        <HoverButton href="/about">Sobre Nosotros</HoverButton>
      </div>

      {/* Main content */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Aire Acondicionado</h1>
        <p style={{ marginBottom: '2rem' }}>
          Ofrecemos instalación, mantenimiento y recarga de unidades de aire acondicionado split para hogares, oficinas y comercios. Trabajamos con equipos nuevos, hacemos recambios de equipos antiguos y ofrecemos asesoramiento técnico sobre potencia adecuada y ubicación.
        </p>
        {/* 🔥 PROMO BANNER – paste below your <h1> or above the gallery */}
<section className="promo">
  <div className="card">
    <span className="ribbon">PROMO</span>

    <h3>🎉 Promo especial de Innovo – Anticipando el verano ☀️</h3>

    <p className="lead">
      Por cada <b>20 instalaciones nuevas</b> de aire acondicionado que realizamos,
      hacemos un sorteo entre los 20 clientes participantes, y el ganador recibe la
      <b> devolución total del costo de su instalación</b>. 💸
    </p>

    <ul className="promo-bullets">
  <li>✅ Participás automáticamente con tu instalación nueva.</li>
  <li>✅ Sorteo publicado en <strong>WhatsApp</strong> y <strong>Instagram</strong> con total transparencia.</li>
</ul>

    <div className="fine">
      <p>Promoción válida solo para clientes de instalaciones nuevas.</p>
      <p>Sorteo con fines publicitarios. Innovo no solicita pagos adicionales para participar.</p>
    </div>

    <a
  href="https://wa.me/59899318273?text=Hola%20Innovo%2C%20quiero%20pedir%20presupuesto%20para%20una%20instalaci%C3%B3n%20de%20aire%20acondicionado."
  target="_blank"
  rel="noopener noreferrer"
  className="cta"
>
  <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true" style={{marginRight: '8px'}}>
    <path fill="#25D366" d="M19.11 17.07c-.27-.14-1.6-.79-1.85-.88-.25-.1-.44-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.35-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.86.14.18 1.95 2.98 4.72 4.18.66.28 1.18.45 1.58.57.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
    <path fill="#25D366" d="M26.6 5.4C23.9 2.7 20.2 1.2 16.2 1.2 8.9 1.2 3 7.1 3 14.4c0 2.36.62 4.66 1.79 6.69L3 31l10.1-1.77c1.94 1.06 4.15 1.62 6.4 1.62 7.3 0 13.2-5.9 13.2-13.2 0-3.9-1.5-7.6-4.2-10.33zM19.5 28.1c-2.04 0-4.03-.54-5.77-1.56l-.41-.24-6.01 1.05 1.09-5.87-.25-.42C6.08 19.1 5.5 16.8 5.5 14.4c0-5.9 4.8-10.7 10.7-10.7s10.7 4.8 10.7 10.7-4.8 10.7-10.7 10.7z"/>
  </svg>
  <span>Pedí presupuesto por WhatsApp</span>
</a>
  </div>

  <style jsx>{`
    :root { --inv-blue:#0284c7; --ink:#1f2937; --bg:#f8fafc; }

    .promo {
      margin: 2.5rem auto 2rem;
      max-width: 880px;
      padding: 0 1rem;
    }

    .card {
      position: relative;
      padding: 1.75rem 1.25rem 1.25rem;
      border-radius: 16px;
      background: linear-gradient(180deg, #ffffff, #f9fbff);
      box-shadow: 0 12px 30px rgba(2,132,199,.12), 0 2px 8px rgba(0,0,0,.06);
      border: 1px solid rgba(2,132,199,.18);
      overflow: hidden;
      animation: glow 2.4s ease-in-out infinite;
    }

    /* Subtle animated border light */
    .card::after {
      content: "";
      position: absolute;
      inset: -2px;
      border-radius: 18px;
      background: conic-gradient(from 180deg,
        rgba(2,132,199,.0),
        rgba(2,132,199,.25),
        rgba(2,132,199,.0) 60%);
      filter: blur(12px);
      z-index: 0;
      animation: sweep 5s linear infinite;
      pointer-events: none;
    }

    .ribbon {
      position: absolute;
      top: 12px;
      right: -40px;
      transform: rotate(18deg);
      background: var(--inv-blue);
      color: #fff;
      font-weight: 800;
      letter-spacing: .08em;
      padding: .35rem 2.25rem;
      border-radius: 8px;
      box-shadow: 0 6px 16px rgba(2,132,199,.35);
      z-index: 2;
    }

    h3 {
      margin: 0 0 .75rem;
      text-align: center;
      color: var(--ink);
      font-size: clamp(1.2rem, 2.4vw, 1.5rem);
      font-weight: 800;
    }

    .lead {
      margin: 0 auto 1rem;
      max-width: 62ch;
      text-align: center;
      color: #334155;
      font-size: 1.05rem;
    }

    .bullets {
      margin: .5rem auto 1rem;
      max-width: 56ch;
      list-style: none;
      padding: 0;
      color: #0f172a;
    }
    .bullets li {
      display: flex;
      gap: .5rem;
      align-items: flex-start;
      margin: .35rem 0;
      line-height: 1.5;
    }

    .fine {
      margin: .75rem auto 1.25rem;
      max-width: 60ch;
      font-size: .92rem;
      color: #475569;
      text-align: center;
    }
    .fine p { margin: .2rem 0; }

    .cta{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .85rem 1.25rem;
  border-radius: 9999px;
  background: linear-gradient(180deg, rgba(255,255,255,.75), rgba(255,255,255,.55));
  box-shadow: 0 10px 30px rgba(20,60,120,.10), inset 0 1px 0 rgba(255,255,255,.6);
  text-decoration: none;
  margin-top: 1rem;
  color: #075E54;            /* visible text color */
  font-weight: 700;
  letter-spacing: .1px;
}
.cta:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 34px rgba(20,60,120,.12), inset 0 3px 0 rgba(255,255,255,.7);
}
    .cta:active { transform: translateY(0); }

    @keyframes glow {
      0%, 100% { box-shadow: 0 12px 30px rgba(2,132,199,.12), 0 2px 8px rgba(0,0,0,.06); }
      50%      { box-shadow: 0 14px 34px rgba(2,132,199,.18), 0 3px 10px rgba(0,0,0,.07); }
    }
    @keyframes sweep {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Mobile tweaks */
    @media (max-width: 640px) {
      .ribbon {
        right: -28px;
        transform: rotate(16deg) scale(.92);
      }
      .lead { font-size: 1rem; }
      .cta  { width: 100%; text-align: center; }
    }
      .bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem 0;
}
.bullets li {
  margin: 0.35rem 0;
  text-align: center;
}

/* Make the “Sorteo publicado…” line wrap nicely and stay centered */
.social-line{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .35rem; /* keeps “en/WhatsApp/y/Instagram” from splitting awkwardly */
}
.social-line b{ font-weight: 700; }
  .promo-bullets {
    list-style: none;
    margin: 1rem 0 1.25rem;
    padding: 0;
    text-align: center;
  }
  .promo-bullets li {
    display: inline-block;
    text-align: left;
    margin: 0.35rem 0;
    padding-left: 1.2rem;
    position: relative;
    max-width: 90%;
    line-height: 1.6;
  }
  .promo-bullets li::before {
    content: "✅";
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(1px);
  }
  @media (max-width: 640px) {
    .promo-bullets li {
      display: block;
      text-align: center;
      padding-left: 0;
    }
    .promo-bullets li::before {
      position: static;
      margin-right: 0.35rem;
    }
  }
  `}</style>
</section>
        <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px', marginBottom: '2rem' }}>
          <li>✔ Instalación de aires acondicionados split</li>
          <li>✔ Recarga de gas refrigerante</li>
          <li>✔ Reubicación de equipos</li>
          <li>✔ Mantenimiento preventivo</li>
          <li>✔ Limpieza de filtros y control de rendimiento</li>
          <li>✔ Asesoramiento técnico y elección del equipo</li>
        </ul>
      </section>

      {/* Gallery placeholder */}
      <section style={{ maxWidth: '900px', margin: '2rem auto', textAlign: 'center' }}>
        <h2>Galería de trabajos anteriores</h2>
        <p style={{ marginBottom: '1rem' }}>Muy pronto podrás ver fotos de nuestras instalaciones reales aquí.</p>
        <div style={{
          height: '200px',
          backgroundColor: '#e5e7eb',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#6b7280'
        }}>
          Galería próximamente...
        </div>
      </section>
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    marginTop: '2rem',
    marginBottom: '1rem',
  }}
>
  <a
    href="https://www.facebook.com/profile.php?id=61581763284757"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src="/facebook.svg" alt="Facebook" width={34} height={34} />
  </a>

  <a
    href="https://www.instagram.com/innovoinstalaciones/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src="/instagram.svg" alt="Instagram" width={34} height={34} />
  </a>
</div>
      {/* WhatsApp CTA */}
      <ContactCTA />
    </div>
  );
}