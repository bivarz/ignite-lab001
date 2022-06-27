import React from 'react';
import {CheckCircle} from 'phosphor-react'


const LessonsCard: React.FC = () => {
  return (
   <a href="#">
    <span className="text-gray-300">
      Domingo • 20 de junho • 19h00
    </span>
    <div className="rounded border border-grahy-500 p-4 mt-2">
      <header className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
          <CheckCircle size={20}/>
          Conteúdo Liberado
        </span>
        <span className="text-xs rounded px-2 py-[2p] text-white border border-green-300 font-bold">
          Ao Vivo
        </span>
      </header>
      <strong className='text-gray-200 mt-5 block'>
        Abertura do evento Ignite labs
      </strong>
    </div>
   </a>
  );
}

export default LessonsCard;