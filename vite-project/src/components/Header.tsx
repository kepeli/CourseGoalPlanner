import { ReactNode } from "react";

interface Goal {
  image: {
    src: string;
    alt: string;
  }
  children: ReactNode;
}

const Header = ({ image, children }: Goal) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};
export default Header;
