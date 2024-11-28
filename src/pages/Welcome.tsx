import React from 'react';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { ArrowRight } from 'lucide-react';

export function Welcome() {
  return (
    <Layout contentClassName="bg-gradient-to-b from-blue-900 to-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
          Welkom bij de 360 graden virtuele rondleiding
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Je wordt door verschillende afdelingen geleid, van Inbound tot Outbound. 
          Onderweg krijg je informatie en een visueel overzicht van de werkzaamheden 
          om het proces en jouw rol daarin beter te begrijpen.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12">
        <Button to="/inbound">
          <div className="flex items-center gap-2">
            Start de rondleiding
            <ArrowRight size={20} />
          </div>
        </Button>
      </div>
    </Layout>
  );
}