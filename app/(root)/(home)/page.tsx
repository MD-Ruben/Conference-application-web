import MeetingTypeList from "@/components/MeetingTypeList";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("fr-FR", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="flex flex-wrap items-center gap-4">
        <div className="col-span-1">
          <Image
            src="/images/avatar-1.jpeg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full border-4 border-red-500"
          />
        </div>
        <Link href="/previous">
          <div className="col-span-1">
            <Image
              src="/images/avatar-2.jpeg"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full border-4 border-gray-500"
            />
          </div>
        </Link>
        <Link href="/previous">
          <div className="col-span-1">
            <Image
              src="/images/avatar-3.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full border-4 border-gray-500"
            />
          </div>
        </Link>
        <Link href="/previous">
          <div className="col-span-1">
            <Image
              src="/images/avatar-4.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full border-4 border-gray-500"
            />
          </div>
        </Link>
        <Link href="/previous">
          <div className="col-span-1">
            <Image
              src="/images/avatar-5.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full border-4 border-gray-500"
            />
          </div>
        </Link>
        <Link href="/previous">
          <div className="col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="20"
                  stroke-dashoffset="20"
                  d="M3 12h17.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.2s"
                    values="20;0"
                  />
                </path>
                <path
                  stroke-dasharray="12"
                  stroke-dashoffset="12"
                  d="M21 12l-7 7M21 12l-7 -7"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.2s"
                    dur="0.2s"
                    values="12;0"
                  />
                </path>
              </g>
            </svg>
          </div>
        </Link>
      </div>

      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Prochaine réunion à : 12:30
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
