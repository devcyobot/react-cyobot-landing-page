interface ModelArray {
  models: Model[];
}

interface Model {
  name: string;
  level: string;
  tasks: Task[];
  timeImage: {
    src: string;
    alt: string;
  };
  timeData: Time[];
}

interface Task {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  job: string;
}

interface Time {
  name: string;
  amount: number;
}

const modelData: ModelArray = {
  models: [
    {
      name: 'ADVENTURER',
      level:
        'Having mastered the basics, you will now delve deeper into the intricacies of robotics, exploring more complex applications and programming with specific design requirements. You will get to pick your roles  and pathways during your quest to become a master in a field of robotics. As the adventurer’s quest concludes, you will gain multiple essential skills allowing you to enter the real-world industry as your desired role.',
      tasks: [
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Robot dancing',
          job: 'Create awesome moves and make the robot dance tom usic with motion planning',
        },
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Smart Temparature',
          job: 'Monitor your room temperature and send it to your phone with IoT',
        },
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Pose estimation',
          job: 'Use pretrained pose estimation model and control the robot to mimic your movement',
        },
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Voice-controlled Robot',
          job: 'Integrate microphone and pre-trained machine learning model to CYOCrawler with your voice',
        },
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Music visualizer',
          job: 'Apply spectral analysis to music and visualize the spectrum using built-in LED matrix',
        },
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Learning to walk',
          job: 'Reward your robot for every time it successfully moves forward to teach how to walk',
        },
      ],
      timeImage: {
        src: 'src/assets/adventurer-time-atr.png',
        alt: 'Adventurer Time Attribute Parts',
      },
      timeData: [
        {
          name: 'Code Logic',
          amount: 3,
        },
        {
          name: 'Debugging',
          amount: 2,
        },
        {
          name: 'Design',
          amount: 1,
        },
      ],
    },
    {
      name: 'EXPLORER',
      level:
        'At the Pioneer level, you have entered the rank of the elites. With proficiency in robotics, you’ll be able to come up with your own system design, hardware and software integration, and your own projects. As you master the Pioneer level, you will gain tremendous debugging experience as well as technical weapons to tackle any problems. After completing Pioneer level, you can form your own guild or party to create quests or tackle World Quests.',
      tasks: [
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Emoji Display',
          job: 'Display different visuals and light effects on your robot',
        },
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Electric Dice',
          job: 'Simulate a digital dice  that randomly generates numbers when shaked',
        },
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Timer',
          job: 'Countdown a set time with LED visual and speaker alarm',
        },
      ],
      timeImage: {
        src: 'src/assets/explorer-time-atr.png',
        alt: 'Explorer Time Attribute Parts',
      },
      timeData: [
        {
          name: 'Code Logic',
          amount: 3,
        },
        {
          name: 'Debugging',
          amount: 2,
        },
        {
          name: 'Design',
          amount: 0,
        },
      ],
    },
    {
      name: 'PIONEER',
      level:
        'At the Pioneer level, you have entered the rank of the elites. With proficiency in robotics, you’ll be able to come up with your own system design, hardware and software integration, and your own projects. As you master the Pioneer level, you will gain tremendous debugging experience as well as technical weapons to tackle any problems. After completing Pioneer level, you can form your own guild or party to create quests or tackle World Quests.',
      tasks: [
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Robotic Arm',
          job: 'Design and control a robotic arm with more than 3 DOF using CYOBrain',
        },
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Smart Pet',
          job: 'Turn the robot into a smart pet that sees you, hears you and react to you.',
        },
        {
          image: {
            src: 'src/assets/yellow-rectangle.png',
            alt: 'yellow rectangle',
          },
          name: 'Mars Rover',
          job: 'Hack your robot into a Mars Rover for multi-terrestrial locomotion',
        },
      ],
      timeImage: {
        src: 'src/assets/piooner-time-atr.png',
        alt: 'Pioneer Time Attribute Mistery',
      },
      timeData: [
        {
          name: 'Code Logic',
          amount: 2,
        },
        {
          name: 'Debugging',
          amount: 4,
        },
        {
          name: 'Design',
          amount: 3,
        },
      ],
    },
  ],
};

export default modelData;
