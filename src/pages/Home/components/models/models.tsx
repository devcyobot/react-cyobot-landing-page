import './models.css';
import ModelData from '../../../../data/modelData';
import Carousel from './carousel';
import Level from './level';
import Time from './time';
import Tasks from './tasks';

export default function Models() {
  const modelsArray = ModelData.models;
  const modelName = modelsArray[0].name;
  const modelLevel = modelsArray[0].level;
  const modelTimeImage = modelsArray[0].timeImage;
  const modelTimeDataArray = modelsArray[0].timeData;
  const modelTasksArray = modelsArray[0].tasks;
  return (
    <section className="models-container">
      <h2 className="vt323-regular">CHOOSE YOUR QUEST</h2>
      <Carousel />
      <h3 className="vt323-regular active-model-name">{modelName}</h3>
      <Level summary={modelLevel} />
      <Time image={modelTimeImage} atr={modelTimeDataArray} />
      <Tasks data={modelTasksArray} />
    </section>
  );
}
