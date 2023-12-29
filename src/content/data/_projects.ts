// Interfaz para la estructura de datos de cada proyecto
export type ProjectData = {
  title: string;
  description: string;
  publishDate: Date;
  tags: string[];
  img: string;
  img_alt: string;
}

export type Project = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: ProjectData;
}

// Declaración de la constante projects con el tipo Project[]
export const projects: Project[] = [
  {
    id: "1",
    slug: "tasty-doughs",
    body: " Bienvenido a Tasty Dough, la solución integral que revoluciona la gestión de pedidos de tapas de empanadas. Diseñada con innovación y desarrollada completamente por nuestro equipo, esta aplicación web progresiva combina la potencia de Flutter y Dart en el frontend con JavaScript, Node.js y PostgreSQL en el backend, brindándote una experiencia única y eficiente. En Tasty Dough, simplificamos el proceso de registro para clientes, permitiéndote acceder a nuestra plataforma una vez que la fábrica haya revisado y aprobado tu cuenta. Este paso garantiza un acceso seguro y controlado, brindándote tranquilidad desde el principio. Con nuestra interfaz intuitiva, realizar pedidos personalizados de cajas de tapas de empanadas se convierte en un proceso fácil y rápido. Puedes especificar el tipo, tamaño y cantidad de tapas que necesitas con tan solo unos clics, optimizando tu experiencia de compra. Una de las características destacadas de nuestra plataforma es la capacidad de rastrear en tiempo real el estado de tus pedidos. Proporcionamos detalles sobre la fecha estimada de entrega, permitiéndote planificar tu producción de manera eficiente y manteniéndote informado en todo momento. Además, hemos simplificado la gestión de pedidos anteriores. Accede fácilmente a tu historial de pedidos y repite pedidos anteriores con un solo clic, brindándote una experiencia de compra sin complicaciones. En resumen, Tasty Dough tiene como objetivo principal simplificar y mejorar tu proceso de gestión de pedidos de tapas de empanadas. Únete a nosotros y descubre cómo la tecnología puede transformar la forma en que gestionas tu fábrica. Haz tu pedido hoy y lleva tu producción al siguiente nivel.",
    collection: "work",
    data: {
      title: "Tasty Dough",
      description: "Tasty Dough, una App para pedidos online",
      publishDate: new Date(),
      tags: ['Flutter', 'Node TS', 'PostgreSQL'],
      img: "/assets/tasty-dough.png",
      img_alt: "/assets/tasty-dough.png",
    },
  },
  {
    id: "2",
    slug: "mf-seguridad",
    body: "En el corazón de la seguridad y gestión eficiente se encuentra MF Seguridad, una aplicación diseñada para elevar el estándar en la vida comunitaria en barrios cerrados. Este proyecto, cuidadosamente concebido, aborda las necesidades de propietarios, guardias y administradores, proporcionando una experiencia integral y segura. Los propietarios disfrutan de la conveniencia de solicitar reservas para amenidades exclusivas, desde canchas de tenis hasta relajantes piscinas, permitiéndoles aprovechar al máximo su entorno residencial. La aplicación facilita este proceso, garantizando una experiencia sin complicaciones. La gestión de accesos toma un nuevo significado con la capacidad de check-ins y check-outs. Los guardias, con un toque de su dispositivo, pueden notificar a los propietarios sobre visitantes. Este sistema interactivo permite a los propietarios autorizar o rechazar el acceso, brindando un control sin precedentes sobre quién ingresa a sus hogares. La aplicación también ofrece un vistazo detallado a la actividad del barrio cerrado, con listas completas de check-ins aprobados, reservas pendientes y detalles sobre los invitados asociados. Los propietarios pueden mantenerse informados en tiempo real, proporcionando tranquilidad y seguridad. El mapa interactivo del country, con la ubicación en tiempo real de los guardias activos, refuerza aún más la sensación de seguridad. En situaciones de emergencia, el botón antipánico activa una respuesta rápida y coordinada, proporcionando una capa adicional de protección. La aplicación permite a los propietarios designar invitados recurrentes, simplificando su acceso sin comprometer la seguridad. Los administradores tienen acceso a herramientas poderosas, desde el ABM de usuarios hasta historiales detallados de antipánico, check-ins y check-outs, y reservas. MF Seguridad redefine la forma en que experimentamos la seguridad residencial en barrios cerrados. Únete a nosotros para descubrir una nueva era de tranquilidad y confianza. ¡Descarga la aplicación hoy y experimenta la innovación en seguridad residencial!",
    collection: "work",
    data: {
      title: "MF Seguridad",
      description: "MF Seguridad, una aplicacion para la seguridad de tu barrio cerrado",
      publishDate: new Date(),
      tags: ['Ionic', 'Angular', 'Capacitor', 'Node TS', 'WebSockets', 'PostgreSQL'],
      img: "/assets/mf-seguridad.png",
      img_alt: "/assets/mf-seguridad.png",
    },
  },
  {
    id: "3",
    slug: "Medical App",
    body: "En el corazón de la revolución en la atención médica se encuentra Medical App, una aplicación integral diseñada para optimizar la gestión de citas en instituciones de salud. Este proyecto aborda la complejidad de la planificación médica, ofreciendo una solución avanzada y completa. Con Medical App, la gestión de agendas se vuelve multifuncional, permitiendo la planificación de citas médicas teniendo en cuenta diversos procedimientos, salas y médicos operadores. Cada médico de cabecera cuenta con su propia agenda, lo que facilita la gestión eficiente de sus citas. La aplicación va más allá al asociar procedimientos médicos con estudios previos y archivos. Esto garantiza un enfoque integral en la atención al paciente, permitiendo a los médicos acceder fácilmente a la información relevante para tomar decisiones informadas y personalizadas. La gestión dinámica de turnos es una característica central de Medical App. Los usuarios pueden confirmar, cancelar o reagendar turnos con facilidad, brindando flexibilidad tanto a los pacientes como a los profesionales de la salud. Cada médico operador cuenta con su propia cuenta personalizada para gestionar su especialidad y agendas. La aplicación también simplifica la búsqueda de pacientes, permitiendo a los médicos acceder a su historial médico, que incluye información detallada sobre cada turno y la documentación asociada. Esta característica facilita la toma de decisiones médicas al tener acceso rápido a información relevante y completa. Medical App va más allá de la gestión de citas al ofrecer la capacidad de generar estadísticas detalladas sobre los turnos programados. Esto proporciona insights valiosos para optimizar la gestión de la institución médica, mejorando continuamente la calidad de los servicios. Descubre cómo Medical App puede transformar tu institución médica y llevar la gestión de citas a un nuevo nivel de eficiencia y calidad. ¡Únete a la revolución en la atención médica hoy mismo!",
    collection: "work",
    data: {
      title: "Medical App",
      description: "Medical App, una app para instituciones medicas",
      publishDate: new Date(),
      tags: ['Ionic', 'Angular', 'Capacitor', 'Node TS', 'PostgreSQL'],
      img: "/assets/medical-app.png",
      img_alt: "/assets/medical-app.png",
    },
  },
  {
    id: "4",
    slug: "Makesi",
    body: "Esta es una landing page realizada con HTML, CSS Y Javascript vanilla para una empresa de construcciones.",
    collection: "work",
    data: {
      title: "Makesi",
      description: "Esta es una landing page",
      publishDate: new Date(),
      tags: ['HTML', 'CSS', 'Javascript'],
      img: "/assets/makesi1.png",
      img_alt: "/assets/makesi1.png",
    },
  }
];
