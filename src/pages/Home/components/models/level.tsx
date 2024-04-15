interface LevelProps {
  summary: string;
}

export default function Level({ summary }: LevelProps) {
  return (
    <>
      <h4 className="nunito-bold">Level Summary</h4>
      <p className="nunito-regular">{summary}</p>
    </>
  );
}
