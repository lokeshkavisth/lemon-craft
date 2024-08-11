import { useEffect, useState } from "react";

const sections = [
  { id: "page1", label: "About Us", number: "01" },
  { id: "page2", label: "Our Mission", number: "02" },
  { id: "character", label: "Character", number: "03" },
  { id: "creation-process", label: "Creation Process", number: "04" },
  { id: "gallery", label: "Gallery", number: "05" },
  { id: "special-elements", label: "Special Elements", number: "06" },
  { id: "creative-team", label: "Creative Team", number: "07" },
  { id: "mint", label: "Mint", number: "08" },
  { id: "contact", label: "Contact", number: "09" },
];

function ChapterList() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Centered check
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    // Trigger handleScroll on initial load to set the active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed top-72 right-48 hidden lg:block" id="lists">
      <ul className="space-y-4 relative">
        {sections.map((section) => {
          const isActive = section.id === activeSection;

          return (
            <div key={section.id} className="flex justify-end gap-10">
              <li className="text-right">{section.label}</li>

              <div>
                <li className="text-right font-bold">{section.number}</li>

                {isActive && (
                  <div className="transition-transform duration-300 bg-gray-400 h-32 w-0.5 ml-2" />
                )}
              </div>
            </div>
          );
        })}
      </ul>
    </aside>
  );
}

export default ChapterList;
