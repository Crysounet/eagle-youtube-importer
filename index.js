import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, Textarea, Button } from '@/components/ui';

const YouTubeImporter = () => {
  const [urls, setUrls] = useState('');

  const handleImport = () => {
    // TODO: Implement URL parsing and import logic
    console.log('Importing URLs:', urls.split('\n'));
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>YouTube URL Importer</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          className="mb-4"
          placeholder="Paste your YouTube URLs here (one per line)"
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          rows={10}
        />
        <Button onClick={handleImport}>Import URLs</Button>
      </CardContent>
    </Card>
  );
};

export default YouTubeImporter;