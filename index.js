import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, Textarea, Button } from '@/components/ui';

const YouTubeImporter = () => {
  const [urls, setUrls] = useState('');

  const handleImport = async () => {
    const urlList = urls.split('\n').map((url) => url.trim()).filter((url) => url);

    for (const url of urlList) {
      try {
        // Call Eagle API to add the URL as a new reference
        await addYouTubeReference(url);
        console.log(`Added reference for: ${url}`);
      } catch (error) {
        console.error(`Failed to add reference for ${url}: `, error);
      }
    }
  };

  const addYouTubeReference = async (url) => {
    const apiUrl = 'http://localhost:41595/api/reference';
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify({
        title: 'YouTube Video',
        url,
        type: 'video',
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status code ${response.status}`);
    }

    const data = await response.json();
    return data;
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
