import React from 'react';

import LessonsCard from './LessonsCard'

const Sidebar: React.FC = () => {
  return(
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
        <LessonsCard />
      </div>
    </aside>
  );
}

export default Sidebar;