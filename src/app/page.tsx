import Header from "~/components/Header";
import Projects from "~/components/Projects";
import Resume from "~/components/Resume";
import Skills from "~/components/Skills";
import Education from "~/components/Education";
import Hero from "~/components/Hero";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

export const metadata = {
  title: "Eric Pezzulo",
};

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white">
      <div className="flex w-full max-w-5xl flex-col">
        <Header />
        
        <main>
          <div className="mt-5 flex flex-col items-center justify-center">
            <Hero />
            <div className="flex flex-col items-center">
              <Projects />
              <Resume />
              <Skills />
              <Education />
              <Contact />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
