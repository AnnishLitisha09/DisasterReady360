import { create } from 'zustand';

const initialVideos = [
  {
    id: '1',
    topic: 'earthquake',
    topicimg:'https://example.com/earthquake-image.jpg',
    title: 'How to Protect Yourself During an Earthquake',
    subtitle: 'Drop, Cover, Hold on',
    description:
      'Learn the correct procedure during an earthquake to minimize injuries and stay safe.',
    keyPoints: [
      'Drop to your hands and knees to prevent being knocked over.',
      'Cover your head and neck with your arms or under sturdy furniture.',
      'Hold on to the furniture or shelter until shaking stops.',
      'Stay indoors until the shaking stops; avoid running outside.',
      'Avoid standing in doorways due to falling debris risks.',
    ],
    duration: '3:37 min',
    videoId: 'BLEPakj1YTY',
    image:
      'https://imgs.search.brave.com/BHDYuSK_xPfYGwiS_YC7Zv5ajyOt4fnjvCUyxiy0B6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA1/NTUzMDMzL3ZlY3Rv/ci9lYXJ0aHF1YWtl/LWhvdy10by1wcm90/ZWN0LXlvdXJzZWxm/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1FR3lrblJLR3VE/eTYxUUppdDQ0Y0NF/NndwcWlWVHFBcm5k/Vng2X2JfRUtBPQ',
    isViewed: true,
  },
  {
  id: '2',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-safety.jpg',
  title: '10 Ways to survive on EarthQuake',
  subtitle: 'Plan, Prepare, Protect',
  description:
    'Understand how to prepare your home and family before an earthquake occurs.',
  keyPoints: [
    'Secure heavy furniture and appliances to walls.',
    'Store emergency supplies including water, food, and first-aid kits.',
    'Identify safe spots in each room such as under sturdy tables.',
    'Create a family communication and evacuation plan.',
    'Practice earthquake drills regularly.',
  ],
  duration: '8:40 min',
  videoId: 'hWSu4l1RxLg',
  image: 'https://imgs.search.brave.com/Z7nRcfYYRNCgkmokNf77HuQVUqfyilACG4H0mEwBqBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZndkLmNvbS5waC9p/bWFnZXMvdjMvYXNz/ZXRzL2JsdDlkMjQ1/MDU1OTcyZmRlNGUv/Ymx0MzI2YWRkMzhh/MGUxYmYxOC82ODA5/ZTRiMWU0MWIxZjI4/MmFiYmFkYTQvRWFy/dGhxdWFrZV9TYWZl/dHkucG5n',
  isViewed: false,
},
{
  id: '3',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-outdoors.jpg',
  title: 'What to Do During an Earthquake (Outdoors)',
  subtitle: 'Dos & Donts Of Earthquake Survival',
  description:
    'Learn the right actions to take when an earthquake strikes while you are outside.',
  keyPoints: [
    'Move to an open area away from buildings, trees, and power lines.',
    'Stay low to the ground to avoid falling.',
    'Do not run or try to enter buildings.',
    'Protect your head from falling debris.',
    'Stay alert for aftershocks.',
  ],
  duration: '17:27 min',
  videoId: 'S6BFw4ZURZQ',
  image: 'https://imgs.search.brave.com/i5eUhRVnCf7_l2a_lGPzU-KSgtjmQQyXMavq9_YGvpY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvZWFydGhx/dWFrZS1zYWZldHkt/cnVsZXMtaW5zdHJ1/Y3Rpb24tY2FzZS0y/NjBudy0yMTUyMjYx/OTA3LmpwZw',
  isViewed: false,
},
{
  id: '4',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-school.jpg',
  title: 'Earthquake Safety for Children',
  subtitle: 'Protecting Students and Teachers',
  description:
    'Explore the best practices for students, teachers, and staff to remain safe during earthquakes in schools.',
  keyPoints: [
    'Follow the “Drop, Cover, and Hold On” rule immediately.',
    'Move away from windows and glass.',
    'Teachers should guide students calmly to safe zones.',
    'Avoid overcrowding in exits or stairways.',
    'Conduct regular earthquake preparedness drills.',
  ],
  duration: '5:54 min',
  videoId: 'MllUVQM3KVk',
  image: 'https://imgs.search.brave.com/S-Qxt9hRo3pyowJD9FI4OrvL__dVuVZLnde7GTZENTA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vdHByaW50c2Vk/dWNhdGlvbi5pbi9i/bG9nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA4L0VhcnRo/cXVha2Utc2FmZXR5/LWZvci1jaGlsZHJl/bi0xMjAweDY3OC5q/cGc',
  isViewed: false,
},
{
  id: '5',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-buildings.jpg',
  title: 'Post-Earthquake Safety Measures',
  subtitle: 'Stay Cautious After the Shaking Stops',
  description:
    'Discover the crucial steps to take after an earthquake to ensure personal and community safety.',
  keyPoints: [
    'Check yourself and others for injuries and provide first aid.',
    'Be cautious of aftershocks.',
    'Inspect your home for structural damage before re-entering.',
    'Avoid using elevators until deemed safe.',
    'Listen to emergency services for updates and instructions.',
  ],
  duration: '6:23 min',
  videoId: 'd3K_5ZSyEBA',
  image: 'https://imgs.search.brave.com/HIKDu-ibFfmoDfXcPJaUBnQ5nOr53FLQ34hueOk82wI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2xpZGVzaGFyZWNk/bi5jb20vc3NfdGh1/bWJuYWlscy9lYXJ0/aHF1YWtlc2FmZXR5/ZmluYWwtMjUwNDI4/MDQyMjEwLWI3NjMw/NTc0LXRodW1ibmFp/bC5qcGc_d2lkdGg9/NTYwJmZpdD1ib3Vu/ZHM',
  isViewed: false,
},
{
  id: '6',
  topic: 'earthquake',
  topicimg: 'https://example.com/earthquake-community.jpg',
  title: 'Rebuilding Hope: HDCS’s Earthquake Response & Recovery',
  subtitle: 'Working Together in Crisis',
  description:
    'Learn how communities can respond and support one another after a major earthquake.',
  keyPoints: [
    'Organize community first-aid and response groups.',
    'Set up temporary shelters for displaced residents.',
    'Ensure safe distribution of food and water.',
    'Assist authorities in search and rescue operations.',
    'Promote emotional and psychological support for victims.',
  ],
  duration: '4:32 min',
  videoId: 'xqbQ-CFgrbQ',
  image: 'https://imgs.search.brave.com/Hd32HdDtVTA4KK8_plO945tKzXu8EeQXzZwytadf5X4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbGxo/YW5kc2FuZGhlYXJ0/cy5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDcvTWV4/aWNvX0VhcnRocXVh/a2VfUmVsaWVmX0dh/bGxlcnlfMy1zY2Fs/ZWQud2VicA',
  isViewed: false,
},
  {
    id: '1',
    topic: 'fire',
    topicimg: 'https://example.com/fire-alarm.jpg',
    title: 'Immediate Actions During a Fire',
    subtitle: 'Alert, Evacuate, Stay Low',
    description:
      'Learn how to act quickly and safely when a fire breaks out indoors or nearby.',
    keyPoints: [
      'Alert everyone in the building immediately.',
      'Activate the nearest fire alarm.',
      'Stay low under smoke to avoid inhalation.',
      'Cover your mouth and nose with a cloth.',
      'Evacuate quickly using the safest exit.',
    ],
    duration: '2:51 min',
    videoId: '37HcRDhhxYw',
    image: 'https://imgs.search.brave.com/IyFmMUAaYDwAUE8FM7QhS-xXGrrEdKS7QL7ou99Qqyk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92YXRy/b3Byb21ldC5oci91/cGxvYWQvcHVibGlz/aC8zNy90aHVtYi92/YXRyb2dhc2NpLWV2/YWt1aXJhanUtb3Nv/YnUtcG96YXJfNjNm/MzQ2OGFmMGVjOV8x/MjAweDYwMHIud2Vi/cA',
    isViewed: false,
  },
  {
    id: '2',
    topic: 'fire',
    topicimg: 'https://example.com/fire-evacuate.jpg',
    title: 'Safe Evacuation During a Fire',
    subtitle: 'Plan, Guide, Exit',
    description:
      'Understand the best practices to safely evacuate yourself and others during a fire.',
    keyPoints: [
      'Do not use elevators; use stairs.',
      'Stay close to walls if visibility is low.',
      'Help children, elderly, or disabled people evacuate.',
      'Close doors behind you to slow the fire spread.',
      'Gather at a pre-decided safe meeting point outside.',
    ],
    duration: '1:50 min',
    videoId: '7gHEtGY4chE',
    image: 'https://imgs.search.brave.com/m4XRtRWnQixqKjU-nF7Xhy1rEATK4pzAmgwrVoefbDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODQy/MzIzOTc2L3Bob3Rv/L2Nsb3NlLXVwLW9m/LWVtZXJnZW5jeS1l/dmFjdWF0aW9uLXNp/Z24uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTVVUWRZS01o/WFpTRFBZQkJvRjYx/Zlhyb21NOHphQmdx/SXlKSjQ0T1JtZnM9',

    isViewed: false,
  },
  {
    id: '3',
    topic: 'fire',
    topicimg: 'https://example.com/fire-trapped.jpg',
    title: 'If You Are Trapped in a Fire',
    subtitle: 'Stay Calm, Signal for Help',
    description:
      'Learn the correct steps to stay safe if you are trapped during a fire emergency.',
    keyPoints: [
      'Seal gaps under doors with wet cloths.',
      'Signal for help from a window or balcony.',
      'Stay low to the ground where the air is cleaner.',
      'Avoid breaking windows unless absolutely necessary.',
      'Conserve energy and remain calm while waiting for rescue.',
    ],
    duration: '4:30 min',
    videoId: 'GAiw8PexsOU',
    image: 'https://imgs.search.brave.com/3OohWIpwBO2C8v2D6QJevWcdcdJU0V7lR64C2MnUigw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWlyYXNhZmV0eS5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvY2Fs/ZWItY29vay1zeXVv/eDhmaXBYNC11bnNw/bGFzaF81MjB4NTAw/XzRlNWI4ODdhLWU1/ZmEtNDFkOS05ODE3/LTRkYjJhZmUzMTU0/Yi5qcGc_Zm9ybWF0/PXBqcGcmdj0xNzM2/MzY0MTQ5JndpZHRo/PTIwMDA',
    isViewed: false,
  },
  {
    id: '4',
    topic: 'fire',
    topicimg: 'https://example.com/fire-extinguisher.jpg',
    title: 'Using Fire Safety Equipment',
    subtitle: 'Extinguish, Protect, Practice',
    description:
      'Understand how to correctly use fire safety equipment like extinguishers and blankets.',
    keyPoints: [
      'Use a fire extinguisher only for small fires.',
      'Remember the PASS technique: Pull, Aim, Squeeze, Sweep.',
      'Know the location of fire hoses and sprinklers.',
      'Keep fire blankets accessible in kitchens and labs.',
      'Practice fire drills regularly.',
    ],
    duration: '2:10 min',
    videoId: 'PQV71INDaqY',
    image: 'https://imgs.search.brave.com/2zacaePPDicP9SeEbo6vyIrpTxpqFhyEwKM2kcGw-zc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAx/OTEzMTc3Mi9waG90/by9saXR0bGUtYm95/LXByZXRlbmRpbmct/dG8tYmUtYS1maXJl/bWFuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz04aGpiREJV/OEtkNk8tZi1uVXBV/RUJqRXAtOG1aYlNR/em5oeHB5NXBaWnZj/PQ',
    isViewed: false,
  },
  {
    id: '5',
    topic: 'fire',
    topicimg: 'https://example.com/fire-after.jpg',
    title: 'After the Fire: Safety Measures',
    subtitle: 'Check, Report, Recover',
    description:
      'Learn the essential steps to take after a fire to ensure safety and recovery.',
    keyPoints: [
      'Do not re-enter until authorities declare it safe.',
      'Check for injuries and get medical help if needed.',
      'Report the incident to fire services.',
      'Avoid touching burned structures or debris.',
      'Review safety measures and improve preparedness.',
    ],
    duration: '4:20 min',
    videoId: 'ReL-DM9xhpI',
    image: 'https://imgs.search.brave.com/Tjtx4nM_h884s1wmdHbr9CPeOabDW21l2CtBhrEgxHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS9lMjM5NzZl/Ny9kbXMzcmVwL211/bHRpL29wdC9hcmZp/Y2FuLWZpcmVtYW4t/dW5pZm9ybS1tYW4t/cHJlcGFyZS13b3Jr/LWd1eS13aXRoLWNo/aWxkXzExNTctNDY5/MjgtMTkyMHcuanBl/Zw',
    isViewed: false,
  },
  {
    id: '6',
    topic: 'fire',
    topicimg: 'https://example.com/fire-community.jpg',
    title: 'Community Response to Fires',
    subtitle: 'Helping Together',
    description:
      'Explore how communities can respond and support each other during and after fire emergencies.',
    keyPoints: [
      'Organize community emergency response teams.',
      'Set up temporary shelters for affected residents.',
      'Ensure safe distribution of food and water.',
      'Assist authorities in firefighting and rescue operations.',
      'Provide emotional and psychological support to victims.',
    ],
    duration: '5:15 min',
    videoId: 'FNvMpx2rqBs',
    image: 'https://imgs.search.brave.com/Z1jy2Ffed7DZR-OKA4sxO7WPoBIN73AHzYNCcPmZHLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bm9hYS5nb3Yvc2l0/ZXMvZGVmYXVsdC9m/aWxlcy8yMDIyLTA5/L1J1bUNyZWVrRmly/ZVllbGxvd0phY2tl/dHMuSlBH',
    isViewed: false,
  },
];



