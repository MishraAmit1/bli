import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* ── Animated Counter ── */
const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2000,
  isInView,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ── Custom SVG Icons ── */

// 1st stat icon — Truck (tumhara diya hua)
const TruckSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.75 2.5V15C18.75 16.375 17.625 17.5 16.25 17.5H2.5V7.5C2.5 4.7375 4.7375 2.5 7.5 2.5H18.75Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 17.5V21.25C27.5 23.325 25.825 25 23.75 25H22.5C22.5 23.625 21.375 22.5 20 22.5C18.625 22.5 17.5 23.625 17.5 25H12.5C12.5 23.625 11.375 22.5 10 22.5C8.625 22.5 7.5 23.625 7.5 25H6.25C4.175 25 2.5 23.325 2.5 21.25V17.5H16.25C17.625 17.5 18.75 16.375 18.75 15V6.25H21.05C21.95 6.25 22.775 6.73751 23.225 7.51251L25.3625 11.25H23.75C23.0625 11.25 22.5 11.8125 22.5 12.5V16.25C22.5 16.9375 23.0625 17.5 23.75 17.5H27.5Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 27.5C11.3807 27.5 12.5 26.3807 12.5 25C12.5 23.6193 11.3807 22.5 10 22.5C8.61929 22.5 7.5 23.6193 7.5 25C7.5 26.3807 8.61929 27.5 10 27.5Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 27.5C21.3807 27.5 22.5 26.3807 22.5 25C22.5 23.6193 21.3807 22.5 20 22.5C18.6193 22.5 17.5 23.6193 17.5 25C17.5 26.3807 18.6193 27.5 20 27.5Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 15V17.5H23.75C23.0625 17.5 22.5 16.9375 22.5 16.25V12.5C22.5 11.8125 23.0625 11.25 23.75 11.25H25.3625L27.5 15Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 2nd stat icon — YAHAN APNA SVG DAALNA (Reviews/Star wala)
const Icon2Svg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.0116 27.8353C21.6557 27.8355 21.3052 27.7486 20.9906 27.5822L15.1472 24.5109C15.1019 24.4867 15.0514 24.474 15 24.474C14.9487 24.474 14.8981 24.4867 14.8528 24.5109L9.01033 27.5822C8.64827 27.7727 8.24012 27.8581 7.83205 27.8287C7.42399 27.7993 7.0323 27.6562 6.7013 27.4158C6.3703 27.1753 6.11322 26.847 5.95913 26.468C5.80504 26.089 5.7601 25.6744 5.82939 25.2712L6.94501 18.7659C6.95359 18.7149 6.94952 18.6626 6.93318 18.6136C6.91683 18.5646 6.88871 18.5203 6.85127 18.4847L2.12814 13.875C1.83489 13.5893 1.62752 13.2272 1.52953 12.8296C1.43154 12.4321 1.44684 12.0151 1.5737 11.6258C1.70056 11.2366 1.9339 10.8906 2.2473 10.6272C2.5607 10.3637 2.94161 10.1933 3.34689 10.1353L9.8747 9.18748C9.9255 9.18009 9.97373 9.16043 10.0152 9.13021C10.0567 9.09999 10.0902 9.06012 10.1128 9.01404L13.0313 3.09373C13.212 2.72672 13.4919 2.41765 13.8393 2.20152C14.1867 1.9854 14.5876 1.87085 14.9967 1.87085C15.4058 1.87085 15.8068 1.9854 16.1542 2.20152C16.5015 2.41765 16.7814 2.72672 16.9622 3.09373L19.8825 9.01216C19.9053 9.0581 19.9389 9.09785 19.9803 9.12804C20.0218 9.15824 20.0699 9.17798 20.1206 9.1856L26.6541 10.1344C27.0592 10.1927 27.4398 10.3633 27.753 10.6268C28.0661 10.8903 28.2993 11.2362 28.4261 11.6253C28.553 12.0144 28.5683 12.4312 28.4706 12.8287C28.3728 13.2261 28.1657 13.5882 27.8728 13.874L23.145 18.4809C23.1077 18.5166 23.0797 18.5609 23.0633 18.6099C23.047 18.6589 23.0429 18.7112 23.0513 18.7622L24.1669 25.2675C24.2206 25.5818 24.2051 25.904 24.1216 26.2118C24.038 26.5195 23.8884 26.8054 23.6832 27.0494C23.478 27.2935 23.222 27.4898 22.9332 27.6249C22.6443 27.76 22.3295 27.8305 22.0106 27.8315L22.0116 27.8353ZM15 22.5984C15.3556 22.5983 15.7057 22.6852 16.02 22.8515L21.8625 25.9219C21.9142 25.9514 21.9735 25.965 22.0329 25.9608C22.0924 25.9566 22.1492 25.9349 22.1963 25.8984C22.2454 25.8647 22.2835 25.8174 22.306 25.7622C22.3285 25.7071 22.3344 25.6465 22.3228 25.5881L21.2063 19.0819C21.1466 18.7317 21.1728 18.3723 21.2825 18.0345C21.3922 17.6966 21.5822 17.3904 21.8363 17.1422L26.5641 12.5344C26.6063 12.493 26.6361 12.4407 26.6502 12.3833C26.6642 12.326 26.6619 12.2658 26.6436 12.2096C26.6253 12.1535 26.5916 12.1036 26.5464 12.0655C26.5012 12.0275 26.4463 12.0028 26.3878 11.9944L19.8553 11.0447C19.5036 10.9937 19.1696 10.858 18.8821 10.649C18.5947 10.4401 18.3624 10.1644 18.2053 9.8456L15.2813 3.92623C15.2551 3.87325 15.2146 3.82866 15.1644 3.79748C15.1142 3.7663 15.0563 3.74977 14.9972 3.74977C14.9381 3.74977 14.8802 3.7663 14.83 3.79748C14.7798 3.82866 14.7393 3.87325 14.7131 3.92623L11.7947 9.84373C11.6376 10.1626 11.4051 10.4385 11.1175 10.6474C10.8298 10.8563 10.4956 10.992 10.1438 11.0428L3.6122 11.9944C3.55362 12.0026 3.49854 12.0272 3.45323 12.0653C3.40793 12.1033 3.37422 12.1533 3.35595 12.2096C3.33768 12.2659 3.33558 12.3262 3.34989 12.3836C3.3642 12.441 3.39434 12.4932 3.43689 12.5344L8.16377 17.1422C8.41778 17.3904 8.6078 17.6966 8.71753 18.0345C8.82725 18.3723 8.85341 18.7317 8.79377 19.0819L7.6772 25.5881C7.66707 25.6466 7.67356 25.7067 7.69591 25.7616C7.71827 25.8166 7.75561 25.8642 7.80367 25.8989C7.85173 25.9337 7.90859 25.9543 7.96778 25.9583C8.02696 25.9624 8.0861 25.9498 8.13845 25.9219L13.98 22.8506C14.2945 22.685 14.6446 22.5984 15 22.5984Z"
      fill="white"
    />
  </svg>
);

