import React, { useState } from "react";
import ContactCTA from "../../components/ContactWhatsAppCTA_Final";
import HoverButton from "../../components/HoverButton";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaSnowflake, FaChargingStation, FaTools, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#f9fafb', color: '#1f2937', position: 'relative' }}>
      {/* Flag link */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <Link href="/">
          <Image src="/flag-es.png" alt="English" width={36} height={24} />
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
    Electrical installations · AC · EV chargers · Repairs
  </p>
  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image 
    src="/flag-uk.png" 
    alt="English" 
    width={48} 
    height={32} 
    style={{ display: 'block', margin: '0 auto 0.5rem' }}
  />
  <p 
    style={{ 
      fontSize: '1.5rem', 
      lineHeight: '1.4', 
      color: '#1f2937', 
      margin: 0,
      fontWeight: 600 
    }}
  >
    English speaking Technician
  </p>
</div>
</div>

<div style={{
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
  marginBottom: '2rem'
}}>
  
  <HoverButton href="/en/about">About Us</HoverButton>
</div>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <ServiceCard icon={<FaBolt />} title="Electrical Installations" desc="Installation and maintenance of electrical systems for homes and businesses." />
        <ServiceCard icon={<FaSnowflake />} title="Air Conditioning" desc="Installation, refills, and servicing of AC units." />
        <ServiceCard icon={<FaChargingStation />} title="EV Chargers" desc="We install home and business EV chargers with professional guidance." />
        <ServiceCard icon={<FaTools />} title="Other Services" desc="Sauna installation, refrigerator repair, and custom electrical solutions." />
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
        <ContactCTA />
      
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <div style={{ marginBottom: '0.5rem', color: '#0284c7' }}>{icon}</div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
