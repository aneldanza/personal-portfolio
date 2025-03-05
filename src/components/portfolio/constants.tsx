export const items = [
  {
    id: 1,

    title: "Littelfuse Selection Guide",
    desc: () => (
      <div className="flex flex-col gap-4">
        <p>
          The <span className="font-bold">DC-Contactor plugin</span> is a
          game-changing tool for <span className="font-bold">Littelfuse</span>.
          Designed for seamless updates and additions, it centralizes all
          product URL references in an easy-to-use CSV file.
        </p>

        <div>
          <p className="mb-2">Key Features:</p>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Streamlined Updates</span>:
              Quickly modify distributor and datasheet links, along with unique
              product features.
            </li>
            <li>
              <span className="font-semibold">Effortless Expansion</span>: Add
              new distributors with ease as the network grows.
            </li>
            <li>
              <span className="font-semibold">CSV Integration</span>: Enjoy
              efficient organization and management of product links in one
              centralized location.
            </li>
          </ul>
        </div>
      </div>
    ),
    tools: ["Javascript", "CerosSDK", "Papa Parse"],
    img: "DC_contactor-landscape_thumbnail.png",
    link: "https://info.littelfuse.com/dc-contactor-selectionguide-mouser",
    repo: "https://github.com/aneldanza/ceros-freelance-projects/tree/main/littelfuse/dc-contactor",
  },
  {
    id: 2,

    title: "DevExchange API",
    desc: () => (
      <div>
        <span className="font-bold">DevExchange API</span> is a powerful and
        secure Rails backend, designed to fuel an engaging, Stack
        Overflow-inspired platform. With seamless Devise-JWT authentication.
        This API empowers frontend clients with rich features, including user
        profiles, dynamic question and answer interactions, versatile tagging,
        comment threads, and intuitive voting capabilities—all the essential
        tools to create a vibrant and collaborative Q&A community.
      </div>
    ),
    tools: [
      "Ruby-on-Rails",
      "PostgreSQL",
      "Devise-JWT",
      "Kaminari",
      "Jsonapi-Serializer",
      "PG-Search",
      "Heroku",
    ],
    img: "/devExchange_API-landscape_thumbnail.png",

    repo: "https://github.com/aneldanza/dev-exchange-api",
  },
  {
    id: 4,

    title: "DevExchange App",
    desc: () => (
      <div>
        <span className="font-bold">DevExchange</span> web app is a sleek,
        responsive web application that brings the familiar look and feel of
        Stack Overflow to life. With its intuitive design and seamless user
        experience, it’s built to keep developers engaged and productive.
        Explore it live and dive into a dynamic platform for sharing knowledge
        and solving problems together!
      </div>
    ),
    tools: [
      "Vite",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "RTK Query",
      "DevExhchange API",
      "Vercel",
    ],
    img: "/devExchange-landscape_thumbnail.png",
    link: "https://dev-exchange-dk5n.vercel.app",
    repo: "https://github.com/aneldanza/dev-exchange",
  },

  {
    id: 3,

    title: "Bubble Party",
    desc: () => (
      <div>
        <span className="font-bold">Bubble Party</span> is a fun, vibrant web
        game built with Typescript, packed with playful Spongebob-inspired
        images and sounds. Dive into a bubbly, immersive experience where every
        click and interaction brings the joy of the underwater world to life.
        Perfect for a burst of nostalgia and entertainment!
      </div>
    ),
    tools: ["Typescript", "Tailwind CSS", "Vite", "Vercel"],
    img: "/bubble_party-landscape thumbnail.png",
    link: "https://bubble-party-2-0.vercel.app/",
    repo: "https://github.com/aneldanza/bubble-party-2.0",
  },
];
