import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}