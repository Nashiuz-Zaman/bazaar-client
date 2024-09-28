// page layout
interface Layout {
  children: React.ReactNode;
}

// nav options data
interface NavOption {
  id: number;
  text: string;
  href: string;
}

// episode
interface Episode {
  id: number;
  title: string;
  description: string;
  src: string;
}
