import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../public/github-mark.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import EnvelopeIcon from '../../public/envelope-icon.svg';
import DropDown from '../../public/dropdown.svg';

export default function Home() {
  return (
    <div>
      <header>
        <nav className="navbar bg-base-100 shadow shadow-accent-content/5 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <Image src={DropDown} alt="Dropdown Menu Icon"></Image>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href="/experience">Experience</Link>
                </li>
                <li>
                  <Link href="/experience">Projects</Link>
                </li>
                <li>
                  <Link href="/experience">Hobbies</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-xl px-1">
              <li>
                <Link
                  className="decoration-transparent transition ease-in delay-75 duration 200 hover:underline hover:decoration-double hover:decoration-accent skip-ink"
                  href="/experience"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  className="decoration-transparent transition ease-in delay-75 duration 200 hover:underline hover:decoration-double hover:decoration-accent skip-ink"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="decoration-transparent transition ease-in delay-75 duration 200 hover:underline hover:decoration-double hover:decoration-accent skip-ink"
                  href="/hobbies"
                >
                  Hobbies
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex flex-row gap-3">
            <a
              role="link"
              href="https://github.com/adi-lux"
              className=" hover:rounded-full hover:bg-gray-300 active:bg-gray-400"
            >
              <Image
                className="dark:invert "
                src={GithubIcon}
                alt="Github Icon"
                width="30"
                height="30"
              />
            </a>
            <a
              role="link"
              href="https://www.linkedin.com/in/adithya-anandsaikrishnan/"
              className=" hover:rounded-full hover:bg-gray-300 active:bg-gray-400"
            >
              <Image
                className="dark:invert"
                src={LinkedinIcon}
                alt="Linkedin Icon"
                width="30"
                height="30"
              />
            </a>
            <a
              role="link"
              href="mailto:anandsaikrishnan.adithya@gmail.com"
              className="hover:bg-gray-300 active:bg-gray-400"
            >
              <Image
                className="dark:invert"
                src={EnvelopeIcon}
                alt="Envelope Icon"
                width="30"
                height="30"
              />
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <div>Adithya Anandsaikrishnan</div>
        <div>skills</div>
        <div>timeline</div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