const initialInfographics = [
  {
    id: '1',
    topic: 'earthquake',
    title: 'Drop, Cover, Hold on',
    subtitle: 'Cover the topic properly',
    image:
      'https://imgs.search.brave.com/0kxTBcvuYmqfNI97wGmL9SsNbMYXNoCrQFYWZMQaJoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjQ0ODg4L3Bob3Rv/L2VhcnRocXVha2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWFhZGFkM1U2S2Ey/dTk5YWhXQk9Ndkxl/bjJpS0daM2oxQ09Y/eHBQTjJndE09',
    isViewed: true,
    description:
      'This infographic teaches the correct procedure during an earthquake to minimize injuries and stay safe.',
    keyPoints: [
      'Drop to your hands and knees.',
      'Cover your head and neck.',
      'Hold on to something sturdy.',
      'Stay indoors until the shaking stops.',
      'Avoid windows and heavy objects.',
    ],
    infographicsImages: [
      'https://imgs.search.brave.com/kcT1M1USBhWqKxOfvI8FQFw5qcCNzbN0mY2heyn6gZA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9lYXJ0/aHF1YWtlLWFoZWFk/LXZpZXctaG91c2Ut/ZGlzdHJveWVkLXNp/Z24tMzc3NjIxNjMu/anBn',
      'https://imgs.search.brave.com/XKF7YfU1t4HH8TwxABm0YirEXK7_7Oen66dH0zJFvrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9lYXJ0aHF1/YWtlLXdhdmUtbW9y/b2Njby1tYXAtMjYw/bnctMjM1OTI4NzA4/Ny5qcGc',
      'https://imgs.search.brave.com/4mIbwcKoKQny86YZtNxLgKkMpHPI2wfCI81KIbk8I_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MTIwNzUwOC9waG90/by9kZXN0cm95ZWQt/Y2l0eXNjYXBlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1X/QWhlMUZ6Q1Ffb0RZ/LVU1bzZYLWdmSllN/UU83cXdSQk1VQzNf/UkVIT3pZPQ',
      'https://imgs.search.brave.com/8ZRF6n9DrJ4qav8AcS7AQyUX2xWMecBgzdie0bavIJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/NDUwMjUzNi9waG90/by9hZXJpYWwtdmll/dy1vZi1jaXR5LXN0/cmVldC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UnJwUE4x/Q2FvbmFxcHE1S3VX/T1lZSVYwYVdYLUta/OGZHbFloZ1VIa1U4/MD0',
      'https://imgs.search.brave.com/Wm8tM-gHmLVbbvWJ1wcYR-wMr7wRKJZecdhP6B6fRSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RiL1F1YWtlX2Vw/aWNlbnRlcnNfMTk2/My05OC5wbmc',
      'https://imgs.search.brave.com/u7d2Ew9cJd90ao2Qz0dUsBy0Nbe7v4EN7KltCp3NZX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZWFy/dGhxdWFrZS1waWN0/dXJlcy1zNGFueXJt/YWtpZG5zOThxLmpw/Zw',
    ],
  },
    {
    id: '3',
    topic: 'earthquake',
    title: 'If You’re Indoors',
    subtitle: 'Cover the topic properly',
    image:
      'https://imgs.search.brave.com/K-19lU9EO6oMvooV3g6GIcRPImb2qWq8BO8SvhYvMIs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/MDQ0MzY0Ny92ZWN0/b3IvY2hhcmFjdGVy/cy1vYnNlcnZlLWVh/cnRocXVha2Utc2Fm/ZXR5LXJ1bGVzLWRy/b3AtY292ZXItaG9s/ZC1vbi1zdGF5LWF3/YXktZnJvbS13aW5k/b3dzLXVzZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9OGwy/NFl5aTlyMUVENUE5/OHMwMmJyUTJGRFN5/eXZsSTM5cDYxMzd0/eGdqdz0',
    isViewed: true,
    description:
      'This infographic teaches the correct procedure during an earthquake to minimize injuries and stay safe.',
    keyPoints: [
      'Move away from furniture and appliances that may fall.',
      'Protect your head with a cushion or bag..',
      'Keep calm and don’t run during shaking.',
      'Follow instructions from local authorities.',
      'Stay in a safe room if possible.',
    ],
    infographicsImages: [
    'https://imgs.search.brave.com/n-FxoG0nipXoC77j-4XVLJwblpGBpXEGzUQw780f2E4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/MzYzMTAwMy9waG90/by9wYXNzZW5nZXJz/LXJhbi1vdXQtb2Yt/dGhlLWludGVybmF0/aW9uYWwtdGVybWlu/YWwtYWlycG9ydC1i/dWlsZGluZy1kdXJp/bmctdGhlLWVhcnRo/cXVha2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU9Lb0t5/QXFxVGlnOEhrekhn/d2kxMTJvM3VUczQ1/VU4yZ0JTcktsWEJQ/OHc9',
    'https://imgs.search.brave.com/7BOngF6vYC4RMSjRgS5m7KjqiF15zy8ruPZBMTNIEpo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MTQ3MjY3My9waG90/by93dXhpLWNoaW5h/LW9jdG9iZXItMTMt/MjAyMy1wcmltYXJ5/LXNjaG9vbC1zdHVk/ZW50cy10YWtlLXBh/cnQtaW4tYW4tZWFy/dGhxdWFrZS1zaW11/bGF0aW9uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1UN0hy/Wk9SdVpSQXZPcFJz/VzM3aDM5SzFKZFlY/d2pQbXFRZHhkMHlB/WFNnPQ',
    'https://imgs.search.brave.com/zRpq6qtzOYhMNdTlVXP_whSIKWUsXUHLVwGBf0QCB0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/Nzk1MTE3Ny9waG90/by9tYW5oYXR0YW4t/YmVhY2gtY2EtdGhp/cmQtZ3JhZGUtc3R1/ZGVudHMtaW4tbXJz/LWpvcmRhbi11MjAx/OXMtY2xhc3MtdW5k/ZXItdGhlaXItZGVz/a3MtYXMtdGhleS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OG5OdkxUdUJHQ240/UHlKU3NQOTZ2Vm5L/amk3cVpENGtVWHBx/SGdpQ3BBbz0',
   
    ],
  },

{
    id: '4',
    topic: 'earthquake',
    title: 'If You’re Outdoors',
    subtitle: 'Cover the topic properly',
    image:
      'https://imgs.search.brave.com/BZAVmL_DUex2yeMrT7GX5eVQLogw8wSRTftPcT6weIg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2t3/TnBTSGFXWVJ3bVdl/NlRVVWdmRFQuanBn',
    isViewed: true,
    description:
      'This infographic teaches the correct procedure during an earthquake to minimize injuries and stay safe.',
    keyPoints: [
      'Stay in an open area away from buildings.',
      'Avoid power lines and streetlights.',
      'Keep a safe distance from walls or fences.',
      'Protect your head and neck with your arms.',
      'Wait for the shaking to completely stop.',
    ],
    infographicsImages: [
    'https://imgs.search.brave.com/efePxXgRXrbgWbT9WjQjFH-UbMo0FKr_01brBpR7Ncg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jYXNz/ZXR0ZS5zcGhkaWdp/dGFsLmNvbS5zZy9p/bWFnZS9zdHJhaXRz/dGltZXMvMjQ4ZjYz/NjRmYmI2ZTNiZTcx/OGU0MzE0NzRjOWNk/MTA1Y2I2YzliZjA5/YTNlNDQ3ZTFmY2E0/Mjk1NWRlNDFlYw',
    'https://imgs.search.brave.com/famvXWytEkDlY2tdscUIuikw19Ddej1Lpm7LIGzFyBQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jYS10/aW1lcy5icmlnaHRz/cG90Y2RuLmNvbS9k/aW1zNC9kZWZhdWx0/L2Y1NDcxNjkvMjE0/NzQ4MzY0Ny9zdHJp/cC90cnVlL2Nyb3Av/NjAwMHg0MDAwKzAr/MC9yZXNpemUvODQw/eDU2MCEvcXVhbGl0/eS83NS8_dXJsPWh0/dHBzOi8vY2FsaWZv/cm5pYS10aW1lcy1i/cmlnaHRzcG90LnMz/LmFtYXpvbmF3cy5j/b20vNjgvMGUvODQ4/N2M2ZjM0ZDhjYjZj/NDZjMmZiYjllNjll/OS9hcDI1MjQ0NDU1/NzEwMjIwLmpwZw',
    'https://imgs.search.brave.com/MgGYrACsSQzqqkTO9kLtNEhzccGGsjYVqUDmGU6B-ns/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kaW1z/LmFwbmV3cy5jb20v/ZGltczQvZGVmYXVs/dC9jODM4NWQ0LzIx/NDc0ODM2NDcvc3Ry/aXAvdHJ1ZS9jcm9w/LzMzNzh4MjI1MCsw/KzEvcmVzaXplLzU5/OXgzOTkhL3F1YWxp/dHkvOTAvP3VybD1o/dHRwczovL2Fzc2V0/cy5hcG5ld3MuY29t/LzRiLzc0LzM5ZTBm/ZmJkZDQxNWNiYjZi/Y2EzNWUyODI1YmUv/MmJjYzU1NjUyOTdi/NDNlZTg4ZDAxOGJj/MzcyZjczYmU',
   
    ],
  },

  {
    id: '5',
    topic: 'earthquake',
    title: 'After the Earthquake',
    subtitle: 'Cover the topic properly',
    image:
      'https://imgs.search.brave.com/8DbFviGMS_fiwRbBxd49_E7DWwkhStm6MKScB8cPZrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLm5h/dGdlb2ZlLmNvbS9u/LzEyN2NiZjhiLTNl/NDQtNDY1OC05MTYy/LWIwYjEyNWM0MDE3/Mi8yMTY5NS5qcGc',
    isViewed: false,
    description:
      'This infographic teaches the correct procedure during an earthquake to minimize injuries and stay safe.',
    keyPoints: [
      'Turn off gas, electricity, and water if safe.',
      'Avoid elevators; use stairs if you need to evacuate.',
      'Check for injuries and provide first aid if possible.',
      'Listen to emergency alerts on radio or phone.',
      'Prepare for aftershocks.',
    ],
    infographicsImages: [
   'https://www.shutterstock.com/image-photo/adana-turkey-february-6th-2023-earthquake-2259123939',
   'https://www.shutterstock.com/image-photo/disaster-supply-kit-earthquake-on-white-2135418785',
   'https://www.shutterstock.com/image-photo/search-rescue-forces-through-destroyed-building-607347791',
    ],
  },

  {
    id: '6',
    topic: 'earthquake',
    title: 'Preparedness & Prevention',
    subtitle: 'Cover the topic properly',
    image:
      'https://imgs.search.brave.com/obOi--x5wBpeI8j_eXH9vekBkqNuwDHVEzZKqsmjsTI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Zm5oYS5jYS9BYm91/dFNpdGUvTmV3c0Fu/ZEV2ZW50c1NpdGUv/TmV3c1NpdGUvUHVi/bGlzaGluZ0ltYWdl/cy9hYm91dC9uZXdz/LWFuZC1ldmVudHMv/bmV3cy9lbWVyZ2Vu/Y3ktcHJlcGFyZWRu/ZXNzLXN0YXlpbmct/c2FmZS1iZWZvcmUt/ZHVyaW5nLWFuZC1h/ZnRlci1hbi1lYXJ0/aHF1YWtlL0JlLVBy/ZXBhcmVkLmpwZw',
    isViewed: true,
    description:
      'This infographic teaches the correct procedure during an earthquake to minimize injuries and stay safe.',
    keyPoints: [
      'Keep an emergency kit ready (water, food, flashlight).',
      'Make a family emergency plan beforehand.',
      'Secure heavy furniture and appliances to walls.',
      'Practice “Drop, Cover, Hold On” regularly.',
      'Prepare for aftershocks.',
    ],
    infographicsImages: [
  'https://www.shutterstock.com/image-vector/people-preparing-earthquake-japanese-kanji-characterjishinearthquakebousaidisaster-2414757647',
  'https://imgs.search.brave.com/GDcwdUxZRQQD2HO6msDbm4uogMBRiQGq2rY_Gk6AZaw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/NTI5NzMxNi9waG90/by9wZW9wbGUtZ2F0/aGVyLW91dHNpZGUt/YW5kLXJlY2VpdmUt/bWVkaWNhbC1hdHRl/bnRpb24tYWZ0ZXIt/YS03LTctbWFnbml0/dWRlLXF1YWtlLXRo/YXQtc3RydWNrLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1C/RkRETlFubXBiUWc2/dWxwNFRkWEp5NTJs/M1VaODZDMEVIRFVL/YzRkeFJVPQ',
  'https://imgs.search.brave.com/3GL4eCaupzLSVFcoK106avt5G2jXRXdlwBUPin_Q7oU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9kaXNhc3Rl/ci1wcmVwYXJlZG5l/c3MtY2hlY2tsaXN0/LW9uLWNsaXBib2Fy/ZC0yNjBudy0xNDI3/NTY0OTQyLmpwZw'

    ],
  },

  {
    id: '2',
    topic: 'fire',
    title: 'Evacuation Steps',
    subtitle: 'Stay safe outside',
    image: 'https://imgs.search.brave.com/xeXDNZhYo8BU02ICsVgYYJzzBlRSUdCNsqefCPmHCEQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/MjQzNTQwNC9waG90/by9lbWVyZ2VuY3kt/ZXhpdC1zaWduLWlu/LWZpcmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUNReTF6/a1VLQl9SZHdPVmJy/S3FkN3ZXZkliUU1J/cnNBdUJOemY4OENV/aDA9',
    isViewed: false,
    description:
      'Guidelines for safely evacuating a building or area during emergencies like fire or natural disasters.',
    keyPoints: [
      'Know your nearest exits.',
      'Follow evacuation signs.',
      'Do not use elevators.',
      'Assist children, elderly, and disabled.',
      'Assemble at the designated safe zone.',
    ],
    infographicsImages: [
      'https://imgs.search.brave.com/OmaU3RDTezssKb9bGgAn4exIS0UfmFa6oFPMouhJStk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hZHZh/bmNlZGN0LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/OC9zaHV0dGVyc3Rv/Y2tfMTQ2NDQ1OTk4/LmpwZw',
      'https://imgs.search.brave.com/sPSF4hqbyoX9RBgMHcwub6oBt3v4PdJOv9WN7b1fKwo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbGVy/dGZvcmNlLmNvbS5h/dS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMS9maXJlLXdh/cmRlbi1hdC13b3Jr/LmpwZw',
      'https://imgs.search.brave.com/-b-77heUtZrpD6HGYRtn5-17Teyqy5NODFjW1nERCsU/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/c2V0b24uY28udWsv/bWVkaWEvd3lzaXd5/Zy9TVFVLL0NNUy9m/aXJlLWV2YWN1YXRp/b24tcGxhbi9maXJl/LmpwZw',
      
    ],
  },

  {
    id: '7',
    topic: 'fire',
    title: 'Immediate Response to Fire',
    subtitle: 'Stay safe outside',
    image: 'https://imgs.search.brave.com/9bIT36qzf3Nk1cqaGkMMRdQSV1qREVDav8oorqsnINc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZm1nc3VpdGUu/Y29tL21lZGlhL0Nv/bnRlbnRGTUcvdmFy/aWFudFNpemUvNWU3/MTU3OWUtNmFlMi00/OTc2LWE5ODUtNDJm/ODZjOTNlMDBlLnBu/Zz92PTE',
    isViewed: false,
    description:
      'Guidelines for safely evacuating a building or area during emergencies like fire or natural disasters.',
    keyPoints: [
      'Alert everyone in the building.',
      'Activate the nearest fire alarm.',
      'Crawl low under smoke to avoid inhalation.',
      'Cover your mouth and nose with a cloth.',
      'Leave the area quickly using the safest exit.',
    ],
    infographicsImages: [
      'https://imgs.search.brave.com/QUhj27K0FEWXO2cZjkdVMcsd0DZMWB3m-jBRc6rCYxA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQx/MTc2MDgzOS9waG90/by9hY3RpdmF0ZS1m/aXJlLWFsYXJtLXN5/c3RlbS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9NW9oa3Va/dWpyTFlfOGpKbV9i/cHdFaUlLanNTdURj/T3VSd1VMMUJvc3cz/Yz0',
      'https://imgs.search.brave.com/OSNBYYlS1vcYtJHMcMPxrzj3e0VBYE4JTB5tVCAMU_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/NzY5NDM0NS9waG90/by9maXJlZmlnaHRl/cnMtZXh0aW5ndWlz/aGluZy1ob3VzZS1m/aXJlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1PUlFyNEcx/OHFYRGxDNFc1WUsx/bTBxUEFhVGhVMlBD/SlV2RXR4WjFCcnRN/PQ',
      'https://imgs.search.brave.com/BKgcjFm3DaFsinllIsK3I4rrkvbGsdzAxiS8hG0yUXo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lcmd0/LmVkdS5hdS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wNy9D/U1AxMTA3MTlfMDAz/OS0zNzh4MjIwLmpw/Zw',
    ],
  },

  {
    id: '8',
    topic: 'fire',
    title: 'If Trapped in Fire',
    subtitle: 'Stay safe outside',
    image: 'https://imgs.search.brave.com/3OohWIpwBO2C8v2D6QJevWcdcdJU0V7lR64C2MnUigw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWlyYXNhZmV0eS5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvY2Fs/ZWItY29vay1zeXVv/eDhmaXBYNC11bnNw/bGFzaF81MjB4NTAw/XzRlNWI4ODdhLWU1/ZmEtNDFkOS05ODE3/LTRkYjJhZmUzMTU0/Yi5qcGc_Zm9ybWF0/PXBqcGcmdj0xNzM2/MzY0MTQ5JndpZHRo/PTIwMDA',
    isViewed: false,
    description:
      'Guidelines for safely evacuating a building or area during emergencies like fire or natural disasters.',
    keyPoints: [
      'Seal gaps under doors with wet cloths.',
      'Signal for help from a window or balcony.',
      'Stay low to the ground where air is cleaner.',
      'Avoid breaking windows unless necessary.',
      'Keep calm and conserve energy while waiting for rescue.',
    ],
    infographicsImages: [
      'https://imgs.search.brave.com/Xfpad8vvizuqzDPwTTCZSF3CR2QQx2L21g8L3AMmIIQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NjUyNzE1Ni9waG90/by9yaW90LWluLXRo/ZS1jaXR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1ySzlO/N2pDMGtnWGRWbEJm/YmNNSHRjWEFXOUFF/LWVXMkpLcGRHRmtK/aXpjPQ',
      'https://imgs.search.brave.com/fMoQjw8h1YK9QEA-Ielvwhm15W5XKhPamHwYYaxz75I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L25ld3MvNDgwL2Nw/c3Byb2RwYi83QzJB/L3Byb2R1Y3Rpb24v/XzExNDI2ODcxM19n/ZXR0eWltYWdlcy0x/MjI4Mzc2MzU1Lmpw/Zy53ZWJw',
      'https://imgs.search.brave.com/jct2ElrTz2joxabJt74b7Dhlg8NTh7eiPdYsG5MHt-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YnV6emZlZWQuY29t/L2J1enpmZWVkLXN0/YXRpYy9zdGF0aWMv/MjAyNS0wMS84LzE0/L2Fzc2V0LzE1Yjk2/N2EyMzI5My9zdWIt/YnV6ei0yMTk4LTE3/MzYzNDY3MjUtMi5q/cGc',
    ],
  },

  {
    id: '9',
    topic: 'fire',
    title: 'Using Fire Safety Equipment',
    subtitle: 'Stay safe outside',
    image: 'https://imgs.search.brave.com/05NvjhDWL-5awlFSEXHPwd9nI1u_0YPHbbjxlUlLHNg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzM4LzAyLzk5/LzM2MF9GXzEyMzgw/Mjk5NjNfZ2Q2S1dU/bnRYR0tKYUl6cERl/ZmxOQjVrcUY0aEpP/YjQuanBn',
    isViewed: false,
    description:
      'Guidelines for safely evacuating a building or area during emergencies like fire or natural disasters.',
    keyPoints: [
      'Use a fire extinguisher only if the fire is small.',
      'Remember the PASS technique: Pull, Aim, Squeeze, Sweep.',
      'Know the location of fire hoses and sprinklers.',
      'Keep fire blankets accessible in kitchens and labs.',
      'Practice fire drills regularly.',
    ],
    infographicsImages: [
     'https://imgs.search.brave.com/Euyv4aR6jIKl_mt8mnwB40KhqF-zQx5Wb3xn0_Y_XtM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc4/MzA3NjM5Ny9waG90/by9maXJlZmlnaHRl/cnMtZmlnaHRpbmct/Y2FyLWZpcmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTI1/NzdOejM5dW5mT1l1/OEhwbUNlcy1RUHNt/WGZjMGxOZktOMTB1/QklycnM9',
     'https://imgs.search.brave.com/Lkwp4U31n6k33b0cQnaFeycw8dwNx3ABc4nK5By7nNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDg3MjM3MjQ2MTUt/ZDA0YWVjM2QxZmE3/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1qQjhmR1pw/Y21VbE1qQnpZV1ps/ZEhsOFpXNThNSHg4/TUh4OGZEQT0',
     'https://imgs.search.brave.com/yW9KH3VHKgQwIHLXSW9Qsg9XRjisC3dilV-uTl4lpiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDY5/OTQ5MjgwL3ZpZGVv/L2ZpcmUtZmlnaHRl/ci1kdXJpbmctaW50/ZW5zZS1maXJlLWV4/dGluZ3Vpc2htZW50/LmpwZz9zPTY0MHg2/NDAmaz0yMCZjPXpQ/SU9vUEY4MW9GRlA0/MXREbVBBTnlDQUh4/TmhHRXlEcnZvMDRj/WVFvN0E9',
    ],
  },

  {
    id: '10',
    topic: 'fire',
    title: 'After the Fire',
    subtitle: 'Stay safe outside',
    image: 'https://imgs.search.brave.com/mYOnXrI5UfIbnQZux_rpML15V6Dl21ItsnABCkfF1Ew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmV1dGVycy5jb20v/cmVzaXplci92Mi9R/NERYNjZSQjVKTjRM/SFBYMk1KVjZOUVZI/SS5qcGc_YXV0aD02/YWI4ZjdiM2I5MjM0/YWRiNWJlZjg4YzRl/MzZkZmQyOTI4MWZk/MDIyYmQxZGVjMWM4/M2IwMjNjYTcwYmE5/NWQxJndpZHRoPTE5/MjAmcXVhbGl0eT04/MA',
    isViewed: false,
    description:
      'Guidelines for safely evacuating a building or area during emergencies like fire or natural disasters.',
    keyPoints: [
      'Do not re-enter until authorities declare it safe.',
      'Check for injuries and get medical help immediately.',
      'Report the incident to fire services.',
      'Avoid touching burned structures or debris.',
      'Review safety measures and improve preparedness.',
    ],
    infographicsImages: [
     'https://imgs.search.brave.com/GfpkWsMbyhY6Tesbona2g0pRZ6Onv-XLFbY5LzYPeXM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9hZnRlci1m/b3Jlc3QtZmlyZS1i/dXJudC1iaXJjaGVz/LTI2MG53LTIwMjk2/MzIxMTkuanBn',
     'https://imgs.search.brave.com/JPSBUR2pfkFcUD_g_pZWlIEhYGykZ91GvnC4b_n3ewc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmV1dGVycy5jb20v/cmVzaXplci92Mi9W/RU5CTk5MVkNWSTdS/QTM0NUpXWko3SFZY/WS5qcGc_YXV0aD05/NWU4NDEwYWRhY2Iy/ZTk5YzBjNzkzMmI2/NjUxNDc5ZDI2MGY2/MDFkOGVhM2Q0NDdj/MmRmZjNmZmEwZWNh/ZDU2JndpZHRoPTEw/ODAmcXVhbGl0eT04/MA',
     'https://imgs.search.brave.com/7xz5xNd4Udvjh7xUIfBHd9BauOoVvWShcVrbu7R7LQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9pbWFnZXMt/cHJvZmlsZS1mbG93/LzQwMC9pbWFnZXMv/YXJ0d29ya2ltYWdl/cy9tZWRpdW1sYXJn/ZS8yLzEtYnVybnQt/Zm9yZXN0LWFmdGVy/LTIwMTkyMC1idXNo/ZmlyZXMtZGV2YXN0/YXRlZC10aGUtYXJl/YS1kb3VnLWdpbWVz/eS1uYXR1cmVwbGNv/bS5qcGc',

    ],
  },
  
];

