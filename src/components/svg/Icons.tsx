interface IconProps {
  className?: string;
  strokeWidth?: number;
  strokeLength?: number;
}

export function ListIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth={strokeWidth} d="M4 6h16M4 11.5h16M4 17h16"/>
    </svg>
  );
}

export function GridIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth={strokeWidth} d="M2 6h20v10h-20v-10M12 6v10"/>
    </svg>
  );
}

export function XIcon({ className = "w-6 h-6", strokeWidth = 4 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinejoin="round" strokeWidth={strokeWidth} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function ExpandIcon({ className = "w-6 h-6", strokeWidth = 2, strokeLength = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6V18H6V6H18" stroke="currentColor" strokeWidth={strokeWidth}/>
      <path d={`M18 6v${strokeLength}h-12v-${strokeLength}h12Z`} fill="currentColor" strokeWidth={strokeWidth}/>
    </svg>
  );
}

export function ExpandIcon2({ className = "w-6 h-6", strokeWidth = 2, strokeLength = 6 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={`M6 ${6+strokeLength}v-${strokeLength}h${strokeLength}`} stroke="currentColor" strokeWidth={strokeWidth}/>
      <path d={`M18 ${18-strokeLength}v${strokeLength}h-${strokeLength}`} stroke="currentColor" strokeWidth={strokeWidth}/>
    </svg>
  );
}

export function MinimizeIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinejoin="round" strokeWidth={strokeWidth} d="M6 18h12" />
    </svg>
  );
}

export function PlusIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth={strokeWidth} d="M12 4v16m8-8H4" />
    </svg>
  );
}

