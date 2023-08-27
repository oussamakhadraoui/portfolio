import * as React from 'react'
export const GithubIcon = ({className}:{className:string}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className={`w-full h-auto undefined ${className}`}
    viewBox='0 0 512 512'

  >
    <path fill='none' d='M0 0h512v512H0z' />
    <path
      fill='currentColor'
      d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z'
    />
  </svg>
)
export const Linkedin = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className={`w-full h-auto undefined ${className}`}
    viewBox='0 0 256 256'
  >
    <path fill='none' d='M0 0h256v256H0z' />
    <g fill='none'>
      <rect width={256} height={256} fill='#fff' rx={60} />
      <rect width={256} height={256} fill='#0A66C2' rx={60} />
      <path
        fill='#fff'
        d='M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z'
      />
    </g>
  </svg>
)
export const LinkArrow = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    className={' h-auto ml-1 !w-6 md:!w-4' + className}
  >
    <path fill='none' d='M0 0h24v24H0z'></path>
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5'
    ></path>
  </svg>
)
export const MrRobot = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 50 50'
    width='50px'
    height='50px'
  >
    <path d='M 46.710938 15.214844 C 46.898438 14.816406 47 14.375 47 13.929688 C 47 12.3125 45.742188 11 44.199219 11 C 44.050781 11 43.886719 11.035156 43.71875 11.070313 C 40.878906 5.191406 33.578125 1 25 1 C 16.421875 1 9.121094 5.191406 6.28125 11.070313 C 6.113281 11.035156 5.949219 11 5.800781 11 C 4.257813 11 3 12.3125 3 13.929688 C 3 14.378906 3.101563 14.816406 3.289063 15.214844 C 3.101563 15.613281 3 16.050781 3 16.5 C 3 16.949219 3.101563 17.386719 3.289063 17.785156 C 3.101563 18.183594 3 18.625 3 19.070313 C 3 20.4375 3.902344 21.578125 5.113281 21.898438 C 5.042969 22.257813 5 22.621094 5 23 C 5 24.777344 5.8125 26.367188 7.105469 27.46875 C 7.3125 27.644531 7.753906 28.363281 8.078125 29.019531 C 8.03125 29.339844 8 29.664063 8 30 C 8 31.621094 8.554688 33.105469 9.480469 34.292969 C 11.109375 39.621094 13.308594 41.191406 14.472656 42 C 16.074219 43.109375 17.632813 43.546875 17.632813 45 C 17.632813 46.648438 20.261719 48 22 48 L 28 48 C 29.738281 48 32.367188 46.648438 32.367188 45 C 32.367188 43.546875 33.921875 43.109375 35.527344 42 C 36.691406 41.191406 38.890625 39.621094 40.519531 34.292969 C 41.445313 33.105469 42 31.621094 42 30 C 42 29.664063 41.96875 29.339844 41.921875 29.019531 C 42.246094 28.363281 42.6875 27.644531 42.894531 27.464844 C 44.1875 26.367188 45 24.777344 45 23 C 45 22.621094 44.957031 22.257813 44.886719 21.898438 C 46.097656 21.578125 47 20.4375 47 19.070313 C 47 18.621094 46.898438 18.183594 46.710938 17.785156 C 46.898438 17.386719 47 16.949219 47 16.5 C 47 16.050781 46.898438 15.613281 46.710938 15.214844 Z M 8.769531 17.144531 C 8.875 17.269531 9 17.484375 9 17.785156 C 9 18.1875 8.777344 18.546875 8.445313 18.671875 C 8.386719 18.691406 8.191406 18.792969 7.925781 18.953125 C 6.515625 19.792969 5.988281 19.984375 5.800781 20 C 5.359375 20 5 19.582031 5 19.070313 C 5 18.769531 5.125 18.554688 5.230469 18.429688 L 5.773438 17.785156 L 5.230469 17.140625 C 5.125 17.015625 5 16.800781 5 16.5 C 5 16.199219 5.125 15.984375 5.230469 15.855469 L 5.773438 15.214844 L 5.230469 14.570313 C 5.125 14.445313 5 14.230469 5 13.929688 C 5 13.417969 5.359375 13 5.792969 13 C 5.988281 13.015625 6.515625 13.207031 7.925781 14.046875 C 8.195313 14.207031 8.386719 14.308594 8.445313 14.328125 C 8.777344 14.457031 9 14.8125 9 15.214844 C 9 15.515625 8.875 15.730469 8.769531 15.855469 L 8.226563 16.5 Z M 27.4375 13.4375 C 27.804688 13.074219 29.5625 10 33 10 C 34.308594 10 35.683594 10.378906 36.996094 11.519531 C 37.6875 12.117188 37.628906 13.113281 36.996094 12.804688 C 35.882813 12.261719 34.886719 12 34 12 C 31.3125 12 29.972656 15.148438 29.5625 15.5625 C 28.976563 16.148438 28.023438 16.148438 27.441406 15.5625 C 26.855469 14.976563 26.855469 14.023438 27.4375 13.4375 Z M 36 19.867188 C 36 21.863281 34.101563 20.597656 32.597656 20.597656 C 31.09375 20.597656 29 21.742188 29 20.199219 C 29 18.65625 30.996094 17.007813 32.5 17.007813 C 34.003906 17.007813 36 17.855469 36 19.867188 Z M 13.003906 11.519531 C 14.316406 10.378906 15.691406 10 17 10 C 20.4375 10 22.195313 13.074219 22.5625 13.4375 C 23.148438 14.023438 23.148438 14.976563 22.5625 15.558594 C 21.976563 16.144531 21.023438 16.144531 20.441406 15.558594 C 20.027344 15.148438 18.6875 12 16 12 C 15.113281 12 14.117188 12.261719 13.003906 12.804688 C 12.371094 13.109375 12.3125 12.117188 13.003906 11.519531 Z M 21 20.199219 C 21 21.742188 18.90625 20.597656 17.402344 20.597656 C 15.898438 20.597656 14 21.859375 14 19.863281 C 14 17.851563 15.996094 17.003906 17.5 17.003906 C 19.003906 17.003906 21 18.65625 21 20.199219 Z M 35.699219 35.386719 C 33.863281 35.984375 32.945313 36 29.410156 36 C 29.410156 36 20.589844 36 20.589844 36 C 17.054688 36 16.136719 35.984375 14.300781 35.386719 C 11.960938 34.625 10 32.730469 10 29.96875 C 10 27.570313 12.136719 25 14.410156 25 C 13.488281 25.597656 12.648438 26.546875 12.648438 27.46875 C 12.648438 29.402344 14.03125 30.96875 15.734375 30.96875 C 17.074219 30.96875 19.34375 27.027344 20.996094 27 C 21.398438 27.617188 22.039063 28.023438 22.769531 28.023438 C 22.886719 28.023438 23.148438 28.125 23.210938 28.199219 C 23.472656 29.25 26.527344 29.25 26.789063 28.199219 C 26.847656 28.125 27.113281 28.023438 27.230469 28.023438 C 27.960938 28.023438 28.601563 27.617188 29.003906 27 C 30.65625 27.023438 32.925781 30.96875 34.265625 30.96875 C 35.96875 30.96875 37.351563 29.402344 37.351563 27.46875 C 37.351563 26.546875 36.714844 25.6875 35.585938 25 C 37.792969 25 40 27.570313 40 29.96875 C 40 32.730469 38.039063 34.625 35.699219 35.386719 Z M 44.769531 15.855469 C 44.875 15.984375 45 16.199219 45 16.5 C 45 16.800781 44.875 17.015625 44.769531 17.144531 L 44.226563 17.785156 L 44.769531 18.429688 C 44.875 18.554688 45 18.769531 45 19.070313 C 45 19.582031 44.640625 20 44.207031 20 C 44.011719 19.984375 43.484375 19.792969 42.074219 18.953125 C 41.808594 18.792969 41.613281 18.691406 41.554688 18.671875 C 41.222656 18.542969 41 18.1875 41 17.785156 C 41 17.484375 41.125 17.269531 41.230469 17.144531 L 41.773438 16.5 L 41.230469 15.855469 C 41.125 15.730469 41 15.515625 41 15.214844 C 41 14.8125 41.222656 14.453125 41.554688 14.328125 C 41.613281 14.308594 41.804688 14.207031 42.074219 14.046875 C 43.484375 13.207031 44.011719 13.011719 44.199219 13 C 44.640625 13 45 13.417969 45 13.929688 C 45 14.230469 44.875 14.445313 44.769531 14.570313 L 44.230469 15.214844 Z' />
  </svg>
)
export const DarkIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    className='w-full h-auto fill-dark'
    viewBox='0 0 24 24'
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeDasharray='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path d='M12 21v1m9-10h1M12 3V2M3 12H2'>
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          dur='0.2s'
          values='4;2'
        ></animate>
      </path>
      <path d='M18.5 18.5l.5.5m-.5-13.5L19 5m-13.5.5L5 5m.5 13.5L5 19'>
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='0.2s'
          dur='0.2s'
          values='4;2'
        ></animate>
      </path>
    </g>
    <g fill='currentColor' fillOpacity='0'>
      <path d='M15.22 6.03l2.53-1.94L14.56 4 13.5 1l-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81z'>
        <animate
          id='lineMdSunnyFilledLoopToMoonFilledLoopTransition0'
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s'
          dur='0.4s'
          values='0;1'
        ></animate>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s'
          dur='0.4s'
          values='1;0'
        ></animate>
      </path>
      <path d='M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s'
          dur='0.4s'
          values='0;1'
        ></animate>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s'
          dur='0.4s'
          values='1;0'
        ></animate>
      </path>
      <path d='M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s'
          dur='0.4s'
          values='0;1'
        ></animate>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s'
          dur='0.4s'
          values='1;0'
        ></animate>
      </path>
      <path d='M20.828 9.731l1.876-1.439-2.366-.067L19.552 6l-.786 2.225-2.366.067 1.876 1.439L17.601 12l1.951-1.342L21.503 12z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s'
          dur='0.4s'
          values='0;1'
        ></animate>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s'
          dur='0.4s'
          values='1;0'
        ></animate>
      </path>
    </g>
    <mask id='lineMdSunnyFilledLoopToMoonFilledLoopTransition1'>
      <circle cx='12' cy='12' r='12' fill='#fff'></circle>
      <circle cx='22' cy='2' r='3' fill='#fff'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.1s'
          dur='0.4s'
          values='22;18'
        ></animate>
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.1s'
          dur='0.4s'
          values='2;6'
        ></animate>
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.1s'
          dur='0.4s'
          values='3;12'
        ></animate>
      </circle>
      <circle cx='22' cy='2' r='1'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.1s'
          dur='0.4s'
          values='22;18'
        ></animate>
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.1s'
          dur='0.4s'
          values='2;6'
        ></animate>
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.1s'
          dur='0.4s'
          values='1;10'
        ></animate>
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='6'
      fill='currentColor'
      mask='url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)'
    >
      {/* <set attributeName='opacity' begin='0.5s' to='0'></set> */}
      <animate
        fill='freeze'
        attributeName='r'
        begin='0.1s'
        dur='0.4s'
        values='6;10'
      ></animate>
    </circle>
  </svg>
)
export const SunIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    className='w-full h-auto fill-dark'
    viewBox='0 0 24 24'
  >
    <path fill='rgba(255, 255, 255, 0)' d='M0 0H24V24H0z'></path>
    <g>
      <animateTransform
        fill='none'
        stroke='currentColor'
        strokeDasharray='2'
        strokeDashoffset='2'
        strokeLinecap='round'
        strokeWidth='2'
        attributeName='transform'
        dur='30s'
        repeatCount='indefinite'
        type='rotate'
        values='0 12 12;360 12 12'
      ></animateTransform>
    </g>
    <g fill='currentColor'>
      <path d='M15.22 6.03l2.53-1.94L14.56 4 13.5 1l-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81-.91-3.06z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          dur='0.4s'
          values='1;0'
        ></animate>
      </path>
      <path d='M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17-.59-1.98z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.2s'
          dur='0.4s'
          values='1;0'
        ></animate>
      </path>
    </g>
    <g
      fill='currentColor'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path d='M7 6a10.994 10.994 0 0012.56 10.89C17.95 19.36 15.17 21 12 21a9 9 0 01-9-9c0-3.17 1.64-5.95 4.11-7.56C7.04 4.95 7 5.47 7 6z'></path>
      {/* <set attributeName='opacity' begin='0.6s' to='0'></set> */}
    </g>
    <mask>
      <circle cx='12' cy='12' r='12' fill='#fff'></circle>
      <circle cx='18' cy='6' r='12' fill='#fff'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.6s'
          dur='0.4s'
          values='18;22'
        ></animate>
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.6s'
          dur='0.4s'
          values='6;2'
        ></animate>
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.6s'
          dur='0.4s'
          values='12;3'
        ></animate>
      </circle>
      <circle cx='18' cy='6' r='10'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.6s'
          dur='0.4s'
          values='18;22'
        ></animate>
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.6s'
          dur='0.4s'
          values='6;2'
        ></animate>
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.6s'
          dur='0.4s'
          values='10;1'
        ></animate>
      </circle>
    </mask>
  </svg>
)


