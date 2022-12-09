interface PI {
  [p: string]: {
    d: string[];
    transform?: string;
    viewBox: string;
  };
}

export const paths: PI = {
  add: {
    viewBox: '0 0 56 56',
    d: [
      'M46.667 4.667h-28A4.671 4.671 0 0014 9.333v28A4.671 4.671 0 0018.667 42h28a4.671 4.671 0 004.666-4.667v-28a4.671 4.671 0 00-4.666-4.666zm-28 32.666v-28h28l.004 28H18.667z',
      'M9.333 18.667H4.667v28a4.671 4.671 0 004.666 4.666h28v-4.666h-28v-28zM35 14h-4.667v7h-7v4.667h7v7H35v-7h7V21h-7v-7z',
    ],
  },
  boxArrowUp: {
    viewBox: '0 0 47 47',
    d: [
      'M5.315 46.919h35.778a5.113 5.113 0 005.11-5.111V6.03a5.113 5.113 0 00-5.11-5.111H5.315a5.113 5.113 0 00-5.111 5.11v35.779a5.113 5.113 0 005.11 5.11zM23.204 11.14L35.98 23.919H25.76v12.777h-5.11V23.92H10.425L23.204 11.14z',
    ],
  },
  boxX: {
    viewBox: '0 0 46 46',
    d: [
      'M46 5.111A5.113 5.113 0 0040.889 0H5.11A5.113 5.113 0 000 5.111V40.89A5.113 5.113 0 005.111 46H40.89A5.113 5.113 0 0046 40.889V5.11zM33.751 30.138l-3.613 3.613L23 26.614l-7.138 7.137-3.613-3.613L19.386 23l-7.137-7.138 3.613-3.613L23 19.386l7.138-7.137 3.613 3.613L26.614 23l7.137 7.138z',
    ],
  },
  clock: {
    viewBox: '70 0 560 560.01',
    d: [
      'M373.33 163.33c0-12.887-10.445-23.332-23.332-23.332s-23.332 10.445-23.332 23.332v140a23.33 23.33 0 0 0 6.832 16.5l70 70c9.113 9.113 23.887 9.113 33 0s9.113-23.887 0-32.996l-63.168-63.168zm141.65 281.65c-44.066 44.074-102.67 68.348-164.98 68.348-62.324 0-120.92-24.273-164.98-68.348-44.074-44.066-68.348-102.66-68.348-164.98 0-62.316 24.273-120.91 68.348-164.98C229.086 70.946 287.68 46.672 350 46.672c62.316 0 120.92 24.273 164.98 68.348 44.074 44.074 68.348 102.67 68.348 164.98 0 62.324-24.273 120.92-68.348 164.98zM350 0c-74.797 0-145.1 29.129-197.98 82.023-52.887 52.875-82.016 123.19-82.016 197.98s29.129 145.1 82.016 197.98c52.883 52.895 123.19 82.023 197.98 82.023 74.785 0 145.09-29.129 197.98-82.023 52.895-52.875 82.023-123.19 82.023-197.98s-29.129-145.1-82.016-197.98C495.096 29.128 424.787 0 350.007 0z',
    ],
  },
  delete: {
    viewBox: '0 0 56 56',
    d: [
      'M7.5 11.833H5.167v30.334a4.668 4.668 0 004.666 4.666h23.334a4.668 4.668 0 004.666-4.666V11.833H7.5zm9.333 28h-4.666v-21h4.666v21zm14 0h-4.666v-21h4.666v21zm1.442-35L28.5.167h-14l-3.775 4.666H.5V9.5h42V4.833H32.275z',
    ],
  },
  delete2: {
    viewBox: '0 0 512 512',
    d: [
      'M257 0C116.39 0 0 114.39 0 255s116.39 257 257 257 255-116.39 255-257S397.61 0 257 0zm126.22 338.79c11.7 11.7 11.7 30.73 0 42.44-11.61 11.6-30.64 11.79-42.44 0L257 297.42l-85.79 83.82c-11.7 11.7-30.73 11.7-42.44 0-11.7-11.7-11.7-30.73 0-42.44l83.8-83.8-83.8-83.8c-11.7-11.71-11.7-30.74 0-42.44 11.71-11.7 30.74-11.7 42.44 0L257 212.58l83.78-83.82c11.68-11.68 30.71-11.72 42.44 0 11.7 11.7 11.7 30.73 0 42.44l-83.8 83.8 83.8 83.79z',
    ],
  },
  disk: {
    viewBox: '0 0 64 64',
    d: [
      'M61.707 10.293l-8-8A1 1 0 0053 2H7a5.006 5.006 0 00-5 5v50a5.006 5.006 0 005 5h50a5.006 5.006 0 005-5V11a1 1 0 00-.293-.707zM48 4v16a1 1 0 01-1 1H17a1 1 0 01-1-1V4zM10 60V35a3 3 0 013-3h38a3 3 0 013 3v25zm50-3a3 3 0 01-3 3h-1V35a5.006 5.006 0 00-5-5H13a5.006 5.006 0 00-5 5v25H7a3 3 0 01-3-3V7a3 3 0 013-3h7v16a3 3 0 003 3h30a3 3 0 003-3V4h2.586L60 11.414z',
      'M39 19h6a1 1 0 001-1V7a1 1 0 00-1-1h-6a1 1 0 00-1 1v11a1 1 0 001 1zm1-11h4v9h-4zM47 45H17a1 1 0 000 2h30a1 1 0 000-2zM47 39H17a1 1 0 000 2h30a1 1 0 000-2zM47 51H17a1 1 0 000 2h30a1 1 0 000-2z',
    ],
  },
  edit: {
    viewBox: '0 0 56 56',
    d: [
      'M44.305 4.695l7 7-5.335 5.336-7-7 5.335-5.336zM18.667 37.333h7L42.67 20.33l-7-7-17.003 17.003v7z',
      'M44.333 44.333H19.035c-.06 0-.123.024-.184.024-.077 0-.154-.021-.233-.024h-6.951V11.667h15.976L32.31 7H11.667A4.67 4.67 0 007 11.667v32.666A4.67 4.67 0 0011.667 49h32.666A4.668 4.668 0 0049 44.333V24.108l-4.667 4.667v15.558z',
    ],
  },
  enter: {
    transform: 'translate(-103.13 -110.395)',
    viewBox: '0 0 493.73 339.23',
    d: [
      'M596.86 342V119.04s0-3.41-2.945-6.07c-2.852-2.571-5.512-2.575-5.512-2.575h-46.766s-3.566 0-6.074 2.36c-3.238 3.035-3.215 6.738-3.215 6.738v166.36l-309.65-.004 51.191-51.191c3.254-3.254 3.254-8.578 0-11.84l-33.785-33.785c-3.254-3.254-8.578-3.254-11.84 0l-122.72 122.73c-1.734 1.735-2.516 4.059-2.402 6.352-.117 2.285.66 4.613 2.402 6.351l122.72 122.72c3.254 3.254 8.578 3.254 11.84 0l33.785-33.785c3.254-3.253 3.254-8.578 0-11.84l-51.191-51.191h365.79c4.606 0 8.367-3.769 8.367-8.367l.005-.003Z',
    ],
  },
  github: {
    viewBox: '0 0 24 24',
    d: [
      'M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z',
    ],
  },
  linkedin: {
    viewBox: '0 0 24 24',
    d: [
      'M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z',
    ],
  },
  mail: {
    viewBox: '0 0 392.59 217.99',
    d: [
      'M154 128.8c-21.621 0-39.199 17.582-39.199 39.199v224c0 21.621 17.582 39.199 39.199 39.199h392c21.621 0 39.199-17.582 39.199-39.199v-224c0-21.621-17.582-39.199-39.199-39.199H154Zm-.007 11.199H546c6.875 0 13.008 2.625 17.852 6.648l-193.38 164.68c-12.414 10.555-28.898 10.562-41.301 0l-193.03-164.68c4.844-4.023 10.977-6.648 17.852-6.648Zm-25.016 15.574 193.02 164.32c16.27 13.855 39.375 13.84 55.648 0l193.38-164.32c1.879 3.777 2.977 7.871 2.977 12.426v224c0 15.609-12.391 28-28 28h-392c-15.609 0-28-12.391-28-28v-224c0-4.551 1.093-8.648 2.976-12.426h-.001Z',
    ],
    transform: 'matrix(.83459 0 0 .72086 -95.812 -92.846)',
  },
  makerlog: {
    viewBox: '0 0 512 512',
    d: [
      'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
    ],
  },
  marker: {
    viewBox: '0 0 285.6 365.12',
    d: [
      'M350 97.441c-78.961 0-142.8 63.84-142.8 143.36 0 20.719 5.602 42.559 11.762 57.68 43.117 92.398 127.68 164.08 131.04 164.08 3.36 0 87.922-71.68 131.04-165.2 6.16-15.121 11.762-36.961 11.762-57.68 0-78.398-63.84-142.24-142.8-142.24H350Zm0 193.2c-28 0-50.961-22.961-50.961-50.961S322 188.719 350 188.719s50.961 22.961 50.961 50.961S378 290.641 350 290.641Z',
    ],
  },
  phone: {
    viewBox: '1677.9 611.14 485.44 501.76',
    d: [
      'M2163.31 1001.09C2163.05 989.162 2161.03 977.795 2157.3 967.33C2155.97 963.615 2152.8 960.873 2148.93 960.1L1976.58 925.866C1972.62 925.096 1968.57 926.479 1965.94 929.514C1952.24 945.303 1943.21 964.557 1939.78 984.944C1906.86 970.1 1877.69 949.081 1852.9 922.303C1829.08 896.596 1810.91 867.358 1798.76 835.241C1807.54 834.124 1816.14 831.952 1824.48 828.757C1824.49 828.757 1824.49 828.753 1824.5 828.753C1824.5 828.753 1824.5 828.749 1824.51 828.749C1824.54 828.737 1824.57 828.729 1824.59 828.718C1824.65 828.698 1824.69 828.667 1824.75 828.643C1839.85 822.952 1853.27 814.229 1864.64 802.678C1867.02 800.249 1868.18 796.866 1867.77 793.487L1848.92 636.417C1848.52 633.081 1846.65 630.104 1843.81 628.3C1829.28 619.058 1813.16 613.484 1795.9 611.734C1795.89 611.734 1795.88 611.73 1795.87 611.726C1758.33 607.886 1721.52 623.058 1697.36 652.398C1690.94 660.324 1685.62 669.093 1681.53 678.472C1681.1 679.472 1680.81 680.527 1680.68 681.613C1677.47 708.457 1677.05 735.301 1679.36 761.441C1679.32 762.37 1679.37 763.296 1679.56 764.21C1679.59 764.37 1679.62 764.526 1679.66 764.687C1687.41 849.316 1722.15 927.107 1780.19 989.717C1842.16 1056.62 1926.04 1099.41 2016.37 1110.2C2016.56 1110.22 2016.77 1110.24 2017 1110.25C2032.38 1112.01 2047.56 1112.9 2062.33 1112.9C2067.16 1112.9 2071.93 1112.8 2076.66 1112.61C2077.43 1112.58 2078.19 1112.47 2078.94 1112.28C2091.94 1109.02 2104.17 1103.43 2115.3 1095.66C2140.83 1077.79 2157.7 1050.08 2162.06 1019.35C2162.34 1018.59 2162.57 1017.8 2162.68 1016.96C2162.8 1016.11 2162.8 1015.28 2162.72 1014.46C2163.19 1010.11 2163.42 1005.72 2163.31 1001.08L2163.31 1001.09Z',
    ],
  },
  plane: {
    viewBox: '0 0 512 512',
    d: [
      'M336.293 4.67a29.608 29.608 0 00-30.571-.814L15.334 167.593a29.606 29.606 0 00-6.082 47.441 29.61 29.61 0 0016.482 7.853l26.907 3.701a11.881 11.881 0 103.33-23.502l-26.87-3.701a5.925 5.925 0 01-5.133-4.777 5.922 5.922 0 013.024-6.326L283.22 43.939 114.264 207.157a34.194 34.194 0 00-10.03 29.609l13.731 89.493a29.353 29.353 0 0024.279 24.797c1.749.293 3.52.442 5.293.444a29.235 29.235 0 0025.908-15.655l23.132-42.97 85.865 50.668a29.609 29.609 0 0044.635-23.391L349.913 31.91a29.61 29.61 0 00-13.62-27.24zM152.534 324.704a5.628 5.628 0 01-6.218 3.035 5.697 5.697 0 01-4.886-4.959l-10.474-68.508 45.154 26.611-23.576 43.821zm150.856-6.291a5.918 5.918 0 01-6.06 5.485 5.913 5.913 0 01-2.859-.822l-165.032-97.265c.403-.563.849-1.095 1.332-1.592L325.819 35.685 303.39 318.413z',
    ],
  },
  record: {
    viewBox: '0 -2.78 1024 1026.78',
    d: [
      'M467-.752C337.762 11.23 217.946 72.052 132.009 169.312A509.94 509.94 0 0 0 4.438 522.687a509.931 509.931 0 0 0 149.105 344.834 509.933 509.933 0 0 0 344.833 149.109c129.739 3.99 256.121-41.627 353.375-127.575a509.898 509.898 0 0 0 170.069-334.991 511.327 511.327 0 0 0-59.089-287.903A511.278 511.278 0 0 0 754.905 58.335 511.254 511.254 0 0 0 467.002-.75L467-.752Zm46.619 690.295a182.14 182.14 0 0 1-128.772-53.335 182.148 182.148 0 0 1-53.335-128.772 182.14 182.14 0 0 1 53.335-128.772 182.148 182.148 0 0 1 128.772-53.335 182.14 182.14 0 0 1 128.772 53.335 182.148 182.148 0 0 1 53.335 128.772 182.14 182.14 0 0 1-53.335 128.772 182.148 182.148 0 0 1-128.772 53.335Z',
    ],
  },
  reddit: {
    viewBox: '0 0 24 24',
    d: [
      'M11.102 7.815l.751-3.536a2 2 0 012.373-1.54l3.196.68a2 2 0 11-.416 1.956l-3.196-.68-.666 3.135c1.784.137 3.557.73 5.163 1.7a3.192 3.192 0 014.741 2.673v.021a3.192 3.192 0 01-1.207 2.55 2.855 2.855 0 01-.008.123c0 3.998-4.45 7.03-9.799 7.03-5.332 0-9.708-3.024-9.705-6.953a5.31 5.31 0 01-.01-.181 3.192 3.192 0 013.454-5.35 11.446 11.446 0 015.329-1.628zm9.286 5.526c.408-.203.664-.62.661-1.075a1.192 1.192 0 00-2.016-.806l-.585.56-.67-.455c-1.615-1.098-3.452-1.725-5.23-1.764h-1.006c-1.875.029-3.651.6-5.237 1.675l-.663.45-.584-.55a1.192 1.192 0 10-1.314 1.952l.633.29-.054.695c-.013.17-.013.339.003.584 0 2.71 3.356 5.03 7.708 5.03 4.371 0 7.799-2.336 7.802-5.106a3.31 3.31 0 000-.508l-.052-.672.604-.3zM7 13.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm7 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-1.984 5.103c-1.397 0-2.767-.37-3.882-1.21a.424.424 0 01.597-.597c.945.693 2.123.99 3.269.99s2.33-.275 3.284-.959a.439.439 0 01.732.206.469.469 0 01-.119.423c-.684.797-2.484 1.147-3.881 1.147z',
    ],
  },
  twitter: {
    viewBox: '0 0 512 512',
    d: [
      'M507.413 93.394a10.446 10.446 0 00-12.174.327c-3.612 2.735-9.474 5.087-16.138 7.016 18.245-21.301 18.623-35.541 18.408-38.893a10.467 10.467 0 00-5.985-8.791 10.476 10.476 0 00-10.587 1.005c-21.893 15.908-43.689 19.373-56.791 19.76-20.337-19.342-46.704-29.944-74.74-29.944-60.271 0-109.307 49.684-109.307 110.751 0 4.944.327 9.878.969 14.771C138.176 167.645 54.665 69.155 53.803 68.119c-2.184-2.617-5.5-4.041-8.929-3.714a10.46 10.46 0 00-8.148 5.189c-29.005 50.322-11.286 94.725 6.505 121.327-1.837-1.092-3.342-2.097-4.372-2.857a10.459 10.459 0 00-10.852-.995 10.456 10.456 0 00-5.837 9.209c-.786 48.255 21.764 76.49 43.674 92.49a10.432 10.432 0 00-6.266 3.276 10.442 10.442 0 00-2.311 10.122c15.194 49.735 52.041 67.352 76.373 73.587-49.22 37.138-120.557 25.016-121.348 24.867-4.73-.831-9.464 1.663-11.408 6.082a10.445 10.445 0 003.225 12.51c52.464 40.041 115.21 48.913 160.53 48.913 34.272 0 58.573-5.077 60.91-5.582 228.617-54.179 235.864-263.063 235.394-298.66 42.888-39.929 49.633-55.255 50.684-59.067a10.463 10.463 0 00-4.214-11.422zm-64.13 58.358a10.453 10.453 0 00-3.346 8.398c.036.561 3.536 57.179-21.694 120.266-33.709 84.291-100.164 138.725-197.307 161.746-1.041.219-90.905 18.831-169.792-18.689 33.725-1.414 80.429-10.913 113.292-47.806 2.745-3.077 3.398-7.833 1.709-11.593-1.689-3.75-5.439-6.51-9.551-6.51h-.071c-2.76 0-50.337-.357-73.133-46.306 9.219.398 20.24-.145 29.122-4.237 4.092-1.888 6.51-6.1 6.005-10.574-.505-4.475-3.821-8.079-8.23-9.008-2.556-.541-57.649-12.836-66.143-72.693 8.464 3.526 19.015 6.257 29.51 4.685a10.44 10.44 0 008.474-7.413 10.463 10.463 0 00-3.184-10.809c-2.383-2.07-54.327-48.273-30.541-107.973 28.158 29.332 108.46 102.368 205.833 96.786a10.459 10.459 0 007.82-4.25 10.435 10.435 0 001.71-8.728 92.125 92.125 0 01-2.77-22.418c0-49.546 39.658-89.853 88.409-89.853 23.842 0 46.203 9.515 62.97 26.796a10.462 10.462 0 007.322 3.174c9.658.092 25.561-.949 43.531-7.633-5.359 6.275-12.852 13.622-23.332 21.852a10.457 10.457 0 00-3.276 12.026c1.684 4.301 6.056 7.02 10.566 6.607 2.112-.168 12.352-1.071 24.352-3.505-6.876 7.31-16.044 16.433-28.255 27.662z',
    ],
  },
  twitterfill: {
    viewBox: '0 0 512 512',
    d: [
      'M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z',
    ],
  },
  upload: {
    viewBox: '0 0 121.86 122.88',
    d: [
      'M72.09 18.72h42.37c2.05 0 3.89.84 5.22 2.18a7.398 7.398 0 012.18 5.22v89.36c0 2.05-.84 3.89-2.18 5.22a7.398 7.398 0 01-5.22 2.18H24.48c-2.05 0-3.89-.84-5.22-2.18a7.398 7.398 0 01-2.18-5.22V71.46c2.47 1 5.05 1.78 7.72 2.29v20.28h.03C37.72 81.7 46.26 75.61 59.08 65.2l.15.15c.03.03.03.06.06.06l26.82 31.73 4.1-25.24c.28-1.62 1.8-2.73 3.42-2.45.62.09 1.18.4 1.62.81l18.82 19.77V27.91c0-.4-.16-.75-.44-.99-.25-.25-.62-.44-.99-.44H74.05c-.41-2.68-1.07-5.27-1.96-7.76zM32.79 0C50.9 0 65.58 14.68 65.58 32.79S50.9 65.58 32.79 65.58 0 50.9 0 32.79 14.68 0 32.79 0zM15.37 33.37h11.04v15.76h12.45V33.37h11.36L32.8 16.44 15.37 33.37zm78.9 2.29c2.95 0 5.66 1.21 7.58 3.14 1.96 1.96 3.14 4.63 3.14 7.59 0 2.95-1.21 5.66-3.14 7.58a10.656 10.656 0 01-7.58 3.14c-2.95 0-5.66-1.21-7.59-3.14a10.656 10.656 0 01-3.14-7.58c0-2.95 1.21-5.65 3.14-7.59 1.97-1.96 4.64-3.14 7.59-3.14z',
    ],
  },
};