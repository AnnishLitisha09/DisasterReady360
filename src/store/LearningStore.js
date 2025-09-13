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
  isViewed: true,
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
  isViewed: true,
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
  isViewed: true,
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
  isViewed: true,
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
  isViewed: true,
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

{
  id: '1',
  topic: 'flood',
  topicimg: 'https://example.com/flood-indoors.jpg',
  title: 'Staying Safe Indoors During a Flood',
  subtitle: 'Shelter Smartly, Stay Calm',
  description:
    'Learn how to remain safe if flooding starts while you are inside your home or building.',
  keyPoints: [
    'Move to higher floors or rooftops if water rises.',
    'Turn off electricity and gas to prevent hazards.',
    'Keep emergency supplies nearby (food, water, first-aid).',
    'Avoid contact with floodwater to prevent disease.',
    'Listen to radio or emergency alerts for updates.'
  ],
  duration: '2:51 min',
  videoId: 'aCSSGYqJqBs',
  image:'https://imgs.search.brave.com/lnlpwYrWhkFHQC7qwSvDWA0o-mn9GE6eSr1lzlkrUlw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2RjLmdvdi9mbG9v/ZHMvbWVkaWEvaW1h/Z2VzL3JlZW50ZXJp/bmd5b3VyZmxvb2Rl/ZGhvbWUuanBn',
  isViewed: true
},
{
  id: '2',
  topic: 'flood',
  topicimg: 'https://example.com/flood-evacuation.jpg',
  title: 'Evacuating Safely During Floods',
  subtitle: 'Leave Early, Stay Safe',
  description:
    'Understand the proper steps to follow when evacuation becomes necessary during flooding.',
  keyPoints: [
    'Follow evacuation orders immediately from authorities.',
    'Carry only essential items and important documents.',
    'Do not walk or drive through moving floodwaters.',
    'Help children, elderly, and disabled individuals first.',
    'Head towards designated safe shelters on higher ground.'
  ],
  duration: '4:07 min',
  videoId: '43M5mZuzHF8',
  image: 'https://imgs.search.brave.com/Onzp0f5rFfAxiucydZLykIsCkZiU0ygFsjgDrIacKYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MTY0Mzc0MC9waG90/by9mbG9vZHMtaGl0/LWhvbWVzLWFuZC1o/aWdod2F5cy1iZWNh/dXNlLWhpZ2gtcmFp/bmZhbGwtYW5kLWhp/Z2gtdGlkZS1vZi1z/ZWEtd2F0ZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWRh/bVF3cklkNE5ha3pZ/TmdpbHB3UnhEUWxL/QmFCRVJUeGlnUTEz/Z2NYSnc9',
  isViewed: true
},
{
  id: '3',
  topic: 'flood',
  topicimg: 'https://example.com/flood-outdoors.jpg',
  title: 'What To Do If Caught Outdoors',
  subtitle: 'Survive in Open Flood Conditions',
  description:
    'Learn survival techniques when a flood occurs and you are outside or traveling.',
  keyPoints: [
    'Move to higher ground immediately.',
    'Avoid low-lying areas, rivers, and drains.',
    'Stay away from power lines and electrical equipment.',
    'Use sturdy objects or ropes for support if crossing shallow water is unavoidable.',
    'Never attempt to swim in strong flood currents.'
  ],
  duration: '7:43 min',
  videoId: 'odUtUlluFmA',
  image: 'https://imgs.search.brave.com/Zl68oMRAps7mBEzpAPs1JBn_cbdQZVWdarWP1XcR5w8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY0/ODQ5NDMyNC9waG90/by90YXJwb24tc3By/aW5ncy1mbG9yaWRh/LW1ha2F0bGEtcml0/Y2h0ZXItYW5kLWhl/ci1tb3RoZXIta2Vp/cGhyYS1saW5lLXdh/ZGUtdGhyb3VnaC1m/bG9vZC13YXRlcnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWdyT3YwbXV5bnhn/RkNvdHJkbk16TE4y/SmtmcmtLQ0hfX2R0/VE12YWxuMWs9',
  isViewed: true
},
{
  id: '4',
  topic: 'flood',
  topicimg: 'https://example.com/flood-children.jpg',
  title: 'Flood Safety for Families & Children',
  subtitle: 'Protecting the Vulnerable',
  description:
    'Essential flood safety rules designed for children, parents, and families.',
  keyPoints: [
    'Teach children not to play near floodwaters.',
    'Hold hands with young children during evacuation.',
    'Prepare child-friendly emergency kits with snacks and comfort items.',
    'Ensure kids know emergency contact numbers.',
    'Schools should have clear flood evacuation drills.'
  ],
  duration: '4:30 min',
  videoId: 'j4yuzWuMLGQ',
  image: 'https://imgs.search.brave.com/ZV7NNrTBaaQsQkhx07XAXwvzrWlV7qz39J0-VqxVbh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/MTM2MjUzL3Bob3Rv/L21pZHdlc3QtZmxv/b2QtdmljdGltcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UWU0cGdlQm5xVGU3/R1FnaUFaLVc1b19k/d29NZWRtMG1ZekN2/dzFBLUJIYz0',
  isViewed: true
},
{
  id: '5',
  topic: 'flood',
  topicimg: 'https://example.com/flood-after.jpg',
  title: 'After the Flood: Staying Healthy & Safe',
  subtitle: 'Recovery Without Risks',
  description:
    'Important safety measures to follow after the floodwater recedes.',
  keyPoints: [
    'Avoid returning home until authorities declare it safe.',
    'Boil or purify drinking water to prevent illness.',
    'Wear gloves and boots when cleaning mud and debris.',
    'Discard food that came in contact with floodwater.',
    'Watch for snakes, insects, and hidden hazards in debris.'
  ],
  duration: '4:50 min',
  videoId: 'ypcvGU38OY8',
  image: 'https://imgs.search.brave.com/-yAQbu1c8CEt1JNPoSNNh080nfR79FQR3qdKemC6Pj4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/MzA1MjA2Ny92ZWN0/b3IvdHN1bmFtaS1j/b25zZXF1ZW5jZXMt/cmVzY3VlLW1hbGUt/ZmVtYWxlLWNoYXJh/Y3Rlci1ldmFjdWF0/aW9uLXNhdmUtaW5m/bGF0YWJsZS1ib2F0/LXBlb3BsZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UTRu/ZE4yQmNxYUs1dGhr/R1RGZGJ1eExZZ1pC/SS10WFRZZjFCeC1Y/eFVtcz0',
  isViewed: true
},
{
  id: '6',
  topic: 'flood',
  topicimg: 'https://example.com/flood-community.jpg',
  title: 'Community Support in Flood Disasters',
  subtitle: 'Together We Are Stronger',
  description:
    'How communities can unite to recover and support one another during and after floods.',
  keyPoints: [
    'Set up local relief centers for food and shelter.',
    'Coordinate with authorities for rescue operations.',
    'Distribute clean water and essential medicines.',
    'Provide psychological support for flood victims.',
    'Encourage rebuilding with future flood prevention in mind.'
  ],
  duration: '7:49 min',
  videoId: '9IphLkjUZaQ',
  image: 'https://imgs.search.brave.com/n4BS9tWYWhzaeZjwfrdIzMYuos3rjlDUYhAq3QegSpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9yZWxp/ZWYtYmFncy1mbG9v/ZC1zdWZmZXJlcnMt/MjIwOTIxOTYuanBn',
  isViewed: true
},



