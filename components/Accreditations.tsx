import React from 'react';
import { Award, Shield, CheckSquare } from 'lucide-react';
import { AccreditationItem } from '../types';
import { Reveal } from './Reveal';

const accreditations: AccreditationItem[] = [
  { id: '1', name: 'RICS', logoText: 'RICS Regulated' },
  { id: '2', name: 'ARMA', logoText: 'ARMA Member' },
  { id: '3', name: 'IRPM', logoText: 'IRPM Certified' },
  { id: '4', name: 'SafeContractor', logoText: 'SafeContractor' },
];

const Accreditations: React.FC = () => {
  return (
    <section id="accreditations" className="py-16 bg-slate-100 border-y border-slate-200">
      <div className="container mx-auto px-6 text-center">
        <Reveal>
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-widest mb-10">
            Accredited by Industry Leaders
          </p>
        </Reveal>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity">
          {/* Using Lucide icons to simulate logos for this demo */}
          {accreditations.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 border-2 border-slate-400 rounded-full flex items-center justify-center group-hover:border-pentagon-navy group-hover:text-pentagon-navy transition-colors text-slate-500">
                   {item.name === 'RICS' ? <Shield size={32} /> : 
                    item.name === 'ARMA' ? <Award size={32} /> : 
                    <CheckSquare size={32} />}
                </div>
                <span className="text-sm font-bold text-slate-700">{item.logoText}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;