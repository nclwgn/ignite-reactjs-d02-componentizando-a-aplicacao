import { Button } from "./Button";

interface Genre {
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  onSelectedGenreIdChange: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  onSelectedGenreIdChange
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectedGenreIdChange(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}