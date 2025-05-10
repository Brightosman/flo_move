import React from "react";

// Define types for props
interface SectionTitleProps {
  title: string;
  paragraph: string;
  width?: string; // Optional prop, defaults to "570px"
  center?: boolean; // Optional prop, controls text alignment
  mb?: string; // Optional prop, controls margin-bottom
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  paragraph,
  width = "570px",
  center = false,
  mb = "100px",
}) => {
  return (
    <div
      className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
      data-wow-delay=".1s"
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      <p className="text-base !leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