export function PlusIconThin({ className = "w-6 h-6", strokeWidth = 1 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 100 100">
      <path strokeWidth={strokeWidth} d="M50 0v100M0 50H100" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export function GithubIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export function SunIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

export function MoonIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

export function EyeIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
} 

// Logo icons

export function LogoIcon({ className = "w-full h-full", strokeWidth = 0 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 284 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth} 
            d="M28.2217 0C28.774 0 29.2217 0.447715 29.2217 1V24.5068C29.2217 25.0591 29.6695 25.5068 30.2217 25.5068H35.0977C35.6498 25.5069 36.0974 25.9548 36.0977 26.5068V39C36.0977 39.5523 35.6499 39.9999 35.0977 40H1C0.447716 40 6.99023e-07 39.5523 0 39V1C0 0.447715 0.447715 0 1 0H28.2217ZM78.0234 0C78.5757 0 79.0234 0.447715 79.0234 1V12.9131C79.0234 13.4654 78.5757 13.9131 78.0234 13.9131H55.3887C55.0564 13.9131 54.7871 14.1824 54.7871 14.5146C54.7871 14.8469 55.0564 15.1162 55.3887 15.1162H78.0234C78.5757 15.1162 79.0234 15.564 79.0234 16.1162V23.3027C79.0232 23.8548 78.5756 24.3027 78.0234 24.3027H55.3896C55.0569 24.3027 54.7871 24.5725 54.7871 24.9053C54.7874 25.2378 55.0571 25.5068 55.3896 25.5068H78.0234C78.5756 25.5068 79.0232 25.9547 79.0234 26.5068V39C79.0234 39.5523 78.5757 40 78.0234 40H39.0479C38.4957 39.9999 38.0479 39.5522 38.0479 39V1C38.0479 0.447781 38.4957 0.000107186 39.0479 0H78.0234ZM119.976 0C120.528 0 120.976 0.447715 120.976 1V13.2031C120.975 13.7553 120.528 14.2031 119.976 14.2031H108.083C107.701 14.2031 107.391 14.5132 107.391 14.8955C107.391 15.2776 107.701 15.5869 108.083 15.5869H119.976C120.528 15.5869 120.977 16.0367 120.967 16.5889C120.722 30.0607 115.529 40 107.391 40H87.2217C86.6694 40 86.2217 39.5523 86.2217 39V15.2031C86.2217 14.6509 85.7739 14.2032 85.2217 14.2031H81.9756C81.4234 14.2031 80.9757 13.7553 80.9756 13.2031V1C80.9756 0.447746 81.4233 4.94903e-05 81.9756 0H119.976ZM161.926 0C162.478 0 162.926 0.447715 162.926 1V13.2031C162.926 13.7553 162.478 14.2031 161.926 14.2031H150.033C149.651 14.2033 149.342 14.5133 149.342 14.8955C149.342 15.2775 149.651 15.5868 150.033 15.5869H161.926C162.478 15.5869 162.927 16.0367 162.917 16.5889C162.672 30.0605 157.48 39.9996 149.342 40H129.172C128.62 39.9999 128.172 39.5522 128.172 39V15.2031C128.172 14.6508 127.724 14.2031 127.172 14.2031H123.926C123.374 14.2029 122.926 13.7552 122.926 13.2031V1C122.926 0.447868 123.374 0.000247327 123.926 0H161.926ZM202.9 0.00195312C203.453 0.00113953 203.902 0.449094 203.902 1.00195V39.0039C203.902 39.5562 203.46 40 202.907 40H184.361C178.133 40 173.328 38.5904 169.948 35.7715C166.568 32.9524 164.878 28.8568 164.878 23.4854V1.00195C164.878 0.449124 165.326 0.00119022 165.879 0.00195312L182.707 0.0263672C183.259 0.0274333 183.705 0.474815 183.705 1.02637V29.8867C183.705 30.2648 184.012 30.5712 184.39 30.5713C184.768 30.5713 185.074 30.2648 185.074 29.8867V1.02637C185.074 0.474657 185.522 0.0271791 186.073 0.0263672L202.9 0.00195312ZM240.952 0C241.504 0.000249499 241.952 0.447869 241.952 1V18.1553C241.952 18.7072 241.504 19.155 240.952 19.1553H226.265C225.713 19.155 225.265 18.7073 225.265 18.1553V11.9482C225.264 11.5723 224.96 11.2676 224.584 11.2676C224.208 11.2676 223.904 11.5723 223.903 11.9482V28.0518C223.904 28.4277 224.208 28.7324 224.584 28.7324C224.96 28.7324 225.264 28.4277 225.265 28.0518V21.2812C225.265 20.7293 225.713 20.2815 226.265 20.2812H240.952C241.504 20.2815 241.952 20.7293 241.952 21.2812V39C241.952 39.5521 241.504 39.9998 240.952 40H206.854C206.302 40 205.854 39.5523 205.854 39V1C205.854 0.447715 206.302 0 206.854 0H240.952ZM282.902 0C283.455 9.04046e-05 283.902 0.447771 283.902 1V12.9131C283.902 13.4653 283.455 13.913 282.902 13.9131H260.844C260.512 13.9132 260.242 14.1824 260.242 14.5146C260.242 14.8469 260.512 15.1161 260.844 15.1162H282.902C283.455 15.1163 283.902 15.564 283.902 16.1162V23.3027C283.902 23.8548 283.454 24.3026 282.902 24.3027H260.845C260.512 24.3027 260.242 24.5726 260.242 24.9053C260.242 25.2378 260.512 25.5068 260.845 25.5068H282.902C283.454 25.5069 283.902 25.9548 283.902 26.5068V39C283.902 39.5522 283.455 39.9999 282.902 40H244.902C244.35 40 243.902 39.5523 243.902 39V1C243.902 0.447715 244.35 0 244.902 0H282.902Z"/>
    </svg>
  );
}

