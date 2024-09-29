import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center px-4 py-10 lg:px-24 bg-base-200">
        <div className="grid grid-rows-[200px_0.8fr_2fr] md:grid-rows-[300px_0.8fr_2fr] gap-8 bg-base-100  shadow-lg shadow-content">
          <section className="grid grid-rows-1 grid-cols-2 items-center bg-secondary rounded-md text-secondary-content hover:shadow-md hover:shadow-primary ">
            <div className="pl-4 row-start-1 col-start-1 col-span-1 bg-200">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold">
                Adithya Anandsaikrishnan
              </h1>
              <h2 className="italic font-light text-lg md:text-xl lg:text-3xl">
                Software Engineer
              </h2>
            </div>
            <Image
              className="col-start-2 col-span-1 justify-self-end w-40 lg:h-72 lg:w-72 rounded-full p-4"
              src="/portrait.png"
              alt="Portrait of Adithya"
              width="300"
              height="300"
            />
          </section>
          <section className="flex flex-col gap-4 px-4">
            <h2 className="text-justify text-lg md:text-xl lg:text-3xl font-bold">
              Get to Know Me
            </h2>
            <p className="text-start max-w-3xl">
              Hello everyone! I am Adi, a Software Engineer based in Los Angeles
              County, California. I recently acquired my Bachelors of Science in
              Computer Science at the University of California, Irvine. My
              primary specialization within technology is Full Stack Web
              Development. However, I have experience with SQL, Databases, and
              Artificial Intelligence/Machine Learning as well.
            </p>
            <p className="text-start max-w-3xl">
              Outside of Computer Science, I enjoy listening to music and going
              to concerts, trying out new food and milk tea/coffee places around
              the San Gabriel Valley & Orange County, decorating my workspace
              and room, exploring new areas, and more! I am also a huge
              Urbanist, and enjoy finding new areas that are walkable as well as
              promoting third places and pedestrian friendly infrastructure in
              spaces that are not traditionally accessible.
            </p>
          </section>
          <section className="flex flex-col gap-4 px-4">
            <h2 className="text-justify text-lg md:text-xl lg:text-3xl font-bold">
              Timeline
            </h2>
            <p>
              Here lies my timeline for the last couple of years. More details
              can be found on my{' '}
              <Link
                className="text-accent-content underline"
                href="https://www.linkedin.com/in/adithya-anandsaikrishnan/details/featured/"
              >
                Linkedin
              </Link>
              .
            </p>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">September 2020</time>
                  <div className="text-md font-black">
                    First day of UC Irvine
                  </div>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10 max-w-3xl">
                  <time className="font-mono italic">
                    June 2022 - September 2022
                  </time>
                  <div className="text-md font-black">
                    R&D Software Developer Intern @ AVEVA
                  </div>
                  <p className="text-start max-w-md">
                    I wore many hats in this role. My major tasks involved using
                    C# to fix errors, updating Angular components, and
                    performance testing new technologies.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">
                    September 2022 - June 2024
                  </time>
                  <div className="text-md font-black">
                    Family Head @ Circle K International at UC Irvine
                  </div>
                  <p className=" max-w-md">
                    I was a member for several committees, such as the
                    Technology Improvement Program and the Fundraising
                    Committee. I was also a Family Head for an year, hosting
                    weekly events with a cohort of peers.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10 md:text-end">
                  <time className="font-mono italic">
                    November 2022 - June 2024
                  </time>
                  <div className="text-md font-black">
                    Project Team Developer @ UCI ICS Student Council
                  </div>
                  <p className="text-start max-w-md">
                    I contributed to the event scheduling website ZotMeet, and
                    wrote the project requirements document for it. I also
                    developed the schema and integrated some features, such as
                    the summary page and availability feature.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">
                    April 2023 - January 2024
                  </time>
                  <div className="text-md font-black">
                    Communications Software Developer @ UCI CubeSat
                  </div>
                  <p className=" max-w-md">
                    I helped create a CSV downloading tool for satellite logs in
                    this role. I also mentored someone and helped them develop
                    the React frontend for the feature.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">June 2024</time>
                  <div className="text-md font-black">
                    Graduated from UC Irvine
                  </div>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">
                    June 2024 - August 2024
                  </time>
                  <div className="text-md font-black">
                    Digital Experience Intern @ Kaiser Permanente
                  </div>
                  <p className=" max-w-md">
                    I worked on transitioning a monolith Java Spring backend
                    into a brand new Nest.js architecture. I participated in the
                    entire process of conversion, and myself converted 4 complex
                    routes.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
