import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { scenarioOptions } from '../constants/scenarioData';
import { Button } from '../components/Button';

export function ScenarioInbound() {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const handleOptionClick = (optionId: number) => {
    if (!selectedOptions.includes(optionId)) {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  return (
    <Layout contentClassName="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Scenario Inbound
        </h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Situatie:</h2>
          <p className="text-base text-gray-600">
            Je staat in de Inbound-afdeling en er komt een nieuwe levering binnen met 
            medische apparatuur. Tijdens het uitladen merk je dat één van de dozen 
            beschadigd is.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Wat doe je als eerste in deze situatie?
        </h2>
        
        <div className="space-y-4 mb-8">
          {scenarioOptions.map((option) => {
            const isSelected = selectedOptions.includes(option.id);
            
            return (
              <div
                key={option.id}
                className={`bg-white rounded-lg shadow-sm p-4 transition-all duration-200 hover:shadow
                  ${isSelected ? (option.isCorrect ? 'ring-2 ring-green-500' : 'ring-2 ring-red-500') : ''}`}
              >
                <button
                  onClick={() => handleOptionClick(option.id)}
                  className="w-full text-left flex items-start gap-3"
                  disabled={isSelected}
                >
                  <div className={`mt-0.5 ${isSelected ? (option.isCorrect ? 'text-green-500' : 'text-red-500') : 'text-gray-400'}`}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-900 mb-1">
                      {option.text}
                    </p>
                    {isSelected && (
                      <p className={`text-sm ${option.isCorrect ? 'text-green-600' : 'text-red-600'} animate-fade-in`}>
                        {option.feedback}
                      </p>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button to="/outbound">
            <div className="flex items-center gap-2">
              Volgende
              <ArrowRight size={20} />
            </div>
          </Button>
        </div>
      </div>
    </Layout>
  );
}