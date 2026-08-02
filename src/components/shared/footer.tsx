import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-[#10172A] bg-[url('/images/footer-image.png')] bg-contain bg-bottom-right bg-no-repeat font-mono text-[#B7B6E3]">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-[27.3px] py-18">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[111.254px] w-[274.426px] brightness-0 invert"
          />
        </a>
        <p className="font-mono text-[13.402px] leading-[29.783px] font-medium tracking-[0.745px]">
          AI-powered HR intelligence for modern teams. Automate, analyze, and
          elevate.
        </p>

        <div className="flex w-full items-center justify-center gap-24 border-y-2 border-[#2E3B82]/30 py-7">
          <ul className="flex flex-wrap items-center justify-center gap-7 font-mono text-[13.402px] leading-normal font-medium tracking-[0.268px] text-[#B7B6E3]">
            {footerLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-10">
            <a
              href="#"
              className="font-mono text-[13.402px] leading-[29.783px] font-medium tracking-[0.745px]"
            >
              Follow us
            </a>

            <ul className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <li key={link.icon}>
                  <a
                    href="#"
                    className="bg-secondary grid size-[28.636px] place-content-center rounded-full text-[#10172A]"
                  >
                    <Icon src={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-mono text-[14.296px] text-white">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-[#2E9EFF]">A2HR</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "How it Works",
    href: "#",
  },
  {
    title: "Use Cases",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "FAQ",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: "/icons/facebook.svg",
    href: "#",
  },
  {
    icon: "/icons/instagram.svg",
    href: "#",
  },
  {
    icon: "/icons/linkedin.svg",
    href: "#",
  },
  {
    icon: "/icons/youtube.svg",
    href: "#",
  },
  {
    icon: "/icons/twitter.svg",
    href: "#",
  },
];
