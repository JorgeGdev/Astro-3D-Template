import { useState } from 'react';
import Grid from './Grid'; 

const initialMentions = ["Three JS", "React", "PHP", "Flutter", "Blender"];

export default function GridComponent() {
  const [mentions, setMentions] = useState(initialMentions);

  return (
    <Grid variant="small" items={mentions} setItems={setMentions} />
  );
}
