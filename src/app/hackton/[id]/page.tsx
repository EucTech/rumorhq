import React from 'react'
import HacktonDetails from '@/components/Hackton/HacktonDetails';
import { HacktonsData } from '@/utils/dummyData';

interface Props {
  params: Promise<{ id: string }>
}


const getHacktonById = async (id: string) => {
  const hackton = HacktonsData.find((hack) => hack.id === id);
  return hackton || null;
};

const HacktonDetailsPage = async ({ params }: Props) => {
  const resolvedParams = await params;
  const hackton = await getHacktonById(resolvedParams.id);

  if (!hackton) {
    return <div>Hackton not found</div>;
  }

  return (
    <div>
      <HacktonDetails hackton={hackton} />
    </div>
  );
};

export default HacktonDetailsPage;
