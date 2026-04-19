import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "../components/ContactWhatsAppCTA_Final";
import HoverButton from "../components/HoverButton";

export default function CargaVehiculosElectricosPage() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        backgroundColor: "#f9fafb",
        color: "#1f2937",
        position: "relative",
      }}
    >
      {/* Language flag */}
      <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
        <Link href="/en">
          <Image src="/flag-uk.png" alt="English" width={36} height={24} />
        </Link>
      </div>

      {/* Logo and subtitle */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
          padding: "0 1rem",
          textAlign: "center",
        }}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Innovo Logo"
            width={300}
            height={160}
            style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
          />
        </Link>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.1rem",
            lineHeight: "1.4",
            color: "#1f2937",
            maxWidth: "500px",
          }}
        >
          Instalaciones eléctricas · Iluminación · Climatización · Automación · Reparación
        </p>
      </div>

      {/* Navigation buttons */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        <HoverButton href="/">Inicio</HoverButton>
        <HoverButton href="/cargadores-electricos">Volver a Cargadores EV</HoverButton>
      </div>

      {/* Main content */}
      <section style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Cómo funciona la carga de autos eléctricos en Uruguay
        </h1>

        <p style={{ marginBottom: "1rem", maxWidth: "800px", marginInline: "auto" }}>
          Instalar un punto de carga para auto eléctrico no es complicado, pero sí hay varios factores
          importantes que muchas veces no se conocen antes de comprar el vehículo.
        </p>

        <p style={{ marginBottom: "2rem", maxWidth: "800px", marginInline: "auto" }}>
          En esta página explico de forma simple cómo funciona la carga en Uruguay, las opciones más
          comunes y qué se recomienda en instalaciones residenciales.
        </p>

        {/* 3 options */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "1.25rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}
          >
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", textAlign: "center" }}>
              16A (Schuko)
            </h2>
            <p style={{ marginBottom: "0.75rem" }}>
              Es el cargador más común y suele venir con el auto, pero en muchos casos es limitado.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              Muchos vehículos incluyen un cargador portátil de aproximadamente 10–13A (2–2,5 kW),
              pensado como solución básica. Funciona, pero carga lento.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              Para aprovechar mejor una instalación estándar, muchos usuarios optan por un cargador
              portátil de 16A (aprox. 3,5 kW), que permite una carga más rápida sin necesidad de una
              instalación compleja.
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              ✔ 13A (cargador básico): más lento, uso ocasional
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              ✔ 16A (portátil): mejor equilibrio entre velocidad y simplicidad
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              En todos los casos, es importante tener una línea dedicada y una instalación segura para
              evitar problemas de temperatura o cortes.
            </p>
            <Image
  src="/instalacion9-schuko.jpeg"
  alt="Instalación cargador Schuko 16A"
  width={400}
  height={300}
  style={{
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginTop: "1rem"
  }}
/>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "1.25rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}
          >
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", textAlign: "center" }}>
              32A (Toma industrial)
            </h2>
            <p style={{ marginBottom: "0.75rem" }}>
              Permite cargar más rápido, normalmente hasta unos 7,4 kW si la instalación y el auto lo
              permiten.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              Se utiliza con cargadores compatibles y requiere una instalación más robusta: cableado
              más grueso, protecciones adecuadas y buena puesta a tierra.
            </p>
            <p>
              Es una buena opción si se quiere reducir claramente el tiempo de carga sin pasar todavía
              a un wallbox fijo.
            </p>
            <Image
  src="/instalacion3-tomai.jpeg"
  alt="Instalación toma industrial 32A"
  width={400}
  height={300}
  style={{
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginTop: "1rem"
  }}
/>

<p style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "0.5rem" }}>
  Ejemplo de toma industrial para carga EV
</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "1.25rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}
          >
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", textAlign: "center" }}>
              Wallbox
            </h2>
            <p style={{ marginBottom: "0.75rem" }}>
              Es un cargador fijo que se instala en la pared.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              Es más cómodo, más seguro y gestiona mejor la carga del vehículo. Puede ser de 16A o 32A
              según la instalación disponible.
            </p>
            <p>
              Es la solución más completa, especialmente para uso diario y para quienes quieren una
              instalación más prolija y práctica.
            </p>
            <Image
  src="/instalacion18-wallbox.jpeg"
  alt="Instalación wallbox"
  width={400}
  height={300}
  style={{
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginTop: "1rem"
  }}
