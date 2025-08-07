import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div
        className={cn(
          "fixed top-0 left-0 w-[960px] h-screen z-50 transition-transform duration-300",
          "bg-gradient-to-br from-white/40 to-white/1 backdrop-blur-[50px]",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Hamburger Icon */}
        <button
          onClick={onClose}
          className="absolute left-[61px] top-[52px]"
          aria-label="Close menu"
        >
          <svg
            width="34"
            height="28"
            viewBox="0 0 34 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[34px] h-[28px] fill-black"
          >
            <path d="M1.43514 0.000123538C1.24764 -0.00219144 1.06148 0.0280497 0.887479 0.0890897C0.713481 0.15013 0.555114 0.240751 0.421582 0.355687C0.28805 0.470624 0.182016 0.607582 0.109643 0.758605C0.0372697 0.909627 0 1.0717 0 1.23541C0 1.39911 0.0372697 1.56119 0.109643 1.71221C0.182016 1.86323 0.28805 2.00019 0.421582 2.11513C0.555114 2.23006 0.713481 2.32068 0.887479 2.38172C1.06148 2.44276 1.24764 2.473 1.43514 2.47069H32.5649C32.7524 2.473 32.9385 2.44276 33.1125 2.38172C33.2865 2.32068 33.4449 2.23006 33.5784 2.11513C33.7119 2.00019 33.818 1.86323 33.8904 1.71221C33.9627 1.56119 34 1.39911 34 1.23541C34 1.0717 33.9627 0.909627 33.8904 0.758605C33.818 0.607582 33.7119 0.470624 33.5784 0.355687C33.4449 0.240751 33.2865 0.15013 33.1125 0.0890897C32.9385 0.0280497 32.7524 -0.00219144 32.5649 0.000123538H1.43514ZM1.43514 13.1765C1.24764 13.1742 1.06148 13.2044 0.887479 13.2654C0.713481 13.3265 0.555114 13.4171 0.421582 13.532C0.28805 13.647 0.182016 13.7839 0.109643 13.935C0.0372697 14.086 0 14.2481 0 14.4118C0 14.5755 0.0372697 14.7375 0.109643 14.8886C0.182016 15.0396 0.28805 15.1765 0.421582 15.2915C0.555114 15.4064 0.713481 15.497 0.887479 15.5581C1.06148 15.6191 1.24764 15.6494 1.43514 15.647H32.5649C32.7524 15.6494 32.9385 15.6191 33.1125 15.5581C33.2865 15.497 33.4449 15.4064 33.5784 15.2915C33.7119 15.1765 33.818 15.0396 33.8904 14.8886C33.9627 14.7375 34 14.5755 34 14.4118C34 14.2481 33.9627 14.086 33.8904 13.935C33.818 13.7839 33.7119 13.647 33.5784 13.532C33.4449 13.4171 33.2865 13.3265 33.1125 13.2654C32.9385 13.2044 32.7524 13.1742 32.5649 13.1765H1.43514ZM1.43514 25.5293C1.24764 25.527 1.06148 25.5572 0.887479 25.6183C0.713481 25.6793 0.555114 25.7699 0.421582 25.8849C0.28805 25.9998 0.182016 26.1368 0.109643 26.2878C0.0372697 26.4388 0 26.6009 0 26.7646C0 26.9283 0.0372697 27.0904 0.109643 27.2414C0.182016 27.3924 0.28805 27.5294 0.421582 27.6443C0.555114 27.7592 0.713481 27.8499 0.887479 27.9109C1.06148 27.9719 1.24764 28.0022 1.43514 27.9999H32.5649C32.7524 28.0022 32.9385 27.9719 33.1125 27.9109C33.2865 27.8499 33.4449 27.7592 33.5784 27.6443C33.7119 27.5294 33.818 27.3924 33.8904 27.2414C33.9627 27.0904 34 26.9283 34 26.7646C34 26.6009 33.9627 26.4388 33.8904 26.2878C33.818 26.1368 33.7119 25.9998 33.5784 25.8849C33.4449 25.7699 33.2865 25.6793 33.1125 25.6183C32.9385 25.5572 32.7524 25.527 32.5649 25.5293H1.43514Z" fill="black"/>
          </svg>
        </button>

        {/* Navigation Menu */}
        <div className="absolute left-[61px] top-[178px] w-[862px] h-[703px] flex justify-center items-center">
          <nav className="flex flex-col justify-center items-start gap-[59px] w-[862px] h-[703px] relative">
            {/* HOME */}
            <div className="absolute left-0 top-0">
              <Link
                to="/"
                onClick={onClose}
                className="w-[202px] h-[37px] text-black helvetica-custom text-[30px] font-normal leading-normal uppercase hover:opacity-70 transition-opacity block"
              >
                home
              </Link>
            </div>

            {/* OUR COLLECTION */}
            <div className="absolute left-0 top-[96px]">
              <Link
                to="/collection"
                onClick={onClose}
                className="w-[593px] h-[37px] text-black helvetica-custom text-[30px] font-normal leading-normal uppercase hover:opacity-70 transition-opacity block"
              >
                our collection
              </Link>
            </div>

            {/* SIGNATURE COLLECTION */}
            <div className="absolute left-0 top-[191px]">
              <Link
                to="/collection?category=signature"
                onClick={onClose}
                className="w-[831px] h-[33px] text-black helvetica-custom text-[30px] font-normal leading-normal uppercase hover:opacity-70 transition-opacity block pl-[40px]"
              >
                signature collection
              </Link>
            </div>

            {/* BRIDAL COUTURE */}
            <div className="absolute left-0 top-[283px]">
              <Link
                to="/collection?category=bridal"
                onClick={onClose}
                className="w-[589px] h-[37px] text-black helvetica-custom text-[30px] font-normal leading-normal uppercase hover:opacity-70 transition-opacity block pl-[40px]"
              >
                bridal couture
              </Link>
            </div>

            {/* CONTEMPORARY DRAPES */}
            <div className="absolute left-0 top-[378px]">
              <Link
                to="/collection?category=contemporary"
                onClick={onClose}
                className="w-[862px] h-[38px] text-black helvetica-custom text-[30px] font-normal leading-normal uppercase hover:opacity-70 transition-opacity block pl-[40px]"
              >
                contemporary drapes
              </Link>
            </div>

            {/* LUXURY FUSION LOUNGE */}
            <div className="absolute left-0 top-[474px]">
              <Link
                to="/collection?category=luxury"
                onClick={onClose}
                className="w-[840px] h-[38px] text-black helvetica-custom text-[30px] font-normal leading-normal uppercase hover:opacity-70 transition-opacity block pl-[40px]"
              >
                luxury fusion lounge
              </Link>
            </div>

            {/* ABOUT US */}
            <div className="absolute left-0 top-[570px]">
              <Link
                to="/about"
                onClick={onClose}
                className="w-[340px] h-[37px] text-black helvetica-custom text-[30px] font-normal leading-normal uppercase hover:opacity-70 transition-opacity block"
              >
                about us
              </Link>
            </div>

            {/* CONTACT US */}
            <div className="absolute left-0 top-[666px]">
              <Link
                to="/contact"
                onClick={onClose}
                className="w-[429px] h-[37px] text-black helvetica-custom text-[30px] font-normal leading-normal uppercase hover:opacity-70 transition-opacity block"
              >
                contact us
              </Link>
            </div>

            {/* Horizontal lines */}
            <svg
              className="absolute left-0 top-[386px] w-[21px] h-[3px] stroke-black stroke-[3px]"
              width="21"
              height="4"
              viewBox="0 0 21 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M-0.00292969 2.25H21.003" stroke="black" strokeWidth="3"/>
            </svg>

            <svg
              className="absolute left-0 top-[480px] w-[21px] h-[3px] stroke-black stroke-[3px]"
              width="21"
              height="4"
              viewBox="0 0 21 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M-0.00292969 2.25H21.003" stroke="black" strokeWidth="3"/>
            </svg>

            <svg
              className="absolute left-0 top-[575px] w-[21px] h-[3px] stroke-black stroke-[3px]"
              width="21"
              height="4"
              viewBox="0 0 21 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M-0.00292969 2.25H21.003" stroke="black" strokeWidth="3"/>
            </svg>

            <svg
              className="absolute left-0 top-[671px] w-[21px] h-[3px] stroke-black stroke-[3px]"
              width="21"
              height="4"
              viewBox="0 0 21 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M-0.00292969 2.25H21.003" stroke="black" strokeWidth="3"/>
            </svg>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