// 3rd stat icon — YAHAN APNA SVG DAALNA (Happy Clients wala)
const Icon3Svg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_643_23)">
      <path
        d="M15 29.3996C7.05988 29.3996 0.599976 22.9397 0.599976 14.9996C0.599976 7.05951 7.05988 0.599609 15 0.599609C22.9401 0.599609 29.4 7.05951 29.4 14.9996C29.4 22.9397 22.9401 29.3996 15 29.3996ZM15 2.39961C8.05228 2.39961 2.39998 8.05191 2.39998 14.9996C2.39998 21.9473 8.05228 27.5996 15 27.5996C21.9477 27.5996 27.6 21.9473 27.6 14.9996C27.6 8.05191 21.9477 2.39961 15 2.39961ZM23.0052 18.1022C23.1111 17.8899 23.1287 17.6444 23.0541 17.4192C22.9795 17.194 22.8188 17.0075 22.6071 16.9004C22.3946 16.7936 22.1486 16.7747 21.9223 16.8479C21.696 16.9212 21.5077 17.0806 21.3981 17.2916C21.3321 17.4182 19.7334 20.3996 15 20.3996C10.278 20.3996 8.67567 17.4329 8.60247 17.2928C8.49543 17.0802 8.30834 16.9189 8.08235 16.8442C7.85637 16.7696 7.60998 16.7877 7.39738 16.8947C7.29165 16.9476 7.19737 17.0207 7.11992 17.11C7.04247 17.1993 6.98336 17.3029 6.94598 17.4151C6.90859 17.5272 6.89366 17.6456 6.90203 17.7635C6.91041 17.8814 6.94192 17.9965 6.99478 18.1022C7.07878 18.2696 9.11128 22.1996 15 22.1996C20.8887 22.1996 22.9212 18.2696 23.0052 18.1022ZM19.5 13.1996C18.5073 13.1996 17.7 12.3923 17.7 11.3996C17.7 10.4069 18.5073 9.59961 19.5 9.59961C20.4927 9.59961 21.3 10.4069 21.3 11.3996C21.3 12.3923 20.4927 13.1996 19.5 13.1996ZM10.5 13.1996C9.50728 13.1996 8.69998 12.3923 8.69998 11.3996C8.69998 10.4069 9.50728 9.59961 10.5 9.59961C11.4927 9.59961 12.3 10.4069 12.3 11.3996C12.3 12.3923 11.4927 13.1996 10.5 13.1996Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_643_23">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// 4th stat icon — YAHAN APNA SVG DAALNA (Fleet/Building wala)
