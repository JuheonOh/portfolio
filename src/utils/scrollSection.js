const scrollSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerOffset = 40;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default scrollSection;
