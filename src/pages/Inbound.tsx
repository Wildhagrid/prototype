import React from 'react';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { Video } from 'lucide-react';

export function Inbound() {
  return (
    <Layout contentClassName="bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 pt-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welkom bij Inbound – Het Startpunt van het Logistieke Proces!
        </h1>
        
        <p className="text-lg text-gray-600 mb-12">
          In deze afdeling worden inkomende goederen ontvangen, gecontroleerd, en geregistreerd. 
          Het is het startpunt van ons distributieproces, waar de basis wordt gelegd voor een 
          efficiënte workflow.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Hoe?
        </h2>

        <div className="text-left max-w-2xl mx-auto text-gray-600 space-y-3">
          <p className="flex items-start">
            <span className="mr-2">•</span>
            Je bekijkt een interactieve 360-graden video waarin je rond kunt kijken om de 
            afdeling en processen te verkennen.
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            Krijg visuele ondersteuning en praktijkgerichte voorbeelden om een helder beeld 
            te krijgen van de dagelijkse werkzaamheden.
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            Voor elk proces wordt duidelijke uitleg gegeven, zodat je precies begrijpt wat 
            er gebeurt en waarom het belangrijk is.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12">
        <Button to="/video/1">
          <div className="flex items-center gap-2">
            Bekijk 360° Video
            <Video size={20} />
          </div>
        </Button>
      </div>
    </Layout>
  );
}