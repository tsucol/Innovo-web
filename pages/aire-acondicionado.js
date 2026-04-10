import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "../components/ContactWhatsAppCTA_Final";
import HoverButton from "../components/HoverButton";

export default function AireAcondicionadoPage() {
  const galleryImages = Array.from({ length: 24 }, (_, i) => `/Aire${i + 1}.jpeg`);

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
        <p style={{ marginBottom: '1rem' }}>
  Instalación, mantenimiento y recarga de aire acondicionado split para hogares, oficinas y comercios.
</p>
<p style={{ marginBottom: '2rem' }}>
  Trabajamos con equipos nuevos, recambio de equipos antiguos y asesoramiento técnico sobre potencia y ubicación.
</p>

<p style={{ marginBottom: '2rem', fontWeight: '600' }}>
  Instalaciones prolijas, seguras y pensadas para durar.
</p>
        
        <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px', marginBottom: '2rem' }}>
          <li>✔ Instalación de aires acondicionados split</li>
          <li>✔ Recarga de gas refrigerante</li>
          <li>✔ Reubicación de equipos</li>
          <li>✔ Mantenimiento preventivo</li>
          <li>✔ Limpieza de filtros y control de rendimiento</li>
          <li>✔ Asesoramiento técnico y elección del equipo</li>
        </ul>
        <div
  style={{
    maxWidth: '600px',
    margin: '0 auto 2.5rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.25rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    textAlign: 'left'
  }}
>
  <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>
    Precios orientativos
  </h2>

  <p style={{ marginBottom: '0.75rem' }}>
    ✔ Instalación de aire acondicionado split: <strong>desde $3.500</strong>
  </p>

  <p style={{ marginBottom: '0.75rem' }}>
    ✔ Limpieza de aire acondicionado: <strong>$1.900</strong> y <strong>$1.500 equpos adicionales</strong>
  </p>

  <p style={{ marginBottom: '0.75rem' }}>
    ✔ Otros trabajos, recargas o reubicaciones: <strong>según evaluación</strong>
  </p>
</div>
      </section>

      {/* Gallery placeholder */}
      <section style={{ maxWidth: '900px', margin: '2rem auto', textAlign: 'center' }}>
        <h2>Galería de trabajos anteriores</h2>
      
       <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  }}
>
  {galleryImages.map((src, index) => (
    <Image
      key={index}
      src={src}
      alt={`Instalación de aire acondicionado ${index + 1}`}
      width={400}
      height={250}
      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
    />
  ))}
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