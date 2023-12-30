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
    slug: "tasty-dough",
    body: "Welcome to Tasty Dough, the comprehensive solution revolutionizing the management of empanada dough orders. Designed with innovation and developed entirely by our team, this progressive web application combines the power of Flutter and Dart in the frontend with JavaScript, Node.js, and PostgreSQL in the backend, offering you a unique and efficient experience. At Tasty Dough, we simplify the registration process for clients, allowing you to access our platform once the factory has reviewed and approved your account. This step ensures secure and controlled access, giving you peace of mind from the start. With our intuitive interface, placing customized orders for empanada dough boxes becomes an easy and quick process. You can specify the type, size, and quantity of doughs you need with just a few clicks, optimizing your shopping experience. One of the standout features of our platform is the ability to track the status of your orders in real-time. We provide details on the estimated delivery date, allowing you to efficiently plan your production and keeping you informed at all times. Additionally, we have simplified the management of previous orders. Easily access your order history and repeat previous orders with a single click, offering you a hassle-free shopping experience. In summary, Tasty Dough aims to simplify and improve your empanada dough order management process. Join us and discover how technology can transform the way you manage your factory. Place your order today and take your production to the next level.",
    collection: "work",
    data: {
      title: "Tasty Dough",
      description: "Tasty Dough, an App for online orders",
      publishDate: new Date(),
      tags: ['Flutter', 'Node TS', 'PostgreSQL'],
      img: "/assets/tasty-dough.png",
      img_alt: "/assets/tasty-dough.png",
    },
  },
  {
    id: "2",
    slug: "mf-seguridad",
    body: "At the heart of security and efficient management lies MF Seguridad, an application designed to elevate the standard in community living in gated neighborhoods. This carefully conceived project addresses the needs of owners, guards, and administrators, providing a comprehensive and secure experience. Owners enjoy the convenience of requesting reservations for exclusive amenities, from tennis courts to relaxing swimming pools, allowing them to make the most of their residential environment. The application facilitates this process, ensuring a hassle-free experience. Access management takes on new meaning with the ability to perform check-ins and check-outs. Guards, with a touch of their device, can notify owners about visitors. This interactive system allows owners to authorize or reject access, providing unprecedented control over who enters their homes. The application also offers a detailed look at the gated neighborhood's activity, with complete lists of approved check-ins, pending reservations, and details about associated guests. Owners can stay informed in real-time, providing peace of mind and security. The interactive map of the country club, with the real-time location of active guards, further reinforces the sense of security. In emergency situations, the panic button activates a quick and coordinated response, providing an additional layer of protection. The application allows owners to designate recurring guests, simplifying their access without compromising security. Administrators have access to powerful tools, from user ABM to detailed histories of panic, check-ins and check-outs, and reservations. MF Seguridad redefines the way we experience residential security in gated neighborhoods. Join us to discover a new era of tranquility and confidence. Download the application today and experience innovation in residential security!",
    collection: "work",
    data: {
      title: "MF Seguridad",
      description: "MF Seguridad, an application for your gated neighborhood's security",
      publishDate: new Date(),
      tags: ['Ionic', 'Angular', 'Capacitor', 'Node TS', 'WebSockets', 'PostgreSQL'],
      img: "/assets/mf-seguridad.png",
      img_alt: "/assets/mf-seguridad.png",
    },
  },
  {
    id: "3",
    slug: "medical-app",
    body: "At the heart of the healthcare revolution lies Medical App, a comprehensive application designed to optimize appointment management in healthcare institutions. This project addresses the complexity of medical planning, offering an advanced and complete solution. With Medical App, managing schedules becomes multifunctional, allowing for the planning of medical appointments considering various procedures, rooms, and operating doctors. Each primary doctor has their own schedule, facilitating efficient management of their appointments. The application goes further by associating medical procedures with previous studies and files. This ensures a comprehensive approach to patient care, allowing doctors to easily access relevant information to make informed and personalized decisions. The dynamic management of appointments is a central feature of Medical App. Users can confirm, cancel, or reschedule appointments with ease, providing flexibility to both patients and healthcare professionals. Each operating doctor has their own personalized account to manage their specialty and schedules. The application also simplifies patient search, allowing doctors to access their medical history, which includes detailed information about each appointment and associated documentation. This feature facilitates medical decision-making by providing quick access to relevant and complete information. Medical App goes beyond appointment management by offering the ability to generate detailed statistics on scheduled appointments. This provides valuable insights to optimize the management of the medical institution, continually improving the quality of services. Discover how Medical App can transform your medical institution and take appointment management to a new level of efficiency and quality. Join the healthcare revolution today!",
    collection: "work",
    data: {
      title: "Medical App",
      description: "Medical App, an app for medical institutions",
      publishDate: new Date(),
      tags: ['Ionic', 'Angular', 'Capacitor', 'Node TS', 'PostgreSQL'],
      img: "/assets/medical-app.png",
      img_alt: "/assets/medical-app.png",
    },
  },
  {
    id: "4",
    slug: "Makesi",
    body: "This is a landing page created with HTML, CSS, and vanilla JavaScript for a construction company.",
    collection: "work",
    data: {
      title: "Makesi",
      description: "This is a landing page",
      publishDate: new Date(),
      tags: ['HTML', 'CSS', 'Javascript'],
      img: "/assets/makesi1.png",
      img_alt: "/assets/makesi1.png",
    },
  }
];
