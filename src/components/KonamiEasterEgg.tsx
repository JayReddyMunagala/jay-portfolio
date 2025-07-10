import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './BeastMode.css'; // Optional external styles

const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

const FunnyMessage: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className="fixed bottom-5 right-5 p-6 bg-black text-white rounded-2xl shadow-2xl z-50 max-w-xs">
    <p>🐾 You found the secret! Curious people like you build cool things.</p>
    <p className="mt-2 italic text-sm text-pink-300">Let’s get weird...</p>
    <button
      onClick={onNext}
      className="mt-4 flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-full text-white hover:bg-pink-500 transition-all"
    >
      Next <FaArrowRight />
    </button>
  </div>
);

const BeastResume: React.FC = () => (
  <div className="beast-mode p-6 text-orange-500 font-bold mt-16">
    <h2 className="text-3xl mb-4">🐱 Secret Resume Mode Activated</h2>
    <ul className="list-disc ml-6 space-y-2">
<ul className="list-disc ml-6 space-y-2">
  <li><strong>Code Name:</strong> Jay “The Optimizer” Munagala 🧠⚡</li>
  <li><strong>Superpowers:</strong> Refactors blindfolded, DOMinates bugs, punches lag in the face 🥊</li>
  <li><strong>Fun Fact:</strong> Once built a full-stack app while doing squats and sipping black coffee ☕🏋️‍♂️</li>
  <li><strong>Hobbies:</strong> Shredding APIs, lifting data tables, running CI/CD pipelines for cardio 🏃‍♂️</li>
  <li><strong>Mission:</strong> Join a fearless squad that breaks limits, not builds 💥</li>
</ul>
    </ul>
  </div>
);


const KonamiEasterEgg: React.FC = () => {
  const [keys, setKeys] = useState<string[]>([]);
  const [step, setStep] = useState<number>(0); // 0 = hidden, 1 = funny msg, 2 = cat mode + resume

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prev => {
        const newKeys = [...prev, e.key].slice(-konamiCode.length);
        if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
          setStep(1); // trigger funny message
        }
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (step === 2) {
      document.body.classList.add('beast-theme');
    } else {
      document.body.classList.remove('cat-theme');
    }
  }, [step]);

  return (
    <>
      {step === 1 && <FunnyMessage onNext={() => setStep(2)} />}
      {step === 2 && <BeastResume />}
    </>
  );
};

export default KonamiEasterEgg;
