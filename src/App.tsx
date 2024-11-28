import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Inbound } from './pages/Inbound';
import { VideoViewer } from './pages/VideoViewer';
import { ScenarioInbound } from './pages/ScenarioInbound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/inbound" element={<Inbound />} />
        <Route path="/video/:id" element={<VideoViewer />} />
        <Route path="/scenario-inbound" element={<ScenarioInbound />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;