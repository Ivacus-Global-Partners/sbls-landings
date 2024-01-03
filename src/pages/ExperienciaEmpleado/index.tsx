import React from 'react'
import BodyInfo from '../../components/BodyInfo1';
import IconsInfo from '../../components/IconsInfo';
import InfoForm from '../../components/infoForm';
import ProgramObjetives from '../../components/ProgramObjetives';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardsClaustro from '../../components/CardsClaustro';
import BodyInfo2 from '../../components/BodyInfo2';
import DownloadIcon from '@mui/icons-material/Download';

const ExperienciaEmpleado: React.FC = () => {
  const href = 'https://sagardoyschool.com/archivos/certificaci%C3%B3n-experto-experiencia-de-empleado.pdf';
  const download = 'certificación-experto-experiencia-de-empleado.pdf';
  const claustro = [
    {
      img: 'https://i.ibb.co/ydpzjwr/IGNACIO-CEA-FORNIES.png',
      name: 'Ignacio Cea Fornies',
      job: <>Director Global de Nuevos Modelos de Negocio de <strong>Prosegur</strong> Cash Miembro del Consejo Asesor de <strong>Cionet</strong></>
    },
    {
      img: 'https://i.ibb.co/86jWJ2b/LOURDES-CENTENO.png',
      name: 'Lourdes Centeno',
      job: <>Socia responsable de Derecho Societario, Gobierno Corporativo y Mercado de Capitales en <strong>EY Abogados</strong></>
    },
    {
      img: 'https://i.ibb.co/M6dq2KY/i-NIGO-SAGARODOY.png',
      name: 'Iñigo Sagardoy',
      job: <>Presidente <br /> <strong>Sagardoy Abogados</strong></>
    },
    {
      img: 'https://i.ibb.co/NS4xW2h/CARMEN-GOMEZ-BARRERA-1.png',
      name: 'Carmen Gómez de Barreda',
      job: <>Miembro del Consejo de <strong>Red Eléctrica, Mutua Madrileña y Grupo Antolín</strong></>
    },
    {
      img: 'https://i.ibb.co/Qj0xXPy/1685789467589.png',
      name: 'Tomás Pereda',
      job: 'HR Senior Advisor | Subdirector General en Fundación máshumano | LinkedIn Top Voices 2020 | Content Creator | Conferenciante'
    },
  ]

  const texto = <>
    ¿Sabías que el impacto emocional negativo en los trabajadores representa un aumento del 17% más de bajas laborales? trabajar en la <strong>#ExperienciadeEmpleado</strong> es imprescindible para revertir estos datos. Cambia tu modelo de relación con el empleado, por uno basado en la experiencia con nuestra Certificación Experto.
    <br /><br /><br /><br />
  </>;

  return (
    <div>
      <Header image={"https://i.ibb.co/gWmLHBL/header-certificacion-experto.png"} href={href} download={download} />
      <InfoForm href={href} download={download} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo
        title={<p style={{ color: '#980628', margin: 0 }}>Hacia un modelo transformador</p>}
        body={texto}
      />
      <BodyInfo2
        logoAlt="Lukkap"
        logo="https://i.ibb.co/PT7cqGn/Imagen-5.png"
        img={"https://i.ibb.co/FKmwR9g/1582485296575.png"}
        name={"José Luis Pascual "}
        job={<>
          Director de la Certificación Experto en Experiencia de Empleado <br />
          Socio Director de Experiencia Empleado en <strong>Lukkap</strong>
        </>}
        quote={"La gestión de personas está evolucionando hacía la gestión de la experiencia. El empleado ha adquirido un papel protagonista en la relación profesional y ahora se empiezan a tener en cuenta sus necesidades para construir soluciones de gestión que tengan más impacto en su compromiso y, con ello, un retorno mayor en su rendimiento."}
      />
      <IconsInfo dates={['21 febrero, 2024', '26 junio, 2024']} duration={
        <>
          5 meses 2 días al mes<br />
          Martes de 17:00h-20:00h
        </>
      }
        language={"Español"}
        place={
          <>
            C\Velázquez 86D<br />
            28006 | Madrid<br />
          </>
        }
        format={
          <>
            Presencial<br />
            & Remoto<br />
          </>
        }
      />
      <ProgramObjetives objetives={{
        "Profesionalizar": "la función de la experiencia de empleado como modelo de transformación, desde y para las personas.",
        "Capacitar": "a los profesionales del área de RR.HH. para que puedan asentar las bases del diseño y desarrollo de un modelo de gestión centrado en la experiencia de los empleados.",
        "Adquirir": "los conocimientos de un modelo que impacta, directamente, sobre la experiencia de cliente y los resultados de las organizaciones."
      }} />
      <CardsClaustro claustro={claustro} />
      <Footer href={href} download={download} />
    </div>
  )
}

export default ExperienciaEmpleado;