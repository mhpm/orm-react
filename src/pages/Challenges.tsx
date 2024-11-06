import Accordion from '@/components/challenges/Accordion';
import LocaStorageChallenge from '@/components/challenges/LocaStorage';

const Test = () => {
  return (
    <div className="flex justify-center w-full p-10">
      <LocaStorageChallenge />
      <Accordion />
    </div>
  );
};

export default Test;
