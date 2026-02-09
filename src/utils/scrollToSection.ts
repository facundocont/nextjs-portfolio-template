export function scrollToSection(link: string): void {
  const id = link.replace("#", "");
  const section = document.getElementById(id);
  if (section) {
    const navbarHeight = 80;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
