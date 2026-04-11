//* JSON con la estructura del sidebar

import type { INodeData } from "../interfaces/INodeData.interface";
import { Page } from "../pages/Page";

export const sidebarData: INodeData = {
  title: "Sidebar Menu",
  children: [
    {
      title: "Home",
      link: "/",
      component: () => (
        <Page title="Home" paragraph="Bienvenido a la página principal" />
      ),
      children: [],
    },
    {
      title: "Productos",
      children: [
        {
          title: "Electrónica",
          link: "/productos/electronica",
          children: [
            {
              title: "Smartphones",
              link: "/productos/electronica/smartphones",
              component: () => (
                <Page
                  title="Smartphones"
                  paragraph="Última tecnología en dispositivos móviles"
                />
              ),
              children: [],
            },
            {
              title: "Laptops",
              link: "/productos/electronica/laptops",
              component: () => (
                <Page
                  title="Laptops"
                  paragraph="Computadoras portátiles de alto rendimiento"
                />
              ),
              children: [],
            },
            {
              title: "Accesorios",
              link: "/productos/electronica/accesorios",
              component: () => (
                <Page
                  title="Accesorios"
                  paragraph="Accesorios para tus dispositivos electrónicos"
                />
              ),
              children: [],
            },
          ],
        },
        {
          title: "Ropa y Moda",
          link: "/productos/ropa",
          children: [
            {
              title: "Hombres",
              link: "/productos/ropa/hombres",
              component: () => (
                <Page
                  title="Ropa Hombres"
                  paragraph="Colección exclusiva para hombres"
                />
              ),
              children: [],
            },
            {
              title: "Mujeres",
              link: "/productos/ropa/mujeres",
              component: () => (
                <Page
                  title="Ropa Mujeres"
                  paragraph="Colección exclusiva para mujeres"
                />
              ),
              children: [],
            },
            {
              title: "Niños",
              link: "/productos/ropa/ninos",
              component: () => (
                <Page
                  title="Ropa Niños"
                  paragraph="Prendas cómodas y divertidas para niños"
                />
              ),
              children: [],
            },
          ],
        },
        {
          title: "Hogar y Jardín",
          link: "/productos/hogar",
          children: [
            {
              title: "Muebles",
              link: "/productos/hogar/muebles",
              component: () => (
                <Page
                  title="Muebles"
                  paragraph="Muebles modernos y funcionales"
                />
              ),
              children: [],
            },
            {
              title: "Decoración",
              link: "/productos/hogar/decoracion",
              component: () => (
                <Page
                  title="Decoración"
                  paragraph="Elementos decorativos para tu hogar"
                />
              ),
              children: [],
            },
          ],
        },
      ],
    },
    {
      title: "Servicios",
      children: [
        {
          title: "Consultoría",
          link: "/servicios/consultoria",
          children: [
            {
              title: "Empresarial",
              link: "/servicios/consultoria/empresarial",
              component: () => (
                <Page
                  title="Consultoría Empresarial"
                  paragraph="Consultoría especializada en negocios"
                />
              ),
              children: [],
            },
            {
              title: "Tecnológica",
              link: "/servicios/consultoria/tecnologica",
              component: () => (
                <Page
                  title="Consultoría Tecnológica"
                  paragraph="Asesoramiento en soluciones tecnológicas"
                />
              ),
              children: [],
            },
          ],
        },
        {
          title: "Soporte Técnico",
          link: "/servicios/soporte",
          component: () => (
            <Page title="Soporte Técnico" paragraph="Asistencia técnica 24/7" />
          ),
          children: [],
        },
      ],
    },
    {
      title: "Blog",
      link: "/blog",
      children: [
        {
          title: "Tecnología",
          link: "/blog/tecnologia",
          component: () => (
            <Page
              title="Blog - Tecnología"
              paragraph="Artículos sobre tecnología e innovación"
            />
          ),
          children: [],
        },
        {
          title: "Negocios",
          link: "/blog/negocios",
          component: () => (
            <Page
              title="Blog - Negocios"
              paragraph="Consejos y análisis del mundo empresarial"
            />
          ),
          children: [],
        },
      ],
    },
    {
      title: "Contacto",
      link: "/contacto",
      component: () => (
        <Page title="Contacto" paragraph="Ponte en contacto con nosotros" />
      ),
      children: [],
    },
    {
      title: "Configuración",
      children: [
        {
          title: "Perfil",
          link: "/configuracion/perfil",
          component: () => (
            <Page title="Perfil" paragraph="Gestiona tu perfil de usuario" />
          ),
          children: [],
        },
        {
          title: "Preferencias",
          link: "/configuracion/preferencias",
          component: () => (
            <Page
              title="Preferencias"
              paragraph="Configura tus preferencias personales"
            />
          ),
          children: [],
        },
        {
          title: "Privacidad",
          link: "/configuracion/privacidad",
          component: () => (
            <Page
              title="Privacidad"
              paragraph="Controla tu privacidad y seguridad"
            />
          ),
          children: [],
        },
      ],
    },
  ],
};
