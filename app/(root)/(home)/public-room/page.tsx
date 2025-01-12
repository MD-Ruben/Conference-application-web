const PublicRoom = () => {
  const posts = [
    {
      title: "Business meeting",
      img: "/images/live-room.jpeg",
      date: "17 oct 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Conference meeting",
      img: "/images/live-room.jpeg",
      date: "17 oct 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Business meeting",
      img: "/images/live-room-1.jpeg",
      date: "17 oct 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Conference meeting",
      img: "/images/live-room-1.jpeg",
      date: "17 oct 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Business meeting",
      img: "/images/live-room.jpeg",
      date: "17 oct 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Conference meeting",
      img: "/images/live-room.jpeg",
      date: "17 oct 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Business meeting",
      img: "/images/live-room-1.jpeg",
      date: "17 oct 2024",
      href: "javascript:void(0)",
    },
    {
      title: "Conference meeting",
      img: "/images/live-room-1.jpeg",
      date: "17 oct 2024",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className="w-full max-w-screen">
      <div className="bg-dark-1 mt-5 px-4 py-4 rounded-sm shadow-sm">
        <div className="flex size-full flex-col gap-10 text-white">
          <h1 className="text-xl font-bold lg:text-3xl">Live room</h1>
          <div className="flex w-full flex-col gap-8 xl:max-w-full">
            <ul className="grid gap-x-8 gap-y-10 mt-2 sm:grid-cols-2 lg:grid-cols-4">
              {posts.map((items, key) => (
                <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                  <a href={items.href}>
                    <img
                      src={items.img}
                      loading="lazy"
                      alt={items.title}
                      className="w-full rounded-lg"
                    />
                    <div className="mt-3 space-y-2">
                      <span className="block text-blue-1 text-sm">
                        {items.date}
                      </span>
                      <h3 className="text-lg duration-150 text-blue-1 font-semibold">
                        {items.title}
                      </h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicRoom;