const initialQuizzes = [
  {
    id: '1',
    topic: 'earthquake',
    title: 'Earthquake Safety Quiz',
    questions: '20 questions',
    points: '500 points',
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg',
    isViewed: true,
  },
  {
    id: '2',
    topic: 'fire',
    title: 'Emergency Kit Quiz',
    questions: '15 questions',
    points: '400 points',
    image:
      'https://cdn.pixabay.com/photo/2017/01/31/13/14/cartoon-2026571_960_720.png',
    isViewed: true,
  },
];

export const useLearningStore = create((set, get) => ({
  videos: initialVideos,
  infographics: initialInfographics,
  quizzes: initialQuizzes,

  markVideoViewed: (videoId) => {
    set((state) => ({
      videos: state.videos.map((v) =>
        v.id === videoId ? { ...v, isViewed: true } : v
      ),
    }));
  },

  markInfographicViewed: (id) => {
    set((state) => ({
      infographics: state.infographics.map((i) =>
        i.id === id ? { ...i, isViewed: true } : i
      ),
    }));
  },

  updateVideo: (videoId, data) => {
    set((state) => ({
      videos: state.videos.map((v) =>
        v.id === videoId ? { ...v, ...data } : v
      ),
    }));
  },

  updateInfographic: (id, data) => {
    set((state) => ({
      infographics: state.infographics.map((i) =>
        i.id === id ? { ...i, ...data } : i
      ),
    }));
  },

  updateQuiz: (id, data) => {
    set((state) => ({
      quizzes: state.quizzes.map((q) => (q.id === id ? { ...q, ...data } : q)),
    }));
  },

  addVideo: (video) => set((state) => ({ videos: [...state.videos, video] })),
  addInfographic: (info) =>
    set((state) => ({ infographics: [...state.infographics, info] })),
  addQuiz: (quiz) => set((state) => ({ quizzes: [...state.quizzes, quiz] })),
}));
