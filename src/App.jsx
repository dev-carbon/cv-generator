import Header from './components/Header';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none p-8">
        <Header />
        <Achievements />
        <Education />
        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default App;