const Icon4Svg = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1249 14.9375C16.5302 14.9437 15.9414 14.8179 15.4011 14.5694C14.8608 14.3208 14.3822 13.9556 13.9999 13.5C13.6148 13.9523 13.1357 14.3152 12.596 14.5635C12.0563 14.8117 11.4689 14.9394 10.8749 14.9375C10.2802 14.9437 9.69144 14.8179 9.1511 14.5694C8.61075 14.3208 8.13221 13.9556 7.74989 13.5C7.63465 13.6383 7.50931 13.7678 7.37489 13.8875C6.95407 14.2704 6.45686 14.5597 5.91604 14.7364C5.37523 14.9131 4.8031 14.9731 4.23739 14.9125C3.21351 14.7863 2.27223 14.2867 1.59404 13.5093C0.915852 12.7319 0.548489 11.7315 0.562392 10.7V9.8125C0.561375 9.17547 0.662665 8.54241 0.862392 7.9375L2.82489 2.0625C2.96934 1.62619 3.24754 1.24646 3.62001 0.977202C3.99248 0.707947 4.44029 0.562848 4.89989 0.5625H23.0999C23.5595 0.562848 24.0073 0.707947 24.3798 0.977202C24.7522 1.24646 25.0304 1.62619 25.1749 2.0625L27.1374 7.9375C27.3371 8.54241 27.4384 9.17547 27.4374 9.8125V10.7C27.452 11.7277 27.0881 12.7249 26.4151 13.5017C25.742 14.2786 24.8067 14.7807 23.7874 14.9125C23.2216 14.9747 22.649 14.9155 22.108 14.7387C21.5669 14.5619 21.0698 14.2717 20.6499 13.8875C20.5124 13.7625 20.3749 13.6125 20.2499 13.475C19.8666 13.9312 19.3884 14.2984 18.8487 14.551C18.309 14.8036 17.7208 14.9355 17.1249 14.9375ZM4.89989 2.4375C4.83428 2.43849 4.77051 2.45933 4.71696 2.49725C4.66341 2.53518 4.6226 2.58843 4.59989 2.65L2.64989 8.525C2.51447 8.92808 2.44278 9.34982 2.43739 9.775V10.6625C2.41905 11.2268 2.60891 11.7781 2.97081 12.2115C3.33271 12.6448 3.84136 12.9299 4.39989 13.0125C4.70132 13.0437 5.00595 13.012 5.29446 12.9193C5.58297 12.8265 5.84907 12.6749 6.07589 12.4739C6.30271 12.273 6.4853 12.0271 6.61208 11.7518C6.73887 11.4766 6.80708 11.178 6.81239 10.875C6.81239 10.6264 6.91116 10.3879 7.08698 10.2121C7.2628 10.0363 7.50125 9.9375 7.74989 9.9375C7.99853 9.9375 8.23699 10.0363 8.41281 10.2121C8.58862 10.3879 8.68739 10.6264 8.68739 10.875C8.67308 11.1661 8.71987 11.4569 8.82473 11.7288C8.9296 12.0006 9.09023 12.2476 9.29629 12.4536C9.50234 12.6597 9.74925 12.8203 10.0211 12.9252C10.293 13.03 10.5838 13.0768 10.8749 13.0625C11.454 13.0592 12.0085 12.8277 12.4181 12.4182C12.8276 12.0086 13.0591 11.4541 13.0624 10.875C13.0624 10.6264 13.1612 10.3879 13.337 10.2121C13.5128 10.0363 13.7513 9.9375 13.9999 9.9375C14.2485 9.9375 14.487 10.0363 14.6628 10.2121C14.8386 10.3879 14.9374 10.6264 14.9374 10.875C14.9231 11.1661 14.9699 11.4569 15.0747 11.7288C15.1796 12.0006 15.3402 12.2476 15.5463 12.4536C15.7523 12.6597 15.9993 12.8203 16.2711 12.9252C16.543 13.03 16.8338 13.0768 17.1249 13.0625C17.704 13.0592 18.2585 12.8277 18.6681 12.4182C19.0776 12.0086 19.3091 11.4541 19.3124 10.875C19.3124 10.6264 19.4112 10.3879 19.587 10.2121C19.7628 10.0363 20.0013 9.9375 20.2499 9.9375C20.4985 9.9375 20.737 10.0363 20.9128 10.2121C21.0886 10.3879 21.1874 10.6264 21.1874 10.875C21.1875 11.1812 21.2519 11.4839 21.3764 11.7636C21.5009 12.0433 21.6827 12.2938 21.9101 12.4988C22.1375 12.7038 22.4054 12.8588 22.6965 12.9538C22.9876 13.0487 23.2953 13.0815 23.5999 13.05C24.1584 12.9674 24.6671 12.6823 25.029 12.249C25.3909 11.8156 25.5807 11.2643 25.5624 10.7V9.8125C25.557 9.38732 25.4853 8.96558 25.3499 8.5625L23.3999 2.6875C23.3772 2.62593 23.3364 2.57268 23.2828 2.53475C23.2293 2.49683 23.1655 2.47599 23.0999 2.475L4.89989 2.4375Z"
      fill="white"
    />
    <path
      d="M24 27.4379H4C3.42085 27.4346 2.86636 27.2031 2.45683 26.7936C2.0473 26.384 1.81578 25.8295 1.8125 25.2504V13.3504C1.8125 13.1017 1.91127 12.8633 2.08709 12.6875C2.2629 12.5117 2.50136 12.4129 2.75 12.4129C2.99864 12.4129 3.2371 12.5117 3.41291 12.6875C3.58873 12.8633 3.6875 13.1017 3.6875 13.3504V25.2504C3.6875 25.3333 3.72042 25.4128 3.77903 25.4714C3.83763 25.53 3.91712 25.5629 4 25.5629H24C24.0829 25.5629 24.1624 25.53 24.221 25.4714C24.2796 25.4128 24.3125 25.3333 24.3125 25.2504V13.3379C24.3125 13.0893 24.4113 12.8508 24.5871 12.675C24.7629 12.4992 25.0014 12.4004 25.25 12.4004C25.4986 12.4004 25.7371 12.4992 25.9129 12.675C26.0887 12.8508 26.1875 13.0893 26.1875 13.3379V25.2504C26.1842 25.8295 25.9527 26.384 25.5432 26.7936C25.1336 27.2031 24.5791 27.4346 24 27.4379Z"
      fill="white"
    />
    <path
      d="M18.375 27.4375H9.625C9.37737 27.4343 9.14079 27.3345 8.96567 27.1593C8.79055 26.9842 8.69074 26.7476 8.6875 26.5V20.25C8.69078 19.6709 8.9223 19.1164 9.33183 18.7068C9.74136 18.2973 10.2959 18.0658 10.875 18.0625H17.125C17.7041 18.0658 18.2586 18.2973 18.6682 18.7068C19.0777 19.1164 19.3092 19.6709 19.3125 20.25V26.5C19.3093 26.7476 19.2095 26.9842 19.0343 27.1593C18.8592 27.3345 18.6226 27.4343 18.375 27.4375ZM10.5625 25.5625H17.4375V20.25C17.4375 20.1671 17.4046 20.0876 17.346 20.029C17.2874 19.9704 17.2079 19.9375 17.125 19.9375H10.875C10.7921 19.9375 10.7126 19.9704 10.654 20.029C10.5954 20.0876 10.5625 20.1671 10.5625 20.25V25.5625Z"
      fill="white"
    />
  </svg>
);

