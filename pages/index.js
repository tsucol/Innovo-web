import React, { useState } from "react";
import ContactCTA from "../components/ContactWhatsAppCTA_Final";
import HoverCardButton from "../components/HoverCardButton";
import HoverButton from "../components/HoverButton";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaSnowflake, FaChargingStation, FaTools, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9fafb', color: '#1f2937', position: 'relative' }}>
      {/* Flag link */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <Link href="/en">
          <Image src="/flag-uk.png" alt="English" width={36} height={24} />
        </Link>
      </div>

      {/* Logo and header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1rem',
        marginBottom: '3rem',
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Innovo Logo"
            width={300}
            height={160}
            style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
          />
        </Link>
        <p style={{
          marginTop: '1rem',
          fontSize: '1.1rem',
          lineHeight: '1.4',
          color: '#1f2937',
          maxWidth: '500px'
        }}>
          Instalaciones eléctricas · Iluminación · Climatización · Automación · Reparación
        </p>
      </div>

      {/* Navigation buttons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <HoverButton href="/about">Sobre Nosotros</HoverButton>
      </div>

      {/* Services grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <HoverCardButton href="/instalaciones-electricas">
          <ServiceCard
            icon={<FaBolt />}
            title="Instalaciones Eléctricas"
            desc="Montaje y reparación de instalaciones eléctricas residenciales y comerciales."
          />
        </HoverCardButton>

        <HoverCardButton href="/aire-acondicionado">
          <ServiceCard
            icon={<FaSnowflake />}
            title="Aire Acondicionado"
            desc="Instalación, recarga y mantenimiento de aires acondicionados."
          />
        </HoverCardButton>

        <HoverCardButton href="/cargadores-electricos">
          <ServiceCard
            icon={<FaChargingStation />}
            title="Cargadores para Autos Eléctricos"
            desc="Instalación de cargadores y asesoramiento técnico."
          />
        </HoverCardButton>

        <HoverCardButton href="/otros-servicios">
          <ServiceCard
            icon={<FaTools />}
            title="Otros Servicios"
            desc="Montaje de saunas, reparación de heladeras, y soluciones a medida."
          />
        </HoverCardButton>
      </section>

{/* Differentiation Section */}
<section className="differentiation">
  <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
    ¿Por qué elegir Innovo?
  </h2>

  <div className="diff-wrap">
    {/* Stamp */}
    <div className="stamp">
      <Image src="/Innovo-certif.png" alt="Sello Innovo" width={160} height={160} />
    </div>

    {/* Checklist */}
    <ul className="checklist">
      <li>✅ <span>Instalación certificada Innovo</span></li>
      <li>✅ <span>Chequeo de instalación eléctrica</span></li>
      <li>✅ <span>Seguridad y prolijidad en cada trabajo</span></li>
      <li>✅ <span>Garantía en cada instalación</span></li>
    </ul>
  </div>

  <style jsx>{`
    .diff-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
    .checklist {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
      line-height: 1.8;
    }
    .checklist li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .checklist li span {
      font-size: 1.05rem;
      font-weight: 600;
    }

    /* Mobile: stack, shrink seal, widen text */
    @media (max-width: 640px) {
      .diff-wrap {
        flex-direction: column-reverse; /* checklist first, stamp below */
        gap: 1rem;
      }
      .stamp :global(img) {
        width: 120px !important;
        height: 120px !important;
      }
      .checklist {
        width: 100%;
        max-width: 420px;
      }
      .checklist li span {
        font-size: 1.1rem;
      }
    }
  `}</style>
</section>

      {/* SEO / Location Keywords */}
      <section style={{ margin: '2rem 0', textAlign: 'center', color: '#4b5563' }}>
        <p>
          Innovo: Instalación de aire acondicionado en Ciudad de la Costa, Atlántida y alrededores.
        </p>
      </section>

      {/* Reviews / Testimonials */}
<section style={{ margin:'4rem 0', textAlign:'center' }}>
  <h2 style={{ fontSize:'1.5rem', marginBottom:'1.5rem' }}>Nuestros clientes opinan</h2>
  <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem', maxWidth:'600px', margin:'0 auto' }}>
    <div style={{ background:'white', padding:'1rem', borderRadius:'8px', boxShadow:'0 2px 6px rgba(0,0,0,0.1)', textAlign:'left' }}>
      ⭐⭐⭐⭐⭐ “Me instalaron el aire en pocas horas y dejaron todo funcionando perfecto, incluso limpiaron el lugar.” – Laura M.
    </div>
    <div style={{ background:'white', padding:'1rem', borderRadius:'8px', boxShadow:'0 2px 6px rgba(0,0,0,0.1)', textAlign:'left' }}>
      ⭐⭐⭐⭐⭐ “Me revisaron la instalación eléctrica antes de montar el equipo, me dio mucha confianza.” – Andrés R.
    </div>
    <div style={{ background:'white', padding:'1rem', borderRadius:'8px', boxShadow:'0 2px 6px rgba(0,0,0,0.1)', textAlign:'left' }}>
      ⭐⭐⭐⭐⭐ “El técnico me explicó cómo usar el control y el mantenimiento básico. Muy atentos.” – Silvia G.
    </div>
  </div>
</section>

      {/* Visual Proof - Real photos */}
      <section style={{ margin: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Nuestros Trabajos</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <Image src="/instalacion1.jpeg" alt="Instalación Innovo 1" width={400} height={250} style={{ borderRadius: '8px' }} />
          <Image src="/instalacion2.jpeg" alt="Instalación Innovo 2" width={400} height={250} style={{ borderRadius: '8px' }} />
          <Image src="/instalacion3.jpg" alt="Instalación Innovo 3" width={400} height={250} style={{ borderRadius: '8px' }} />
          <Image src="/instalacion4.jpeg" alt="Instalación Innovo 4" width={400} height={250} style={{ borderRadius: '8px' }} />
          <Image src="/instalacion5.jpeg" alt="Instalación Innovo 5" width={400} height={250} style={{ borderRadius: '8px' }} />
          <Image src="/instalaciones6.jpg" alt="Instalación Innovo 6" width={400} height={250} style={{ borderRadius: '8px' }} />
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

function ServiceCard({ icon, title, desc, hovered }) {
  return (
    <div style={{
      backgroundColor: hovered ? '#f3f4f6' : 'white',
      borderRadius: '8px',
      padding: '1rem',
      boxShadow: hovered
        ? '0 6px 12px rgba(0,0,0,0.15)'
        : '0 2px 6px rgba(0,0,0,0.1)',
      transform: hovered ? 'scale(1.03)' : 'scale(1)',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    }}>
      <div style={{ marginBottom: '0.5rem', color: '#0284c7' }}>{icon}</div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}