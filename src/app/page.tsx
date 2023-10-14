import Header from "~/components/Header";
import Projects from "~/components/Projects";
import Resume from "~/components/Resume";
import Skills from "~/components/Skills";
import Education from "~/components/Education";
import Hero from "~/components/Hero";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import About from "~/components/About";
import Timeline from "~/components/Timeline";

export const metadata = {
  title: "Eric Pezzulo",
  description:
    "Hi, I'm Eric and I'm a Full Stack Developer. I'm a Full Stack Develolper based in New York. I have 3 years professional experience and specialize in creating web app. I'm open for new opportunities and interesting projects",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <Header />

      <Hero />

      <Footer />
    </div>
  );
}