/* ── Hero ── */
const Hero = () => {
  const [introDone, setIntroDone] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMainVideoLoaded, setIsMainVideoLoaded] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
  const isStatInView = useInView(statRef, { once: true, margin: "-50px" });

  const heroSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BLI Logistics Services",
    description:
      "Comprehensive logistics solutions across India including Full Truck Load, Part Load, and 3PL services with 25+ years of experience.",
    provider: {
      "@type": "Organization",
      name: "BLI - Bansal Logistics of India",
    },
    areaServed: { "@type": "Country", name: "India" },
  };

  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const introEl = introVideoRef.current;
    const mainEl = mainVideoRef.current;
    if (introEl) {
      if (introEl.readyState >= 3) setIsVideoLoaded(true);
      else introEl.addEventListener("loadeddata", () => setIsVideoLoaded(true));
    }
    if (mainEl) {
      if (mainEl.readyState >= 3) setIsMainVideoLoaded(true);
      else
        mainEl.addEventListener("loadeddata", () => setIsMainVideoLoaded(true));
    }
    return () => {
      introEl?.removeEventListener("loadeddata", () => setIsVideoLoaded(true));
      mainEl?.removeEventListener("loadeddata", () =>
        setIsMainVideoLoaded(true),
      );
    };
  }, []);

  useEffect(() => {
    if (isVideoLoaded && !isMainVideoLoaded && mainVideoRef.current) {
      mainVideoRef.current.load();
    }
  }, [isVideoLoaded, isMainVideoLoaded]);

  const stats = [
    { Icon: TruckSvg, value: 32, suffix: "k", label: "Deliveries" },
    {
      Icon: Icon2Svg,
      value: 2800,
      suffix: "+",
      label: "Reviews",
      displayPrefix: "2.8k",
    },
    { Icon: Icon3Svg, value: 1245, suffix: "", label: "Happy Clients" },
    { Icon: Icon4Svg, value: 500, suffix: "+", label: "Fleet Vehicles" },
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(heroSchema)}</script>
      </Helmet>

      <div className="relative w-full">
        {/* ── HERO ── */}
        <div className="relative w-full h-[85vh] sm:h-[90vh] max-h-[800px] overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            {!introDone ? (
              <>
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div className="w-10 h-10 border-2 border-white/20 border-t-[#FF7300] rounded-full animate-spin" />
                  </div>
                )}
                <video
                  ref={introVideoRef}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => setIntroDone(true)}
                  className={`w-full h-full object-contain sm:object-cover ${isVideoLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                  aria-label="BLI Logistics Introduction"
                >
                  <source src="/lovable-uploads/bansal.mp4" type="video/mp4" />
                </video>
              </>
            ) : (
              <>
                {!isMainVideoLoaded && (
                  <div className="absolute inset-0 bg-black" />
                )}
                <video
                  ref={mainVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className={`w-full h-full object-cover object-center ${isMainVideoLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
                  aria-label="BLI Logistics Services"
                >
                  <source src="/lovable-uploads/video1.mp4" type="video/mp4" />
                </video>
              </>
            )}
          </div>

          {/* ── Bottom Content ── */}
          {introDone && (
            <div className="absolute bottom-0 left-0 right-0 z-10 pt-32 sm:pt-44 pb-10 sm:pb-14 bg-gradient-to-b from-transparent to-black/85 pointer-events-none">
              <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
                <div className="relative pb-8 sm:pb-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-white/30 after:to-transparent">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-end">
                    <div className="md:col-span-7 pointer-events-auto">
                      <motion.h1
                        className="text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.08] tracking-[-0.01em]"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.15,
                          ease: "easeOut",
                        }}
                      >
                        Your Logistics Partner
                        <br />
                        for Every Mile in India
                      </motion.h1>
                      <motion.p
                        className="text-white/70 mt-5 text-[15px] sm:text-base md:text-lg max-w-md leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.35,
                          ease: "easeOut",
                        }}
                      >
                        Full truckload, part load, and 3PL solutions — backed by
                        25+ years of on-ground experience.
                      </motion.p>
                    </div>
                    <div className="md:col-span-5 flex md:justify-end items-end pointer-events-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                      >
                        <Link to="/contact">
                          <button className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF7300] hover:bg-[#e56800] active:bg-[#cc5d00] text-white font-semibold text-[15px] pl-6 pr-3.5 py-3 transition-colors duration-300">
                            <span>Get a Free Quote</span>
                            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                            </span>
                          </button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* ── STATS SECTION ── */}
        <section className="bg-white py-16 sm:py-20 md:py-24" ref={statRef}>
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Title */}
            <div className="text-center mb-14 sm:mb-16">
              <p className="text-[#1a1a1a] text-sm font-medium uppercase tracking-widest mb-3">
                Stats
              </p>
              {/* ✅ Added leading-[1.3] for breathing room between lines */}
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#1a1a1a] uppercase tracking-wide">
                <span className="block">Built On Trust,</span>
                <span className="block mt-2 sm:mt-2">Measured In Results</span>
              </h2>
            </div>

            {/* Stats with connecting line */}
            <div className="relative">
              {/* ✅ Fixed connecting lines using calc() to match grid columns with gap */}
              <div
                className="hidden md:block absolute top-0 left-0 right-0 pointer-events-none"
                style={{ height: "60px" }}
              >
                {/* Horizontal line — from col 1 center to col 4 center */}
                <div
                  className="absolute bg-gray-400"
                  style={{
                    top: "0px",
                    left: "calc((100% - 120px) / 8)",
                    right: "calc((100% - 120px) / 8)",
                    height: "1.5px",
                  }}
                />
                {/* Vertical drops — centered on each grid column */}
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute bg-gray-400"
                    style={{
                      top: "0px",
                      left: `calc(${2 * i + 1} * (100% - 120px) / 8 + ${i * 40}px)`,
                      width: "1.5px",
                      height: "60px",
                      transform: "translateX(-0.75px)",
                    }}
                  />
                ))}
              </div>

              {/* Stat Items */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center text-center pt-8 md:pt-[60px] pb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isStatInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: i * 0.12,
                      ease: "easeOut",
                    }}
                  >
                    {/* Icon Circle */}
                    <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full bg-[#113C6A] flex items-center justify-center mb-6">
                      <stat.Icon />
                    </div>

                    {/* Number */}
                    <div className="text-[38px] sm:text-[48px] md:text-[56px] font-normal text-[#1a1a1a] leading-none tracking-tight">
                      {stat.displayPrefix ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={
                            isStatInView ? { opacity: 1 } : { opacity: 0 }
                          }
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                        >
                          {stat.displayPrefix}
                          {stat.suffix}
                        </motion.span>
                      ) : (
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={2000}
                          isInView={isStatInView}
                        />
                      )}
                    </div>

                    {/* Label */}
                    <p className="text-[13px] sm:text-sm text-gray-400 mt-2.5">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom main line */}
              <div className="w-full h-px bg-gray-200 mt-2" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(Hero);
