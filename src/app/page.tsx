import { WordCard } from '@app/components/WordsSet/WordCard/WordCard';
import '@app/App.scss';

export default function Home() {
  return (
    <main style={{ height: '100%', width: '100%', maxWidth: '500px' }}>
      <WordCard />
    </main>
  );
}
