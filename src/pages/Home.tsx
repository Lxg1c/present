import { useState } from 'react';
import Welcome from './Welcome';
import Reasons from './Reasons';



export default function Home() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'reasons'>('welcome');

  const handleStart = () => {
    setCurrentPage('reasons');
  };

  const handleBack = () => {
    setCurrentPage('welcome');
  };

  if (currentPage === 'welcome') {
    return <Welcome onStart={handleStart} />;
  }

  return <Reasons onBack={handleBack} />;
}