/>

<p style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "0.5rem" }}>
  Ejemplo de instalación con wallbox
</p>
          </div>
        </div>

        {/* UTE section */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto 2.5rem",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "1.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem", textAlign: "center" }}>
            Potencia contratada con UTE
          </h2>

          <p style={{ marginBottom: "0.75rem" }}>
            Uno de los puntos más importantes es la potencia contratada con UTE.
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            En la práctica, cuando se solicita carga para vehículo eléctrico, UTE suele trabajar con una
            potencia de alrededor de <strong>7 kW</strong>.
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            Es posible ir por encima de ese valor, pero normalmente implica procesos adicionales y una
            instalación más compleja, por lo que en la mayoría de los casos no se utiliza.
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            Por eso, la mayoría de las instalaciones residenciales se plantean en base a esa potencia.
          </p>

          <p style={{ marginBottom: "0.5rem" }}>
            ✔ Con 7 kW contratados, se puede instalar carga rápida
          </p>
          <p style={{ marginBottom: "0.5rem" }}>
            ✔ Pero se recomienda trabajar con una carga real de unos <strong>5,5–6 kW</strong>
          </p>
          <p style={{ marginBottom: "0.75rem" }}>
            ✔ Esto permite una carga eficiente sin generar problemas con el resto del consumo de la
            vivienda
          </p>

          <p style={{ marginTop: "1rem" }}>
            En la práctica, es una solución simple y suficiente para la gran mayoría de los casos.
          </p>
        </div>

        {/* Charge times */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto 2.5rem",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "1.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
            Tiempos de carga aproximados
          </h2>

          <p style={{ marginBottom: "0.75rem", textAlign: "left" }}>
            El tiempo de carga depende de dos cosas:
          </p>

          <div style={{ textAlign: "left", marginBottom: "1rem" }}>
  <p style={{ marginBottom: "0.35rem" }}>• La potencia de carga (kW)</p>
  <p>• El tamaño de la batería (kWh)</p>
</div>

          <p style={{ marginBottom: "1rem", textAlign: "left" }}>
            Como referencia, estos son tiempos aproximados para una carga completa:
          </p>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "520px",
                backgroundColor: "white",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f3f4f6" }}>
                  <th style={tableCellHeader}>Batería ↓ / Potencia →</th>
                  <th style={tableCellHeader}>2,2 kW</th>
                  <th style={tableCellHeader}>3,5 kW</th>
                  <th style={tableCellHeader}>5,5 kW</th>
                  <th style={tableCellHeader}>7,4 kW</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCell}>30 kWh</td>
                  <td style={tableCell}>~13–14 h</td>
                  <td style={tableCell}>~8–9 h</td>
                  <td style={tableCell}>~5–6 h</td>
                  <td style={tableCell}>~4 h</td>
                </tr>
                <tr>
                  <td style={tableCell}>40 kWh</td>
                  <td style={tableCell}>~18 h</td>
                  <td style={tableCell}>~11–12 h</td>
                  <td style={tableCell}>~7–8 h</td>
                  <td style={tableCell}>~5–6 h</td>
                </tr>
                <tr>
                  <td style={tableCell}>50 kWh</td>
                  <td style={tableCell}>~22–23 h</td>
                  <td style={tableCell}>~14–15 h</td>
                  <td style={tableCell}>~9–10 h</td>
                  <td style={tableCell}>~7 h</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1rem", textAlign: "left" }}>
            En la práctica, casi nunca se carga de 0% a 100%.
          </p>
          <p style={{ marginTop: "0.75rem", textAlign: "left" }}>
            Lo más común es cargar entre <strong>30% y 80%</strong>, lo que representa aproximadamente
            la mitad de la batería.
          </p>
          <p style={{ marginTop: "0.75rem", textAlign: "left" }}>
            Esto significa que los tiempos reales de carga suelen ser bastante menores que los valores
            máximos indicados arriba.
            </p>
            <p style={{ marginBottom: "1rem", textAlign: "left" }}>
                Como referencia, estos son tiempos aproximados según capacidad de batería y potencia de carga:
            </p>
        </div>

        {/* What affects installation */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto 2.5rem",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "1.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem", textAlign: "center" }}>
            Qué influye en la instalación
          </h2>

          <p style={{ marginBottom: "0.75rem" }}>
            Cada instalación es diferente. El costo y la solución dependen principalmente de:
          </p>

          <div style={{ maxWidth: "520px", margin: "0 auto" }}>
            <p style={{ marginBottom: "0.4rem" }}>• Distancia desde el contador o tablero</p>
            <p style={{ marginBottom: "0.4rem" }}>• Potencia disponible en la vivienda</p>
            <p style={{ marginBottom: "0.4rem" }}>• Tipo de cargador (16A o 32A)</p>
            <p style={{ marginBottom: "0.4rem" }}>• Estado de la instalación eléctrica existente</p>
            <p>• Acceso y dificultad del trabajo</p>
          </div>

          <p style={{ marginTop: "1rem" }}>
            Por ejemplo, una distancia de 15–20 metros ya puede influir bastante en el costo,
            especialmente en instalaciones de 32A.
          </p>
        </div>

        {/* What Innovo does */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto 2.5rem",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "1.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem", textAlign: "center" }}>
            Qué hacemos en Innovo
          </h2>

          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <p style={{ marginBottom: "0.5rem" }}>✔ Instalación de puntos de carga 16A y 32A</p>
            <p style={{ marginBottom: "0.5rem" }}>✔ Evaluación de la instalación existente</p>
            <p style={{ marginBottom: "0.5rem" }}>
              ✔ Recomendación de la mejor opción según uso real
            </p>
            <p style={{ marginBottom: "0.5rem" }}>✔ Instalaciones seguras y prolijas</p>
            <p>✔ Posibilidad de suministro de equipos, según disponibilidad</p>
          </div>

          <p style={{ marginTop: "1rem" }}>
            Cada caso se evalúa para asegurar una instalación correcta y segura a largo plazo.
          </p>
        </div>

        {/* Earthing */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto 2.5rem",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "1.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem", textAlign: "center" }}>
            Puesta a tierra
          </h2>

          <p style={{ marginBottom: "0.75rem" }}>
            La instalación del cargador se realiza utilizando la puesta a tierra existente de la
            vivienda.
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            En una instalación eléctrica, la puesta a tierra debe ser común a todo el sistema.
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            Instalar una jabalina independiente sin integrarla correctamente puede generar diferencias
            de potencial y afectar el funcionamiento de las protecciones.
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            Por eso, en cada caso se evalúa la puesta a tierra existente para asegurar una instalación
            segura y estable.
          </p>

          <p>
            <strong>Este es el criterio utilizado en instalaciones eléctricas estándar.</strong>
          </p>
        </div>

        {/* Differential */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto 2.5rem",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "1.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem", textAlign: "center" }}>
            Protección diferencial
          </h2>

          <p style={{ marginBottom: "0.75rem" }}>
            Para cargadores EV se recomienda el uso de diferencial tipo A Superinmunizado.
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            A diferencia de un diferencial común, que trabaja solo con corriente alterna, el tipo A
            también reconoce componentes de corriente continua generados por estos equipos.
          </p>

          <p>Esto mejora la estabilidad y evita disparos innecesarios.</p>
        </div>

        {/* What not */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto 2.5rem",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "1.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.35rem", marginBottom: "1rem", textAlign: "center" }}>
            Importante
          </h2>

          <p style={{ marginBottom: "0.75rem" }}>
            No realizo asesoramiento técnico completo por WhatsApp sin ver la instalación.
          </p>

          <p>
            Para poder recomendar correctamente, es necesario conocer la instalación real, la potencia
            disponible y el uso previsto.
          </p>
        </div>

        {/* CTA text */}
        <p style={{ marginBottom: "2rem", maxWidth: "760px", marginInline: "auto" }}>
          Si estás por comprar un auto eléctrico o ya lo tenés, puedo ayudarte a elegir la mejor
          solución y realizar la instalación.
        </p>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          marginTop: "2rem",
          marginBottom: "1rem",
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

const tableCellHeader = {
  border: "1px solid #d1d5db",
  padding: "0.75rem",
  textAlign: "center",
  fontWeight: "700",
};

const tableCell = {
  border: "1px solid #d1d5db",
  padding: "0.75rem",
  textAlign: "center",
};