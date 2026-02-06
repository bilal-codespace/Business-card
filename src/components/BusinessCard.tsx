import logo from "@/assets/logo.svg";
import websiteLogo from "@/assets/website_logo.svg";
import bottomStrips from "@/assets/downbackground_strips.png";

const BusinessCard = () => {
  return (
    <div className="w-full max-w-[1080px] mx-auto shadow-lg font-inter overflow-hidden">
      {/* Upper Section - White background */}
      <div className="relative bg-background px-10 pt-8 pb-10">
        {/* Top Row: Name + Logo */}
        <div className="flex items-start justify-between">
          {/* Left: Name & Title */}
          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-1">
              <h1 className="text-2xl font-bold text-primary tracking-wide">
                Sultan Omair Al Sheryani
              </h1>
              <span className="text-lg text-accent font-bold">|</span>
              <h1 className="text-xl font-bold text-primary tracking-wide" dir="rtl">
                شما ابراهيم بن جعفر
              </h1>
            </div>
            <div className="flex items-baseline gap-6 mb-5">
              <p className="text-sm text-accent font-semibold leading-tight">
                Acting Executive Director - Operations Sector |
              </p>
              <p className="text-sm text-accent font-semibold" dir="rtl">
               أخصائي رئيسي - إعلام
              </p>
            </div>
            {/* Contact Row */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-accent">E</span>
                <a
                  href="mailto:Shamma.Binjaafar@adpic.gov.ae"
                  className="text-sm text-primary hover:underline"
                >
                  Shamma.Binjaafar@adpic.gov.ae
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-accent">T</span>
                <span className="text-sm text-primary">02 301 3159</span>
              </div>
            </div>
          </div>

          {/* Right: Logo + Arabic text */}
          <div className="flex items-center gap-3">
            <div className="text-right leading-tight">
              <p className="text-[11px] text-primary font-bold leading-snug" dir="rtl">
                مـركـز أبـوظبـي
              </p>
              <p className="text-[11px] text-primary font-bold leading-snug" dir="rtl">
                للمشاريـع والبنيـــة التحتيــة
              </p>
              <p className="text-[9px] text-muted-foreground mt-0.5 font-extrabold">
                Abu Dhabi Projects and Infrastructure Centre
              </p>
            </div>
            <img src={logo} alt="ADPIC Logo" className="w-12 h-12" />
          </div>
        </div>

        
      </div>

      {/* Bottom Section - Gray background with strips */}
      <div
        className="relative px-10 py-8 flex items-center justify-between"
        style={{ backgroundColor: "#E5E0E6" }}
      >
        {/* Background strips pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${bottomStrips})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        />

        {/* Social Media Icons */}
        <div className="relative z-10 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/adpicae/?originalSubdomain=ae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-70 transition-opacity"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/adpicae/?hl=ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-70 transition-opacity"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/adisummitae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-70 transition-opacity"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://x.com/ADPIC_ae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-70 transition-opacity"
            aria-label="X (Twitter)"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
        {/* Decorative stripes - right side */}
        <div className="absolute right-20 -bottom-4 flex items-end">
          <div
            className="w-[24px] h-[86px] mb-[30px]"
            style={{
              background: "#5BBFB5",
              transform: "skewX(-45deg)",
            }}
          />
          <div
            className="w-[24px] h-[82px] ml-[10px] mb-[18px]"
            style={{
              background: "#3A5469",
              transform: "skewX(-45deg)",
            }}
          />
        </div>
        {/* Website */}
        <div className="relative z-10 flex items-center gap-2 mr-44">
          <img src={websiteLogo} alt="" className="w-4 h-4" />
          <a
            href="https://adpic.gov.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            adpic.gov.ae
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
