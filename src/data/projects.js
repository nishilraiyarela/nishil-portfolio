import wasteAppImage from "../assets/Waste Classification (Deep Learning + Android).png";
import HardwareAppImage from "../assets/Gemini_Generated_Image_7y2av57y2av57y2a.png";
export const PROJECTS_DATA = [

  {
    id: 1,
    title: "Storm Chaser Field Companion App",
    category: "Android Development",
    img: "https://github.com/nishilraiyarela/Strom-Chaser-Appl/raw/master/docs/dashboard.png",
    thumbnail: "https://github.com/nishilraiyarela/Strom-Chaser-Appl/raw/master/docs/dashboard.png",
    github: "https://github.com/nishilraiyarela/Strom-Chaser-Appl",
    description:
      "Built a native Android field companion app for storm chasers and outdoor adventurers to monitor live weather conditions, review 5-day forecasts, and document storm events in the field.\n\n" +
      "Integrated Open-Meteo APIs with Retrofit and Coroutines to fetch location-based weather data, including temperature, wind speed, precipitation, forecast conditions, and dynamic weather codes.\n\n" +
      "Implemented storm event logging with camera capture, GPS coordinates, notes, timestamps, FileProvider image handling, and local Room Database persistence.\n\n" +
      "Added Google Maps visualization for saved storm observations using latitude and longitude markers, along with dark mode, pull-to-refresh, skeleton loading states, and weather-aware UI cards.\n\n" +
      "Tech: Kotlin, XML, Android SDK, MVVM, Room, Retrofit, Google Maps SDK, Open-Meteo API, Coroutines, LiveData\n" +
      "Expertise: Native Android development, API integration, local persistence, geolocation, camera workflows, map visualization, MVVM architecture",
  },

  {
    id: 2,
    title: "6ixBlock - Toronto Community Board App",
    category: "Android + Firebase Development",
    img: "https://github.com/nishilraiyarela/6ixBlock/blob/main/docs/screenshots/dark-feed.png",
    thumbnail: "https://github.com/nishilraiyarela/Strom-Chaser-Appl/raw/master/docs/dashboard.png",
    github: "https://github.com/nishilraiyarela/6ixBlock",
    description:
      "Built a Toronto-based native Android community board app where users can create location-tagged posts, browse nearby updates, comment, like, save posts, and view real-time activity notifications.\n\n" +
      "Implemented MVVM architecture with clean separation across UI, domain, data, and core layers, using repository interfaces, use cases, domain models, Firebase integration, and Room-based local caching.\n\n" +
      "Added Google Maps integration with category-based pins, Fused Location Provider support, light/dark mode, profile management, saved posts, drafts, and Firestore listeners for live feed, likes, comments, and notification badge updates.\n\n" +
      "Tech: Kotlin, XML, Android SDK, Firebase Auth, Cloud Firestore, Room, Google Maps SDK, Fused Location Provider, MVVM\n" +
      "Expertise: Native Android development, real-time Firebase data, location-aware apps, clean architecture, Room caching, map-based UX",
 },

  {
    id: 3,
    title: "AI-Powered Waste Classification App",
    category: "AI + Android Development",
    img: "https://youtube.com/shorts/73etQHsTRS0",
    thumbnail: wasteAppImage,
    github: null,
    description:
      "Built an AI-powered Android application that classifies waste into Organic and Recyclable categories using a Deep Learning CNN model trained on 20,000+ labeled images.\n\n" +
      "Integrated a TensorFlow Lite model for real-time, offline image inference, enabling intelligent waste segregation directly on-device.\n\n" +
      "Tech: Kotlin, Android SDK, TensorFlow Lite, CNN, Image Processing\n" +
      "Expertise: Mobile ML deployment, on-device inference, dataset training, computer vision integration",
  },

  {
    id: 4,
    title: "Biometric Apps",
    category: "Mobile Development",
    img: "https://www.dial4trade.com/uploaded_files/helpimgs/top-10-branded-fingerprint-scanners-in-india-2024-market-demand-price-list-buying-tips-d0e5824.jpg",
    thumbnail: "https://www.dial4trade.com/uploaded_files/helpimgs/top-10-branded-fingerprint-scanners-in-india-2024-market-demand-price-list-buying-tips-d0e5824.jpg",
    github: null,
    description:
      "Developed Android and Flutter biometric validation apps integrating fingerprint, palm, and iris SDKs across 15+ hardware devices. Designed modular workflows and ensured stable performance through extensive multi-device testing and backend-synced result tracking.\n\n" +
      "Tech: Kotlin, Java, Android SDK, Flutter, Room, SQLite\n" +
      "Expertise: Biometric SDK integration, cross-device validation, system-level debugging",
  },

  {
    id: 5,
    title: "Hardware SDK Validation Tool",
    category: "Android Systems Engineering",
    img: "https://png.pngtree.com/element_our/png/20181205/valid-vector-icon-png_260889.jpg",
    thumbnail: HardwareAppImage,
    github: null,
    description:
      "Engineered an Android validation tool to test biometric SDK enrollment and matching workflows across 15+ device models, reducing manual QA time by 60% through structured result logging and backend-synced reporting.\n\n" +
      "Tech: Kotlin, Java, Android SDK, SQLite, REST APIs\n" +
      "Expertise: Device-level validation, performance logging, third-party SDK troubleshooting",
  },

  {
    id: 6,
    title: "Offline-First Tasks App",
    category: "Flutter Development",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*xcthnemDZId_EUFEwQe4ZQ.jpeg",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1200/1*xcthnemDZId_EUFEwQe4ZQ.jpeg",
    github: null,
    description:
        "Built a cross-platform offline-first task management app using Flutter with SQLite for reliable local persistence and seamless background synchronization with REST APIs. Implemented retry mechanisms to handle unstable connectivity and maintain data consistency.\n\n" +
        "Tech: Flutter, Dart, SQLite , REST APIs\n" +
        "Expertise: Offline-first architecture, background sync, state management",
  },

  {
    id: 7,
    title: "Event Management App",
    category: "Android Development",
    img: "https://www.airmeet.com/hub/wp-content/uploads/2025/01/Registration-and-Check-In-Management-1024x615.jpg",
    thumbnail: "https://www.airmeet.com/hub/wp-content/uploads/2025/01/Registration-and-Check-In-Management-1024x615.jpg",
    github: "https://github.com/nishilraiyarela/Evento-Event-Management-Android",
    description:
      "Developed a modular Android application supporting multiple user roles using Clean Architecture and lifecycle-aware components. Implemented authentication and SQLite-based local persistence for scalable feature growth.\n\n" +
      "Tech: Kotlin, Android SDK, Clean Architecture, SQLite\n" +
      "Expertise: Modular architecture, lifecycle-aware UI, role-based flows",
  },

  {
    id: 8,
    title: "Tiffin Treat – Offline Food Ordering App",
    category: "Android Development",
    img: "https://streamable.com/lpgiqn",
    thumbnail: "https://appinventiv.com/wp-content/uploads/2023/12/Unveiling-the-taste-of-success-in-food-delivery-app-development-%E2%80%93-3-business-case-studies.webp",
    github: "https://github.com/nishilraiyarela/Tiffin-Treat-Android-Java",
    description:
      "Developed an offline food ordering simulation app using Java and Android SDK with SQLite for local data storage. Implemented menu browsing, cart management, and order placement features to mimic a real-world food ordering system.\n\n" +
      "Tech: Java, Android SDK, SQLite, XML\n" +
      "Expertise: Local database management, UI design, activity lifecycle handling",
 },


];