{
  id: '1',
  topic: 'cyclone',
  topicimg: 'https://example.com/cyclone-before.jpg',
  title: 'Before the Cyclone: Be Prepared',
  subtitle: 'Readiness Saves Lives',
  description:
    'Essential steps to take before a cyclone hits to reduce risks and ensure safety.',
  keyPoints: [
    'Secure windows, doors, and loose outdoor items.',
    'Keep an emergency kit ready with food, water, and medicines.',
    'Charge your phone and keep power banks ready.',
    'Know your nearest cyclone shelters or safe locations.',
    'Stay updated with official cyclone alerts and warnings.'
  ],
  duration: '1:55 min',
  videoId: 'BFtVbuiNgYQ',
  image: 'https://imgs.search.brave.com/Es9Hmx2GDRYl4UK_MQeNzlZ3NnJ4b8jU24JlgAQZQrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uc3Mt/bWFpbi5zMy5hcC1z/b3V0aC0xLmFtYXpv/bmF3cy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTIv/MDcxODA2MDMvQmxv/Z0N5Y2xvbmUtMS5q/cGc',
  isViewed: false,
},

{
  id: '2',
  topic: 'cyclone',
  topicimg: 'https://example.com/cyclone-during.jpg',
  title: 'During the Cyclone: Stay Protected',
  subtitle: 'Survival in the Storm',
  description:
    'Safety instructions to follow when a cyclone is in progress.',
  keyPoints: [
    'Stay indoors and away from windows.',
    'Turn off gas, electricity, and water if instructed.',
    'Listen to radio/official announcements for updates.',
    'Use flashlights instead of candles to avoid fire hazards.',
    'Do not step outside until authorities declare it safe.'
  ],
  duration: '2.35',
  videoId: 'sGDeorOg3bQ',
  image: 'https://imgs.search.brave.com/8TrbKOj5N8Q5Ocf7c7glBe2Ebu-NUj4kV9T1oZxU-W8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU3/NTc5MDQvcGhvdG8v/dGVycmEtc2F0ZWxs/aXRlLWltYWdlLW9m/LXRyb3BpY2FsLWN5/Y2xvbmUtaW5ncmlk/LWluLWNvcmFsLXNl/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QUd1VnpwR0xv/Um85SGRndXhnQ0l4/LXdHdWh0c2liTlFl/LTc5b2djbF9GQT0',
  isViewed: false,
},

{
  id: '3',
  topic: 'cyclone',
  topicimg: 'https://example.com/cyclone-after.jpg',
  title: 'After the Cyclone: Staying Safe',
  subtitle: 'Recovery and Caution',
  description:
    'Tips to follow after a cyclone passes to ensure health and safety.',
  keyPoints: [
    'Avoid fallen power lines and damaged structures.',
    'Do not consume contaminated food or water.',
    'Wear protective gear while cleaning debris.',
    'Beware of weakened buildings and flooded areas.',
    'Assist neighbors and vulnerable individuals if safe.'
  ],
  duration: '4:38 min',
  videoId: 'TqZ3M7xh8jM',
  image: 'https://imgs.search.brave.com/qNdYxw5zAJGM4K_LA3cgIX0l16HjakikJg2Cs05SDwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLm5h/dGdlb2ZlLmNvbS9r/LzFkZTVjZWE3LWQy/OTktNDY4NC05YWIw/LWIxNGM4NDYwMDEz/Ni9QYWxtLVRyZWVz/X0h1cnJpY2FuZS1V/cGRhdGVfS0lEU18w/ODIyLmpwZz93PTM3/NCZoPTI0OQ',
  isViewed: false,
},

