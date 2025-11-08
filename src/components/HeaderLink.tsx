interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const HeaderLink = ({ href, children, isScrolled }: HeaderLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-sm font-medium transition-colors hover:text-accent ${
        isScrolled ? "text-foreground" : "text-primary-foreground"
      }`}
    >
      {children}
    </a>
  );
};

export default HeaderLink;
