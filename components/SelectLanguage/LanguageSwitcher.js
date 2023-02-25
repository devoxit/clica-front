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

  return (
    <Select
      classNamePrefix="language-selector"
      options={languageOptions}
      defaultValue={languageOptions.find(
        (option) => option.value === i18n.language
      )}
      onChange={handleLanguageChange}
      formatOptionLabel={(option) => (
        <div>
          <Image
            className="flag"
            src={option.icon}
            alt={option.label}
            width={20}
            height={20}
          />
          <span>{option.label}</span>
        </div>
      )}
    />
  );
};

export default LanguageSwitcher;