export function FooterLogoIcon({ className = "w-full h-full" }: IconProps) {
  return (
    <svg className={className} width="1251" height="180" viewBox="0 0 1251 180" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1C0 0.447718 0.447715 0 1 0H129.333C129.886 0 130.333 0.447715 130.333 1V113.783C130.333 114.335 130.781 114.783 131.333 114.783H160C160.552 114.783 161 115.23 161 115.783V179C161 179.552 160.552 180 160 180H0.999997C0.447712 180 0 179.552 0 179V1Z"/>
      <path d="M167 1C167 0.447718 167.448 0 168 0H345C345.552 0 346 0.447715 346 1V61.6087C346 62.161 345.552 62.6087 345 62.6087H241.122C240.57 62.6087 240.122 63.0564 240.122 63.6087V67.0233C240.122 67.5755 240.57 68.0233 241.122 68.0233H345C345.552 68.0233 346 68.471 346 69.0233V108.36C346 108.913 345.552 109.36 345 109.36H241.122C240.57 109.36 240.122 109.808 240.122 110.36V113.783C240.122 114.335 240.57 114.783 241.122 114.783H345C345.552 114.783 346 115.23 346 115.783V179C346 179.552 345.552 180 345 180H168C167.448 180 167 179.552 167 179V1Z"/>
      <path d="M471.868 63.913C471.316 63.913 470.868 64.3608 470.868 64.913V69.1423C470.868 69.6946 471.316 70.1423 471.868 70.1423H531C531.552 70.1423 532 70.5968 531.998 71.149C531.747 133.544 508.193 180 470.868 180H376.607C376.054 180 375.607 179.552 375.607 179V64.913C375.607 64.3608 375.159 63.913 374.607 63.913H353C352.448 63.913 352 63.4653 352 62.913V0.999998C352 0.447713 352.448 0 353 0H406.34H472.566H531C531.552 0 532 0.447715 532 1V62.913C532 63.4653 531.552 63.913 531 63.913H471.868Z"/>
      <path d="M657.868 63.913C657.316 63.913 656.868 64.3608 656.868 64.913V69.1423C656.868 69.6946 657.316 70.1423 657.868 70.1423H717C717.552 70.1423 718 70.5968 717.998 71.149C717.747 133.544 694.193 180 656.868 180H562.607C562.054 180 561.607 179.552 561.607 179V64.913C561.607 64.3608 561.159 63.913 560.607 63.913H539C538.448 63.913 538 63.4653 538 62.913V0.999998C538 0.447713 538.448 0 539 0H592.34H658.566H717C717.552 0 718 0.447715 718 1V62.913C718 63.4653 717.552 63.913 717 63.913H657.868Z"/>
      <path d="M724 105.686C724 129.857 731.536 148.286 746.607 160.972C761.679 173.657 783.101 180 810.873 180C836.562 180 889.275 180 897.037 180C897.589 180 898 179.583 898 179.03C898 171.95 898 127.875 898 105.686V1.00149C898 0.448621 897.551 0.000666305 896.999 0.00148743L815.051 0.123198C814.499 0.124017 814.053 0.571492 814.053 1.1232V136.572C814.053 137.124 813.605 137.572 813.053 137.572H808.947C808.395 137.572 807.947 137.124 807.947 136.572V1.12379C807.947 0.572092 807.501 0.124621 806.949 0.123798L725.001 0.00149468C724.449 0.000669553 724 0.448626 724 1.00149V105.686Z"/>
      <path d="M987.542 0H1064C1064.55 0 1065 0.447715 1065 1V85.1972C1065 85.7495 1064.55 86.1972 1064 86.1972H991.575C991.023 86.1972 990.575 85.7495 990.575 85.1972V51.7042C990.575 51.1519 990.128 50.7042 989.575 50.7042H985.5C984.948 50.7042 984.5 51.1519 984.5 51.7042V128.296C984.5 128.848 984.948 129.296 985.5 129.296H989.575C990.128 129.296 990.575 128.848 990.575 128.296V92.2676C990.575 91.7153 991.023 91.2676 991.575 91.2676H1064C1064.55 91.2676 1065 91.7153 1065 92.2676V179C1065 179.552 1064.55 180 1064 180H987.542H905C904.448 180 904 179.552 904 179V90V1C904 0.447718 904.448 0 905 0H987.542Z"/>
      <path d="M1071 1C1071 0.447718 1071.45 0 1072 0H1250C1250.55 0 1251 0.447715 1251 1V61.6087C1251 62.161 1250.55 62.6087 1250 62.6087H1145.53C1144.98 62.6087 1144.53 63.0564 1144.53 63.6087V67.0233C1144.53 67.5755 1144.98 68.0233 1145.53 68.0233H1250C1250.55 68.0233 1251 68.471 1251 69.0233V108.36C1251 108.913 1250.55 109.36 1250 109.36H1145.53C1144.98 109.36 1144.53 109.808 1144.53 110.36V113.783C1144.53 114.335 1144.98 114.783 1145.53 114.783H1250C1250.55 114.783 1251 115.23 1251 115.783V179C1251 179.552 1250.55 180 1250 180H1072C1071.45 180 1071 179.552 1071 179V1Z"/>
    </svg>
  );
}