{
  id: '4',
  topic: 'cyclone',
  topicimg: 'https://example.com/cyclone-kit.jpg',
  title: 'Cyclone Emergency Kit Essentials',
  subtitle: 'Be Ready Anytime',
  description:
    'What to pack in your cyclone survival kit for emergencies.',
  keyPoints: [
    'Pack bottled water, dry food, and first aid supplies.',
    'Keep flashlights, batteries, and power banks ready.',
    'Carry important documents in waterproof pouches.',
    'Include extra clothes, blankets, and hygiene items.',
    'Add whistles, ropes, and multipurpose tools.'
  ],
  duration: '3:20 min',
  videoId: 'p7j9X1OGb7o',
  image: 'https://imgs.search.brave.com/7VVqol878QXAdOFwsWacH1NlXLL_IwDpbuCV7g2qePM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NzcyNjgwMS92ZWN0/b3IvZXNzZW50aWFs/LWVtZXJnZW5jeS1r/aXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWZKWU50Ql9E/cUdzVUZXb3JaSzNa/eVh3WDVvTzdkQmpL/MUJNV2tGaHdNc289',
  isViewed: false,
},

{
  id: '5',
  topic: 'cyclone',
  topicimg: 'https://example.com/cyclone-community.jpg',
  title: 'Community Response During Cyclones',
  subtitle: 'Stronger Together',
  description:
    'Guidelines for helping others and working as a community during cyclones.',
  keyPoints: [
    'Help evacuate children, elderly, and disabled people.',
    'Share emergency supplies with neighbors in need.',
    'Support local rescue teams and follow their directions.',
    'Stay calm and avoid spreading rumors.',
    'Report hazards like gas leaks or broken wires immediately.'
  ],
  duration: '19:59 min',
  videoId: '0hMqXQNDAn4',
  image: 'https://imgs.search.brave.com/62m1z72rqyaCa375a4fxGWtK2fuBkNxIoX3YRlo1WLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVkY3Jvc3Mub3Jn/L2NvbnRlbnQvZGFt/L3JlZGNyb3NzL2Fi/b3V0LXVzL2Rpc2Fz/dGVyLXJlbGllZi9k/aXNhc3Rlci1yZWxp/ZWYtZXJ2LTcxNHg0/MTAuanBnLnRyYW5z/Zm9ybS83NjgvcTcw/L2ZlYXR1cmUvaW1h/Z2UuanBlZw',
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
    isViewed: true,
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

  {
  id: '11',
  topic: 'flood',
  title: 'Immediate Flood Response',
  subtitle: 'Act Quickly, Stay Safe',
  image: 'https://imgs.search.brave.com/We0HRaauzQBVC2pxxdCTfEa4WmLR7q19jWz31gJrC9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UwLzJm/LzljL2UwMmY5Yzhj/MGRhZmI3MjI0N2Rl/YWM3OTE3Y2JlYzE0/LmpwZw',
  isViewed: false,
  description:
    'Guidelines to take immediate action when a flood begins in your area.',
  keyPoints: [
    'Move to higher ground immediately.',
    'Avoid walking or driving through floodwaters.',
    'Unplug electrical devices if safe to do so.',
    'Keep emergency supplies ready.',
    'Stay tuned to weather updates and alerts.',
  ],
  infographicsImages: [
  'https://imgs.search.brave.com/31K-eO4GumKNBbjxhJU7iunfMb9WO1CurIygaG5YQP8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWxlcnRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQmxvZy1G/bG9vZC1FbWVyZ2Vu/Y3ktUmVzcG9uc2Ut/UGxhbi0xMDI0eDUz/Ni5qcGc',
  'https://imgs.search.brave.com/gjxfcGVgb1D0jdokhR9OR9DpUpnwu7uIYAUuAZ8JBLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmFw/YmFnLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wNy9G/YXJnby1GbG9vZC0z/LmpwZw',
  'https://imgs.search.brave.com/f7UOe-wRJyctpe-DHT0duhPBuetprquJ7-4hexDdoDk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcw/NDEwODYzNC9waG90/by9pbi10aGlzLXBp/Y3R1cmUtdGFrZW4t/b24tb2N0b2Jlci0y/LXRoYWktbWlsaXRh/cnktcGVyc29ubmVs/cy1jYXJyeS1iZWxv/bmdpbmdzLW9mLWxv/Y2FsLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz03bWF6R2V0/dURUeG1CbTFLMjNn/UDZieENfWHQ2Rm1U/U0tpTFNacDRiaEtN/PQ',
  'https://imgs.search.brave.com/Zj027pu_F_HtCSjHlZn6EnJJbSLYAag553zxcqm78vo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMnY0/c2djMmswMmQ1dC5j/bG91ZGZyb250Lm5l/dC9oeWRyby1jbGVh/bnNpbmcuY29tL21l/ZGlhL3BhZ2VzL2Zs/b29kLXJlc3BvbnNl/L2J1bGstdGFua2Vy/LXJlbW92ZS1mbG9v/ZC1yZXNpZGVudGlh/bC1hcmVhLndlYnA',  
  ],
},
{
  id: '12',
  topic: 'flood',
  title: 'Evacuation Steps During Flood',
  subtitle: 'Move Smart, Stay Together',
  image: 'https://imgs.search.brave.com/gb0c6ooQm-MR5AlNT08ltIB8vzMTbpesrue15qGCvVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/NDIwOTM1Mi9waG90/by9jaGlsZHJlbi13/YWRlLXRocm91Z2gt/Zmxvb2R3YXRlci1u/ZWFyLXRoZS1zaG9y/ZS1vZi10aGUtcG9s/bHV0ZWQtbWFuaWxh/LWJheS1pbi10b25k/by1kaXN0cmljdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VDQ0d1hweVliNFF4/Z2hDVUROOXlPU01D/RDZyTHhmcDM0LV9E/bk5XRkRQQT0',
  isViewed: false,
  description:
    'Steps to safely evacuate when floodwaters rise and evacuation is necessary.',
  keyPoints: [
    'Follow official evacuation orders immediately.',
    'Do not wait until it’s too late to move.',
    'Assist children, elderly, and disabled during evacuation.',
    'Carry essential documents in waterproof bags.',
    'Gather at a designated safe shelter point.',
  ],
  infographicsImages: [
  'https://imgs.search.brave.com/yo9OlszRMIsqA-8GDRF937ZmyADYLIZ77st07hR1vHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LXByb2R1Y3Rpb24u/d2Ntcy5hYmMtY2Ru/Lm5ldC5hdS82M2I2/YWRhMWNlODk5YTYw/NjQ1NTU1YzQ2OWQz/ZDNiYz9pbXBvbGlj/eT13Y21zX2Nyb3Bf/cmVzaXplJmNyb3BI/PTIyNjgmY3JvcFc9/NDAzMiZ4UG9zPTAm/eVBvcz0zNzgmd2lk/dGg9ODYyJmhlaWdo/dD00ODU',
   'https://imgs.search.brave.com/gDbnkfSE2lhU7UvCkJMhSw-iykHRaQOyM2GiF0dTB50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2VhdGhlci5nb3Yv/aW1hZ2VzL3NhZmV0/eS9rcy1IYWxsb3dl/ZW5mbG9vZC5qcGc',
   'https://imgs.search.brave.com/8NTkQ4-sTM6xwjGOSys4ItFo1gwxckZp5ubnnMdiWYo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2V0cmVhZHkucWxk/Lmdvdi5hdS9zaXRl/cy9kZWZhdWx0L2Zp/bGVzL3N0eWxlcy90/aWxlc180XzNfL3B1/YmxpYy8yMDIzLTA5/L0Fjb29tbW9kYXRp/b24lMjBzdXBwb3J0/JTIwLSUyMFNFUyUy/MGZsb29kJTIwYm9h/dCUyME1hcnlib3Jv/dWdoLmpwZz9pdG9r/PWFqUUNQN3RC',
   'https://imgs.search.brave.com/pw1-ODf2-2FadB85i4asZYYnC-L7x5nG80pCwQyZsck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/MTk3MTgzNy9waG90/by9xaW5nY2hlbmct/Y2hpbmEtanVseS0x/Ni0yMDIyLXJlc2N1/ZXJzLWV2YWN1YXRl/LXZpbGxhZ2Vycy1v/bi1yb3Blcy1hY3Jv/c3MtYS1mbG9vZGVk/LXJpdmVyLWluLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz12/V1dIcWxVLUhTY2V1/UWJkQlkwX2ptWmh3/VV9TZzRYa1dKWEhT/b2NEY0Y4PQ', 
  ],
},
{
  id: '13',
  topic: 'flood',
  title: 'If You’re Trapped in Floodwaters',
  subtitle: 'Survival First',
  image: 'https://imgs.search.brave.com/i-EY9so0AIOqwEQDsuEs7kUCT8Hh_XFEKDLC5XkGKc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bnNzbC5ub2FhLmdv/di9lZHVjYXRpb24v/c3Zyd3gxMDEvZmxv/b2RzL2ltZy9mZW1h/LWZsYXNoZmxvb2Ry/ZXNjdWUtMjAwNy1h/YXJvbmxhdGhhbS02/NDU0NS5qcGc',
  isViewed: false,
  description:
    'Actions to take when trapped in floodwaters and unable to evacuate immediately.',
  keyPoints: [
    'Climb to the highest point in your building or area.',
    'Signal for help using bright cloths or lights.',
    'Avoid fast-moving water at all costs.',
    'Use sturdy objects to stay afloat if necessary.',
    'Stay calm and conserve your energy.',
  ],
  infographicsImages: [
  'https://imgs.search.brave.com/1KKBUQcQ3pjlno7IFe_9abDwiblrd_XGsnS__nk-RbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE0LzA5LzE0Lzkx/LzM2MF9GXzE0MDkx/NDkxODFfQ2JmVjNx/bTRDdEZFUmlmUjY5/U043d3V5TnpXcVRj/U1IuanBn',
  'https://imgs.search.brave.com/i-EY9so0AIOqwEQDsuEs7kUCT8Hh_XFEKDLC5XkGKc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bnNzbC5ub2FhLmdv/di9lZHVjYXRpb24v/c3Zyd3gxMDEvZmxv/b2RzL2ltZy9mZW1h/LWZsYXNoZmxvb2Ry/ZXNjdWUtMjAwNy1h/YXJvbmxhdGhhbS02/NDU0NS5qcGc',
  'https://imgs.search.brave.com/RlTgy9OJMxGyt8TMX6Fb8LgLwxZ1CjVALUcKB-c_Gek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbXMu/YWNjdXdlYXRoZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA3L0dldHR5/SW1hZ2VzLTU1MzIw/MjQyLmpwZz93PTYz/Mg',
  'https://imgs.search.brave.com/uuU0p-WaqDZkyEwCk957Q9VGrU1r1LtHD0SD5QLVyk4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbXMu/YWNjdXdlYXRoZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA3L0dldHR5/SW1hZ2VzLTg0MDYy/NTcwMi5qcGc_dz02/MzI',
    
  ],
},
{
  id: '14',
  topic: 'flood',
  title: 'Flood Safety Equipment',
  subtitle: 'Be Ready, Stay Equipped',
  image: 'https://imgs.search.brave.com/lcwKrKa_-fiPkwF5h3fU7FziaQrKSHq0o4_ASTqm4Qk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ucHIu/YnJpZ2h0c3BvdGNk/bi5jb20vZGltczMv/ZGVmYXVsdC9zdHJp/cC9mYWxzZS9jcm9w/LzU1MDN4MzY2OSsw/KzAvcmVzaXplLzEx/MDAvcXVhbGl0eS81/MC9mb3JtYXQvanBl/Zy8_dXJsPWh0dHA6/Ly9ucHItYnJpZ2h0/c3BvdC5zMy5hbWF6/b25hd3MuY29tLzc3/LzU1LzhhMzg1N2I3/NGJlMmI5YjQ5Mjgy/YjgxZjgwMTIvYXAy/NTE4NTg1OTQ3NjY5/NC5qcGc',
  isViewed: false,
  description:
    'Important flood safety tools and supplies to keep ready before a flood.',
  keyPoints: [
    'Keep a waterproof emergency kit with food and water.',
    'Have a battery-powered radio for updates.',
    'Store important medicines in waterproof containers.',
    'Keep flashlights and extra batteries ready.',
    'Stock life jackets and inflatable rafts if in high-risk areas.',
  ],
  infographicsImages: [
  'https://imgs.search.brave.com/bhxhpbY-6vrtMKgItALAo7O8iSNs9FgzmO6WJDEt4xA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8zLmlt/aW1nLmNvbS9kYXRh/My9YQS9TQy9NWS05/MTE2MjE2L2Zsb29k/LWRpc2FzdGVyLXJl/c2N1ZS1lcXVpcG1l/bnRzLTEwMDB4MTAw/MC5wbmc',
  'https://imgs.search.brave.com/z0yHf7I4cVDnCRu5Mekzsvdna2Xhszk6hjQWm2V46-k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXNwbGkuY29tL191/cGxvYWRzL2ltZy9w/cm9kdWN0cy9tZWRp/dW0vZmxvb2RzdG9w/LTA5bS0wMDExMDAu/anBn',
  'https://imgs.search.brave.com/E97tKaXm44BrwbXA1T5KhcMh6UVMQXBnkru2dWE9kY0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDU4/NzA4NTQxL3Bob3Rv/L3JpdmVyLXJlc2N1/ZS1rYXlha2VyLXJl/c2N1ZWQtYW5kLWJy/b3VnaHQtYmFjay10/by1zaG9yZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cWNP/QmdodHFkVVlLcjFl/enp3Y2lmT1doYmtw/dXZYX0Y0djRBY3Ni/cVZjTT0',
  'https://imgs.search.brave.com/VNa8TKAug22MjLuqv0-6EvY_q2cftjbDWyrtDR8xz6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODQw/OTk4MzE0L3Bob3Rv/L2Zsb29kLXByb3Rl/Y3Rpb24tc2FuZGJh/Z3Mtd2l0aC1mbG9v/ZGVkLWhvbWVzLWlu/LXRoZS1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1fU0NZd3Ns/Q2RiTXp2YmYtS3VC/cHVsOW9sNFJqMUUz/M1pvSVhWZjZCeXVr/PQ',  
  
  ],
},
{
  id: '15',
  topic: 'flood',
  title: 'After the Flood',
  subtitle: 'Recovery & Caution',
  image: 'https://imgs.search.brave.com/0rHvKwa-EOsF89TsTqtU-xoLKb5y5ey4JrkqQGhPn20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzc3LzcyLzA2/LzM2MF9GXzY3Nzcy/MDY1NF9tMXBXSTlR/bnJuYzREdWRQdE4w/UzdLUXBQVGtJMXZL/ai5qcGc',
  isViewed: false,
  description:
    'Crucial steps to take after a flood to ensure safety and start recovery.',
  keyPoints: [
    'Avoid entering buildings until declared safe.',
    'Do not touch electrical equipment in wet areas.',
    'Clean and disinfect everything touched by floodwater.',
    'Be cautious of weakened roads and bridges.',
    'Report damages and seek assistance from authorities.',
  ],
  infographicsImages: [
  'https://imgs.search.brave.com/Fx2UM2Ej8b-otvN7JP4QaGnXsDF0OIDugrY5QNq3o-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmV1dGVycy5jb20v/cmVzaXplci92Mi9I/SUNEU1FKRUdOSkY1/QlNETkU0WE1SRFFH/VS5qcGc_YXV0aD05/YjgzZjZjZjlhNmI5/MGI2MjFiZTdhZDAx/N2QxYTdhMTI2YTYx/Njk0OTQ3Y2NmYmM5/MTk4NWQ0MzJmMGMx/NWIxJndpZHRoPTEw/ODAmcXVhbGl0eT04/MA',
  'https://imgs.search.brave.com/DY2QZE9i5BVuZorq3ViDy4H1_14KmEvNzDD_SDtZ18A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmV1dGVycy5jb20v/cmVzaXplci92Mi9L/R1g2UjZLWjVKSkpQ/R1NSWUpGN0dHWEFF/NC5qcGc_YXV0aD0w/ZGE3ZjIzNjc2OGUx/NWI4NTNmNTRkNGI0/MWYwZDgyZGJmMGM0/YjU4NzI0ZTkzOTk2/MzRkOTNmNGNhOTgx/ZTM0JndpZHRoPTE5/MjAmcXVhbGl0eT04/MA',
  'https://imgs.search.brave.com/NajqCt5BNIJVleZN-S_9N4Q4EHRqhgLpuL-9jFpmgxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5uYmNkZncuY29t/LzIwMjUvMDcvQVAy/NTE4ODYzMjcxMTI5/MC1lMTc1MTkyMTI2/MzU5NC5qcGc_cXVh/bGl0eT04NSZzdHJp/cD1hbGwmZml0PTgy/NTYsNDY1MA',
  'https://imgs.search.brave.com/38qFfJBCssV-zeiT7tJgm-Vxv02d2GACmRXHfvEMQv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmV1dGVycy5jb20v/cmVzaXplci92Mi9I/TlJRTklRV0VaSjRY/TFFMRlJaRVo3Tkc1/US5qcGc_YXV0aD04/ZmUxZDE1M2Y2ZTEw/MGZjZGZiZmMxYTA3/Y2RhZDQzZTJkNGQw/OGVjOTk1MjJkOTQ3/ZmI5NWFhMWM5NWQ3/YjUxJndpZHRoPTEw/ODAmcXVhbGl0eT04/MA'  
  ],
},
{
  id: '16',
  topic: 'flood',
  title: 'Community Support in Floods',
  subtitle: 'Together We Survive',
  image: 'https://imgs.search.brave.com/f1c6b7e2SA71w2toQZJaBcdZR8cQWAuYQmG4efG8EPY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzA3LzA1Lzcx/LzM2MF9GXzEzMDcw/NTcxODBfNmhXdW53/OUlnRzZ3Y2xVTXo5/NldSOXRIVTFGU085/TTQuanBn',
  isViewed: false,
  description:
    'Ways communities can support one another during and after floods.',
  keyPoints: [
    'Organize rescue and relief teams.',
    'Share food, water, and shelter with those in need.',
    'Assist authorities with information about missing people.',
    'Support emotional and psychological needs of survivors.',
    'Promote rebuilding efforts with unity and cooperation.',
  ],
  infographicsImages: [
  'https://imgs.search.brave.com/0eh-n1iB6vOC_2Loz2L-QOmfAOtNgy8BhLvH_wPUvbk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oYW5k/cy1kaXN0cmlidXRp/bmctd2F0ZXItYm90/dGxlcy1mbG9vZC12/aWN0aW1zLXZvbHVu/dGVlcnMtcHJvdmlk/ZS1lc3NlbnRpYWwt/YWlkLXN1cHBvcnQt/bmF0dXJhbC1kaXNh/c3Rlci1jb21tdW5p/dHktZWZmb3J0LTM4/NzAzMzYyOS5qcGc',
  'https://imgs.search.brave.com/lEtNvBBgGI2TLsn8-qDq9I01uRTuTulmYYzHk4YY1Dw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cm91cC1kaWZmZXJl/bnQtcGVvcGxlLXZv/bHVudGVlcmluZy1m/b29kYmFuay1wb29y/LXBlb3BsZV8yMy0y/MTQ5MDEyMjA4Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA',
  'https://imgs.search.brave.com/15z_-u9yt0R_iBqkVHMzuC2BL_YmzJFUiZvcCKCl_sg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mbG9v/ZC1yZWxpZWYtc3Vw/cGx5LTIxNzg2MzI1/LmpwZw',
  'https://imgs.search.brave.com/69pZGCFRow-GtbRSgklTedTWhJUy31rYALNqA20h6CM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmFi/Y25ld3NmZS5jb20v/YS85NWIwNTc5YS02/NWY3LTRlMzQtODQ0/OC1jMjFlMjQ3ZThh/MWQvdGV4YXMtZmxv/b2QtNy1ndHktZ21o/LTI1MDcwN18xNzUx/ODkxNjA4MzA1X2hw/TWFpbi5qcGc'  
  
  ],
},

 {
  id: '17',
  topic: 'cyclone',
  title: 'Before the Cyclone',
  subtitle: 'Preparation is Protection',
  description:
    'Steps to take before a cyclone strikes to keep yourself and your family safe.',
  keyPoints: [
    'Secure windows, doors, and rooftops.',
    'Store enough drinking water and food supplies.',
    'Keep emergency kit and important documents ready.',
    'Identify nearest cyclone shelter.',
    'Charge your phone and power banks fully.'
  ],
  image:
    'https://imgs.search.brave.com/pE7tKULPMz4eRTfb4FqgACKdE0U6scBC3wJOPfHDFkA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAxL0ZvcnJlc3Rf/Tm92XzE1XzE5OTJf/MDg1MFoucG5n',
  infographicsImages: [
  
'https://imgs.search.brave.com/CUSIeueMuV8pOJDiPpX2JxAW1ua-GWYhjyqtw2wrdr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRhL0VyaWNrXzIw/MjUtMDYtMTlfMjAy/NV8wNTQwWi5qcGc',
'https://imgs.search.brave.com/I38O3LmsivelRw8g5Gy3ocPGQE1tr2Jz7Zgnfb9IYRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcw/NDU1NzUwL3Bob3Rv/L3N0b3JtLXNlYXNv/bi1jYXV0aW9uLXNp/Z24uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXc2ZVNrQ2xX/d2txcTZ5UWZJdGhz/N3ZMQlZ0aS1GYVd4/YkgtakhRVFYxRFk9',
'https://imgs.search.brave.com/LfzjmQsJC8u5gSaPay_0Hvu2I1cUxsiilsKjK8Pb6Pg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NzY4NTQwL3Bob3Rv/L3BhbG0tdHJlZXMt/Ymxvd2luZy1pbi1h/LXRyb3BpY2FsLXN0/b3JtLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0yS04xUDJQ/eE9ycmdPcGVvcGRV/V1hfVTRYR1BHY3Ey/NXJEYktNMGZHRDdJ/PQ',    
  ],
},

{
  id: '18',
  topic: 'cyclone',
  title: 'During the Cyclone',
  subtitle: 'Stay Calm, Stay Inside',
  description:
    'Guidelines to follow when the cyclone is happening.',
  keyPoints: [
    'Stay indoors and away from windows.',
    'Turn off electricity and gas if advised.',
    'Do not step outside during strong winds.',
    'Use battery-powered lights instead of candles.',
    'Listen to official alerts for updates.'
  ],
  image:
    'https://imgs.search.brave.com/D5lPu4OkCxRjXnWTm41ylT_MKphaI_MMiTupe8A6aY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MDE5ODg2Ni9waG90/by93aW5keS1zdG9y/bS1kYXktYW5kLXdh/dmluZy1wYWxtLXRy/ZWVzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1mbnVPbnNa/NnF3N3d3TlVDbTV5/a2loRExrRW5nRkJr/VVV3SGlJX1owRHJz/PQ',
  infographicsImages: [
  'https://imgs.search.brave.com/nuyTBscz-FihfAZXNVtWrXSsL64aoEdrhyXa7jh4b50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgw/Mzg2MjkwL3Bob3Rv/L3Ryb3BpY2FsLXN0/b3JtLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zeGlQMmlY/RWpOc21WSmpCWVls/R012LWpFUUdMeXVa/cU9LQ193anAxUHI4/PQ',
  'https://imgs.search.brave.com/qipNkoa_-3QRaCrY7ebDmfCi3LxI7YMxONUgDE1cWqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NjU1NTMxNi9waG90/by9jeWNsb25lLWZh/bmktaGVhZGluZy10/b3dhcmRzLWluZGlh/LWluLTIwMTktZWxl/bWVudHMtb2YtdGhp/cy1pbWFnZS1mdXJu/aXNoZWQtYnktbmFz/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9YUtjakpRX0ls/cV9xOTZzNWNDNmg1/T01UN0RPWDFYaUY1/V1dLcEZtdWxvND0',
  'https://imgs.search.brave.com/xnMsVe65bl76rbdinl_zqlO_sl7WhFmIscI5bWBXUNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/Njc0MzcxNS9waG90/by9wYWJ1ay10eXBo/b29uLW9jZWFuLXNl/YS1zaG9yZS10aGFp/bGFuZC1uYXR1cmFs/LWRpc2FzdGVyLWV5/ZXdhbGwtaHVycmlj/YW5lLXN0cm9uZy1l/eHRyZW1lLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0tVEpI/X2pmTlNsZWFvNUtK/endfTnlKeGhITGhs/MTdUcndSZF84aGhR/X0k4PQ', 
  
  ],
},

{
  id: '19',
  topic: 'cyclone',
  title: 'After the Cyclone',
  subtitle: 'Recovery with Caution',
  description:
    'Safety measures to follow once the cyclone has passed.',
  keyPoints: [
    'Avoid fallen power lines and damaged poles.',
    'Do not consume contaminated food or water.',
    'Wear boots and gloves while cleaning debris.',
    'Check for structural damage before entering buildings.',
    'Help neighbors, especially children and elderly.'
  ],
  image:
    'https://imgs.search.brave.com/wtoBH0EleU_vhNZ0QzVj_gFYsoScLToDYzHQiFyCsA0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/MjU4NTgzMC9waG90/by93YXItem9uZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MjNmaGhCSDNzbGlw/Y1RfLWdpSjNQWmFI/WW13R0tBd3Y2dTF3/anc4WHJEWT0',
  infographicsImages: [
   
  'https://imgs.search.brave.com/1rR2cY506ErO5dR-sWWicOmP-lHrEwjfICYRQbT4HZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LXByb2R1Y3Rpb24u/d2Ntcy5hYmMtY2Ru/Lm5ldC5hdS9iNTg1/NDdkZjAyNmM1ZGRm/MDMyNWE3MDIxMWZm/YzMwMD9pbXBvbGlj/eT13Y21zX2Nyb3Bf/cmVzaXplJmNyb3BI/PTk5NCZjcm9wVz0x/NDk1JnhQb3M9MCZ5/UG9zPTAmd2lkdGg9/ODYyJmhlaWdodD01/NzU',
  'https://imgs.search.brave.com/uh3cyNV0xoDOVEtx3xfZ5xNXj24QE4yYum4W7H_B6SM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/MTQ0MjUxNC9waG90/by9odXJyaWNhbmUt/aWFuLWRlc3Ryb3ll/ZC1ob21lcy1pbi1m/bG9yaWRhLXJlc2lk/ZW50aWFsLWFyZWEt/bmF0dXJhbC1kaXNh/c3Rlci1hbmQtaXRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1KcVlUdFZmUlFZ/VlAxdnRLdEZlUDM1/dnhHcFFDVVRUTFNO/LXJEZmxwS3pVPQ',
  'https://imgs.search.brave.com/dFOOCyPNTm26fH8XQvqz3n-xJJIhGDCxHegi_wGvGCo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L2FjZS9zdGFuZGFy/ZC82NDAvY3BzcHJv/ZHBiL3Zpdm8vbGl2/ZS9pbWFnZXMvMjAy/NC8xMi8xNi8zZmMx/OTRlOS01NTVkLTQ3/ZmItYjJiNC0yZThi/ZmU4YmRkZTIuanBn/LndlYnA',
  ],
},

{
  id: '20',
  topic: 'cyclone',
  title: 'Cyclone Emergency Kit',
  subtitle: 'Pack Smart, Stay Ready',
  description:
    'Essential items to keep in your cyclone emergency kit.',
  keyPoints: [
    'Store dry food and bottled water.',
    'Include first aid and basic medicines.',
    'Pack flashlights, batteries, and power banks.',
    'Keep documents in waterproof pouches.',
    'Carry ropes, whistles, and multipurpose tools.'
  ],
  image:
    'https://imgs.search.brave.com/o2wA2YsRabaKdnDgguCQbLo1aMz4wRsVmJQzPQvv4fs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzc2LzA2LzU2/LzM2MF9GXzEwNzYw/NjU2MzFfR2hrenB5/eG9zRHFXd0p6ODdv/MTNpR0tDN1ZGTlJ4/VHAuanBn',
  infographicsImages: [
  'https://imgs.search.brave.com/8GkuxniXi7Fh8OqavYjLYUy3U_U3nWzKcUL2gUtzfXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vUHJp/bWFjYXJlLUtCLTgw/MDVXTS1UZWFyLVJl/c2lzdGFudC1GaXJz/dC1BaWQtS2l0LTc1/LVBpZWNlXzcxYTRh/N2NhLTI3YmYtNGE1/OS04Y2VmLWU2ZGYw/MTAxYTc5OS5iNWUy/OTBiNTU0OTUzZDVm/ZjZjNGIxYjE4MWQ2/YzYyMi5qcGVnP29k/bkhlaWdodD01NzYm/b2RuV2lkdGg9NTc2/Jm9kbkJnPUZGRkZG/Rg',
  'https://imgs.search.brave.com/z593DVUNKGVaxFzybxeAVqDEgrzymaQb-WrUk0EF390/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZXNlY3VyZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMDgvODE4MDAu/anBlZw',
  'https://imgs.search.brave.com/XW9MnNOa_iB7HhMCb5U-_1YCQpKWninuwPkzrk0wy5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kM2M3/b2R0dG5wN2EyZC5j/bG91ZGZyb250Lm5l/dC91cGxvYWRzL2Nv/bnRlbnRfaXRlbS9y/ZXVzYWJsZS9pbWFn/ZS81NzM4L0VtZXJn/ZW5jeS1ncmFiLWJh/Zy1wcm9tb19kZWZh/dWx0QDJ4LnBuZw', 
  
  ],
},

{
  id: '21',
  topic: 'cyclone',
  title: 'Community Response',
  subtitle: 'Helping Hands in the Storm',
  description:
    'How communities can support each other during and after a cyclone.',
  keyPoints: [
    'Assist children, elderly, and disabled during evacuation.',
    'Share food, water, and supplies if needed.',
    'Report hazards like gas leaks or broken wires.',
    'Support rescue and relief workers.',
    'Avoid spreading rumors and stay calm.'
  ],
  image:
    'https://imgs.search.brave.com/GO1YjCp7IO6wDPjOspYG494zYrQVwvd-6K4IHCcVDYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzExL0h1cnJpY2Fu/ZV9GbG9yZW5jZV8t/XzE4MDkxNi1HLUNa/MDQzLTExNjNfKDQ0/MDYwNDE2MzY0KS5q/cGc',
  infographicsImages: [
  'https://imgs.search.brave.com/IzMqlquz2c8ZKkq7408UgIP-Gm4Ip8549pONkCzbF04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzIxLzk1Lzkz/LzM2MF9GXzkyMTk1/OTM5NF9OeXdmYTl5/VnR4U3J5SnFMZXpi/Tzl2bmFIbzd6c0Jj/by5qcGc',
  'https://imgs.search.brave.com/SPTcW857ap04Eu0f2pnusphMhm_f5yEXmVTcVOmcXyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2V0cmVhZHkucWxk/Lmdvdi5hdS9zaXRl/cy9kZWZhdWx0L2Zp/bGVzL3N0eWxlcy90/aWxlc180XzNfL3B1/YmxpYy8yMDE5LTA5/L1ZvbHVudGVlcmlu/Z18yLmpwZz9pdG9r/PTc0YXZ6MUFr',
  'https://imgs.search.brave.com/GItm111cnyCMniReLBEUNuM3lj4WKRWL-wTJ86r_HO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg2/NDc2MTI5L3Bob3Rv/L3NlYXJjaC1hbmQt/cmVzY3VlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1jWHc3/VC1VZ0pBUGlZQUNG/clUxVTQ0eTlpd0sw/cVhXR0V0N0dVVUM2/OXhvPQ'
    
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
    isViewed: false,
  },
    {
    id: '10',
    topic: 'earthquake',
    title: 'Earthquake Safety Quiz',
    questions: '20 questions',
    points: '500 points',
    image:
      'https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg',
    isViewed: false,
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

  {
  id: '3',
  topic: 'flood',
  title: 'Flood Safety Quiz',
  questions: '15 questions',
  points: '400 points',
  image:
    'https://cdn.pixabay.com/photo/2016/09/15/15/20/flood-1671554_960_720.png',
  isViewed: false,
},

{
  id: '4',
  topic: 'cyclone',
  title: 'Cyclone Safety Quiz',
  questions: '15 questions',
  points: '400 points',
  image:
    'https://cdn.pixabay.com/photo/2013/07/12/15/37/tornado-150199_960_720.png',
  isViewed: false,
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
