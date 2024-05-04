import Link from "next/link";
import upworkLogo from "../public/upwork.svg";
import Image from "next/image";

function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}


function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I&apos;m avyudaya 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a backend developer from Kathmandu, Nepal. I am techincally detailed and like to solve problems. I currently `}
        <Link href="/work">work</Link>
        {`as a freelance software developer at `}
        <span className="not-prose">
          <Badge target="_blank" href="https://upwork.com">
            <Image src={upworkLogo} alt="Upwork Logo" />
            UpWork.
          </Badge>
        </span>
        {` I also teach students programming at `}
        <Badge target="_blank" href="https://deerwalktrainingcenter.com/">
          <Image
            src="/deerwalk.png"
            width="14"
            height="14"
            alt="Deerwalk Logo"
          />
          Deerwalk Training Center.
        </Badge>
      </p>

      {/* TODO: Build image section */}
      {/* <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40"></div>
      </div> */}

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://google.com/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">View my resume</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
