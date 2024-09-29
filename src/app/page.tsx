import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col gap-8 row-start-2 items-center px-4 py-10 lg:px-24 bg-base-200">
        <div className="grid grid-rows-[200px_1fr_1fr_1fr] md:grid-rows-[300px_1fr_1fr_1fr] gap-8 bg-base-100  shadow-lg shadow-content">
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
            <h2 className="text-lg md:text-xl lg:text-3xl font-bold">Skills</h2>
          </section>
          <section className="flex flex-col gap-4 px-4">
            <h2 className="text-lg md:text-xl lg:text-3xl font-bold">
              Timeline
            </h2>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
