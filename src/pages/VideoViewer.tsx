import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { ArrowRight, ClipboardCheck } from 'lucide-react';
import { videoData } from '../constants/videoData';

export function VideoViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentId = Number(id);
  const currentVideo = videoData.find(video => video.id === currentId);
  const isLastVideo = currentId === videoData.length;

  if (!currentVideo) {
    navigate('/');
    return null;
  }

  return (
    <Layout contentClassName="bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-xl">
          360° video {currentId} zal hier worden weergegeven
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-gradient-to-t from-black to-transparent pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-white mb-6">
              <h2 className="text-2xl font-bold mb-2">{currentVideo.title}</h2>
              <p>{currentVideo.description}</p>
            </div>
            
            <div className="flex justify-center gap-4">
              {isLastVideo ? (
                <Button to="/scenario-inbound">
                  <div className="flex items-center gap-2">
                    Naar Scenario
                    <ClipboardCheck size={20} />
                  </div>
                </Button>
              ) : (
                <Button to={`/video/${currentId + 1}`}>
                  <div className="flex items-center gap-2">
                    Volgende Video
                    <ArrowRight size={20} />
                  </div>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}