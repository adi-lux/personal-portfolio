import Image from 'next/image';
import Logo from '../../public/logo.svg';
import DropDown from '../../public/dropdown.svg';
import Link from 'next/link';
import GithubIcon from '../../public/github-mark.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import EnvelopeIcon from '../../public/envelope-icon.svg';

export default function Header() {
  return (
    <header>
      <nav className="navbar bg-base-100 shadow shadow-accent-content/5 px-4 ">
        <div className="navbar-start">
          <Link href="/">
            <Image
              className="dark:invert hidden lg:block"
              src={Logo}
              alt="Site logo"
              width="30"
              height="30"
            />
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Image src={DropDown} alt="Dropdown Menu Icon"></Image>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  className="decoration-transparent transition ease-in delay-75 duration 200 hover:underline hover:decoration-double hover:decoration-accent  skip-ink"
                  href="/experience"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  className="decoration-transparent transition ease-in delay-75 duration 200 hover:underline hover:decoration-double hover:decoration-accent  skip-ink"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="decoration-transparent transition ease-in delay-75 duration 200 hover:underline hover:decoration-double hover:decoration-accent  skip-ink"
                  href="/contact"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center flex lg:hidden">
          <Link href="/">
            <Image
              className="dark:invert "
              src={Logo}
              alt="Site logo"
              width="24"
              height="24"
            />
          </Link>
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
                href="/contact"
              >
                Contact Me
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
              className="dark:invert sm:w-4 sm:h-4 md:w-6 md:h-6 lg:h-8 lg:w-8"
              src={GithubIcon}
              alt="Github Icon"
              width="24"
              height="24"
            />
          </a>
          <a
            role="link"
            href="https://www.linkedin.com/in/adithya-anandsaikrishnan/"
            className=" hover:rounded-full hover:bg-gray-300 active:bg-gray-400"
          >
            <Image
              className="dark:invert sm:w-4 sm:h-4 md:w-6 md:h-6 lg:h-8 lg:w-8"
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width="24"
              height="24"
            />
          </a>
          <a
            role="link"
            href="mailto:anandsaikrishnan.adithya@gmail.com"
            className="hover:bg-gray-300 active:bg-gray-400"
          >
            <Image
              className="dark:invert sm:w-4 sm:h-4 md:w-6 md:h-6 lg:h-8 lg:w-8"
              src={EnvelopeIcon}
              alt="Envelope Icon"
              width="24"
              height="24"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
