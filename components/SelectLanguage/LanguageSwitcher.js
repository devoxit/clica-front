import React from "react";
import Image from "next/image";
import i18n from "../../i18n";
import Select from "react-select";
import { useTranslation } from "react-i18next";

import enFlag from "../../images/usa-48.png";
import jpFlag from "../../images/japan-48.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languageOptions = [
    { value: "jp", label: "日本語", icon: jpFlag },
    { value: "en", label: "English", icon: enFlag },
  ];

  const handleLanguageChange = (option) => {
    i18n.changeLanguage(option.value);
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "2px solid rgba(75, 0, 130, 0.2)",
      boxShadow: "none",
      "&:hover": {
        border: "2px solid rgba(75, 0, 130, 0.5)",
        cursor: "pointer",
      },
      "&:focus": {
        border: "2px solid rgba(75, 0, 130, 0.5)",
        boxShadow: "none",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgba(75, 0, 130, 0.8)"
        : "transparent",
      color: state.isSelected ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "rgba(75, 0, 130, 0.5)",
        color: "#fff",
        cursor: "pointer",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "rgba(75, 0, 130, 0.8)",
    }),
  };

  return (
    <Select
      className="language-selector"
      classNamePrefix="language-selector"
      styles={customStyles}
      options={languageOptions}
      defaultValue={languageOptions.find(
        (option) => option.value === i18n.language
      )}
      onChange={handleLanguageChange}
      formatOptionLabel={(option) => (
        <div className="optionLabel">
          <Image
            className="optionImage"
            src={option.icon}
            alt={option.label}
            width={20}
            height={20}
          />
          <span>{option.label}</span>
        </div>
      )}
      menuPortalTarget={document.body}
    />
  );
};

export default LanguageSwitcher;
