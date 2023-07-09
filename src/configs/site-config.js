import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: '',
  author: {
    name: "Jason Ni",
    accounts: [
      {
        url: "https://github.com/jason-ni-0",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://linkedin.com/in/jasonni-",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:jason_ni@brown.com",
        label: "Mail jason",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
