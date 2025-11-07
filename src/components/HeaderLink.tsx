interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const HeaderLink = ({ href, children, isScrolled }: HeaderLinkProps) => {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors hover:text-accent ${
        isScrolled ? "text-foreground" : "text-primary-foreground"
      }`}
    >
      {children}
    </a>
  );
};

export default HeaderLink;
