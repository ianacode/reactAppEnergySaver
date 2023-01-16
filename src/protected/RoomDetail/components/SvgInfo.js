import * as React from "react";
import './SvgInfo.css';
import {useState} from "react";
function SvgInfo({metrics}) {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((index + 1) % metrics.length);
  }

  return (
     <div className="sgvinfo" onClick={handleNext}>
       <svg width="301" height="247" viewBox="0 0 301 247" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clipPath="url(#clip0_905_1482)">
           <g filter="url(#filter0_d_905_1482)">
             <path d="M150.696 236.556C211.592 236.556 260.958 187.19 260.958 126.294C260.958 65.3982 211.592 16.0322 150.696 16.0322C89.7996 16.0322 40.4336 65.3982 40.4336 126.294C40.4336 187.19 89.7996 236.556 150.696 236.556Z" fill="url(#paint0_linear_905_1482)"/>
             <path d="M150.696 237.056C211.868 237.056 261.458 187.466 261.458 126.294C261.458 65.1221 211.868 15.5322 150.696 15.5322C89.5234 15.5322 39.9336 65.1221 39.9336 126.294C39.9336 187.466 89.5234 237.056 150.696 237.056Z" stroke="url(#paint1_linear_905_1482)"/>
           </g>
           <g filter="url(#filter1_d_905_1482)">
             <path d="M270.899 126.294C270.899 59.9077 217.082 6.09082 150.696 6.09082C84.3091 6.09082 30.4922 59.9077 30.4922 126.294" stroke="#BAC4CF" strokeWidth="10" strokeDasharray="2 19"/>
           </g>
           <path opacity="0.8" d="M97.8824 204.593C96.3472 206.869 93.2492 207.48 91.0528 205.833C79.6479 197.281 70.1992 186.363 63.3679 173.807C55.7436 159.794 51.6036 144.151 51.2976 128.201C50.9916 112.251 54.5285 96.4614 61.6097 82.1659C68.6909 67.8705 79.1084 55.4891 91.9823 46.0674C104.856 36.6458 119.809 30.4607 135.576 28.0344C151.344 25.6082 167.464 27.0121 182.574 32.1276C197.685 37.2431 211.343 45.92 222.394 57.4253C232.296 67.7339 239.845 80.042 244.547 93.4992C245.453 96.0908 243.934 98.8591 241.3 99.6341C238.667 100.409 235.917 98.8964 234.997 96.3099C230.754 84.3813 224.021 73.4701 215.225 64.3122C205.278 53.9574 192.986 46.1482 179.387 41.5443C165.787 36.9403 151.279 35.6768 137.088 37.8604C122.897 40.044 109.44 45.6106 97.8536 54.0901C86.2671 62.5696 76.8914 73.7128 70.5183 86.5788C64.1452 99.4447 60.962 113.655 61.2374 128.011C61.5128 142.366 65.2388 156.444 72.1007 169.056C78.1694 180.21 86.5334 189.928 96.6202 197.579C98.8074 199.239 99.4175 202.317 97.8824 204.593Z" fill="url(#paint2_linear_905_1482)"/>
           <g opacity="0.8" filter="url(#filter2_dd_905_1482)">
             <path d="M150.697 216.673C200.612 216.673 241.075 176.209 241.075 126.294C241.075 76.3794 200.612 35.9155 150.697 35.9155C100.782 35.9155 60.3184 76.3794 60.3184 126.294C60.3184 176.209 100.782 216.673 150.697 216.673Z" fill="url(#paint3_linear_905_1482)"/>
             <path d="M150.697 216.173C200.335 216.173 240.575 175.933 240.575 126.294C240.575 76.6555 200.335 36.4155 150.697 36.4155C101.058 36.4155 60.8184 76.6555 60.8184 126.294C60.8184 175.933 101.058 216.173 150.697 216.173Z" stroke="url(#paint4_linear_905_1482)"/>
           </g>
           <path d="M150.696 204.019C193.623 204.019 228.422 169.22 228.422 126.294C228.422 83.3672 193.623 48.5684 150.696 48.5684C107.77 48.5684 72.9707 83.3672 72.9707 126.294C72.9707 169.22 107.77 204.019 150.696 204.019Z" fill="url(#paint5_linear_905_1482)"/>
           <path d="M170.58 72.067C174.573 72.067 177.81 68.8299 177.81 64.8367C177.81 60.8435 174.573 57.6064 170.58 57.6064C166.587 57.6064 163.35 60.8435 163.35 64.8367C163.35 68.8299 166.587 72.067 170.58 72.067Z" fill="url(#paint6_linear_905_1482)"/>
           <g filter="url(#filter3_d_905_1482)">
             <path d="M141.027 166.594C141.027 174.872 146.032 180.318 153.664 180.318C156.43 180.318 158.798 179.393 160.445 177.81C160.919 178.941 161.199 180.211 161.64 181.632C161.834 182.256 162.307 182.579 162.867 182.579C163.868 182.579 164.675 181.653 164.675 180.577C164.675 179.307 163.556 177.294 162.2 175.313C162.663 174.269 162.91 173.107 162.91 171.847C162.91 167.079 159.035 163.624 153.707 163.624C151.899 163.624 150.123 164.119 148.207 164.119C146.603 164.119 145.322 163.624 144.246 162.407C143.352 161.363 141.738 161.525 141.372 163.032C141.092 164.108 141.027 166.002 141.027 166.594ZM147.389 169.393C148.002 171.266 150.069 172.332 152.814 172.967C156.355 173.774 157.83 174.431 159.046 175.711C157.851 177.057 155.967 177.853 153.664 177.853C147.421 177.853 143.492 173.505 143.492 166.594C143.492 166.196 143.503 165.733 143.546 165.389C143.557 165.174 143.675 165.152 143.826 165.249C144.999 166.088 146.667 166.584 148.207 166.584C149.401 166.584 150.478 166.433 151.436 166.304C152.286 166.175 153.007 166.088 153.707 166.088C157.668 166.088 160.445 168.478 160.445 171.847C160.445 172.332 160.391 172.794 160.294 173.225C158.766 172.127 156.57 171.438 153.546 170.986C151.134 170.62 149.488 170.103 148.443 168.812C147.948 168.241 147.141 168.64 147.389 169.393Z" fill="#92E3A9"/>
           </g>
           <g filter="url(#filter4_i_905_1482)">
             <text x="50%" y="45%" className="value">{metrics[index].value}</text>
           </g>
           <text x="50%" y="55%" className="title">{metrics[index].title}</text>
         </g>
         <defs>
           <filter id="filter0_d_905_1482" x="31.4336" y="10.0322" width="238.523" height="238.524" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="3"/>
             <feGaussianBlur stdDeviation="4"/>
             <feComposite in2="hardAlpha" operator="out"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0.254902 0 0 0 0 0.270588 0 0 0 0 0.364706 0 0 0 0.1 0"/>
             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_905_1482"/>
             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_905_1482" result="shape"/>
           </filter>
           <filter id="filter1_d_905_1482" x="25.4922" y="1.09082" width="250.406" height="126.203" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="1"/>
             <feComposite in2="hardAlpha" operator="out"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.607843 0 0 0 0 0.682353 0 0 0 0.5 0"/>
             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_905_1482"/>
             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_905_1482" result="shape"/>
           </filter>
           <filter id="filter2_dd_905_1482" x="45.3184" y="28.9155" width="210.758" height="210.757" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="8"/>
             <feGaussianBlur stdDeviation="7.5"/>
             <feComposite in2="hardAlpha" operator="out"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.607843 0 0 0 0 0.682353 0 0 0 0.5 0"/>
             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_905_1482"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dx="3" dy="3"/>
             <feGaussianBlur stdDeviation="4"/>
             <feComposite in2="hardAlpha" operator="out"/>
             <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
             <feBlend mode="normal" in2="effect1_dropShadow_905_1482" result="effect2_dropShadow_905_1482"/>
             <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_905_1482" result="shape"/>
           </filter>
           <filter id="filter3_d_905_1482" x="139.527" y="161.74" width="26.6484" height="23.8389" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="1.5"/>
             <feGaussianBlur stdDeviation="0.75"/>
             <feComposite in2="hardAlpha" operator="out"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
             <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow_905_1482"/>
             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_905_1482" result="shape"/>
           </filter>
           <filter id="filter4_i_905_1482" x="110.873" y="92.2031" width="76.5723" height="26.3164" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset dy="1.5"/>
             <feGaussianBlur stdDeviation="0.75"/>
             <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.607843 0 0 0 0 0.682353 0 0 0 0.25 0"/>
             <feBlend mode="normal" in2="shape" result="effect1_innerShadow_905_1482"/>
           </filter>
           <linearGradient id="paint0_linear_905_1482" x1="86.5867" y1="35.9882" x2="184.297" y2="236.588" gradientUnits="userSpaceOnUse">
             <stop stopColor="#DEE2E7"/>
             <stop offset="0.968749" stopColor="#DBE0E7"/>
           </linearGradient>
           <linearGradient id="paint1_linear_905_1482" x1="84.1801" y1="31.7989" x2="190.398" y2="233.227" gradientUnits="userSpaceOnUse">
             <stop stopColor="white" stopOpacity="0.5"/>
             <stop offset="1" stopColor="#F6F1F1"/>
           </linearGradient>
           <linearGradient id="paint2_linear_905_1482" x1="150.696" y1="26.878" x2="70.1571" y2="189.461" gradientUnits="userSpaceOnUse">
             <stop stopColor="#BE04FD"/>
             <stop offset="0.562704" stopColor="#FF8F00"/>
             <stop offset="0.949927" stopColor="#00C2FF"/>
           </linearGradient>
           <linearGradient id="paint3_linear_905_1482" x1="89.2748" y1="46.9366" x2="204.348" y2="216.745" gradientUnits="userSpaceOnUse">
             <stop stopColor="#F5F5F9"/>
             <stop offset="0.989583" stopColor="#E4E8EE"/>
           </linearGradient>
           <linearGradient id="paint4_linear_905_1482" x1="92.7771" y1="50.9392" x2="197.344" y2="203.537" gradientUnits="userSpaceOnUse">
             <stop stopColor="white"/>
             <stop offset="1" stopColor="#C0C5CD"/>
           </linearGradient>
           <linearGradient id="paint5_linear_905_1482" x1="109.269" y1="65.2158" x2="193.02" y2="193.582" gradientUnits="userSpaceOnUse">
             <stop stopColor="#DDE1E7"/>
             <stop offset="1" stopColor="#FAFBFC"/>
           </linearGradient>
           <linearGradient id="paint6_linear_905_1482" x1="167.042" y1="59.2623" x2="174.833" y2="71.2034" gradientUnits="userSpaceOnUse">
             <stop stopColor="#DDE1E7"/>
             <stop offset="1" stopColor="#FAFBFC"/>
           </linearGradient>
           <clipPath id="clip0_905_1482">
             <rect width="301" height="247" fill="white"/>
           </clipPath>
         </defs>
       </svg>
     </div>
   );
}

export default SvgInfo;
