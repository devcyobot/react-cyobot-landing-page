import Card from '../../../../components/ui/card';
import './tasks.css';

interface TasksProps {
  data: Task[];
}

interface Task {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  job: string;
}

export default function Tasks({ data }: TasksProps) {
  return (
    <div className="tasks-container-wrapper">
      <h4 className="nunito-bold">Typical Tasks</h4>
      <div className="tasks-container">
        <Card
          image={{ src: data[0].image.src, alt: data[0].image.alt }}
          color="yellow"
          title={data[0].name}
          text={data[0].job}
        />
        <Card
          image={{ src: data[1].image.src, alt: data[1].image.alt }}
          color="yellow"
          title={data[1].name}
          text={data[1].job}
        />
        <Card
          image={{ src: data[1].image.src, alt: data[2].image.alt }}
          color="yellow"
          title={data[2].name}
          text={data[2].job}
        />
        <Card
          image={{ src: data[3].image.src, alt: data[3].image.alt }}
          color="yellow"
          title={data[3].name}
          text={data[3].job}
        />
        <Card
          image={{ src: data[4].image.src, alt: data[4].image.alt }}
          color="yellow"
          title={data[4].name}
          text={data[4].job}
        />
        <Card
          image={{ src: data[5].image.src, alt: data[5].image.alt }}
          color="yellow"
          title={data[5].name}
          text={data[5].job}
        />
      </div>
    </div>
  );
}
