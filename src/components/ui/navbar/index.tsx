import Logo from "@/assets/images/logo.svg";
import { InstagramIcon, TwitterIcon, WhatsappIcon, YoutubeIcon } from "../..";

const socialMedias = [
  {
    title: "Youtube",
    path: "https://www.youtube.com",
    icon: <YoutubeIcon />,
  },
  {
    title: "Whatsapp",
    path: "https://www.whatsapp.com",
    icon: <WhatsappIcon />,
  },
  {
    title: "Twitter",
    path: "https://www.twitter.com",
    icon: <TwitterIcon />,
  },
  {
    title: "Instagram",
    path: "https://www.instagram.com",
    icon: <InstagramIcon />,
  },
];

export function UiNavbar() {
  return (
    <nav className="bg-white px-5">
      <div className="flex justify-between items-center h-20 max-w-screen-xl mx-auto">
        <div>
          <img src={Logo} alt="Tlab Logo" />
        </div>
        <div>
          <ul className="flex gap-3">
            {socialMedias.map((social) => (
              <li title={social.title}>
                <a href={social.path} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