export function SquareIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth} 
            d="M4.5 4.5 h15v15h-15z"/>
    </svg>
  );
}

export function BarcodeIcon({ className = "w-6 h-6", strokeWidth = 0 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth} 
            d="M4.5 19.5v-15h4.8v15H4.5Zm6 0v-15h1.1v15h-1.1Zm3.5 0v-15h1.2v15H14ZM17.6 19.5v-15h1.2v15h-1.2Zm6 0v-15h2.3v15h-2.4Zm3.5 0v-15h1.2v15h-1.2ZM30.7 19.5v-15h1.2v15h-1.2Zm2.4 0v-15h2.4v15H33Zm4.7 0v-15H39v15h-1.2ZM43.8 19.5v-15h4.7v15h-4.7Zm7.1 0v-15h1.2v15H51Zm2.4 0v-15h1.2v15h-1.2Z"/>
    </svg>
  );
}

export function ArrowRightBar({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth} 
            d="m18.8 12-4.6 4.8v-2.5H8.5V9.7h5.7V7.2l4.6 4.8ZM6.3 9.8v4.4H5V9.8h1.3Z"/>
    </svg>
  );
}

// Pixelated icons

export function DevIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth} 
            d="M9.5 14.5h5v5h-10v-10h5v5Zm10 0h-5v-5h-5v-5h10v10Z"/>
    </svg>
  );
}

export function DesignIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth} 
            d="M14.5 14.5v-5h5v5h-5v5h-5v-5h5Zm0-10v5h-5v-5h5Zm-5 5v5h-5v-5h5Z"/>
    </svg>
  );
}

export function ArtIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth} 
            d="M14.5 19.5h-5v-5h-5v-5h10v10Zm5-10h-5v-5h5v5Z"/>
    </svg>
  );
}

export function PixelatedXIcon({ className = "w-6 h-6", strokeWidth = 0 }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth}
            d="M16.5 19.5v-3h3v3h-3Zm-12 0v-3h3v3h-3Zm12-3h-3v-3h3v3Zm-9 0v-3h3v3h-3Zm6-3h-3v-3h3v3Zm0-3v-3h3v3h-3Zm-3 0h-3v-3h3v3Zm6-3v-3h3v3h-3Zm-9 0h-3v-3h3v3Z" />
    </svg>
  );
}

export function PixelatedArrowIcon({ className = "w-6 h-6", strokeWidth = 0 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth} 
            d="M19.5 19.5h-12v-3h6v-3h3v-6h3v12Zm-6-6h-3v-3h3v3Zm-3-3h-3v-3h3v3Zm-3-3h-3v-3h3v3Z"/>
    </svg>
  );
}

export function RoundPixelatedArrowIcon({ className = "w-6 h-6", strokeWidth = 0 }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 72 72" fill="none">
      <path fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth} 
            d="M64 59c0 3-2 5-5 5H5c-3 0-5-2-5-5v-6c0-3 2-5 5-5h22c3 0 5-2 5-5v-6c0-3-2-5-5-5h-6c-3 0-5-2-5-5v-6c0-3-2-5-5-5H5c-3 0-5-2-5-5V5c0-3 2-5 5-5h6c3 0 5 2 5 5v6c0 3 2 5 5 5h6c3 0 5 2 5 5v6c0 3 2 5 5 5h6c3 0 5-2 5-5V5c0-3 2-5 5-5h6c3 0 5 2 5 5v54Z"/>
    </svg>
  );
}

export function SpinnerIcon({ className = "w-6 h-6", strokeWidth = 2 }: IconProps) {
  return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle 
            className="opacity-30"
            fill={strokeWidth > 0 ? "none" : "currentColor"} 
            stroke={strokeWidth > 0 ? "currentColor" : "none"} 
            strokeWidth={strokeWidth}
            cx="12" cy="12" r="8"></circle>
          <path
            className="opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            d="M12 4
               A8 8 0 1 1 4 12"
            aria-label="spinner segment"
          />
      </svg>
  );
}