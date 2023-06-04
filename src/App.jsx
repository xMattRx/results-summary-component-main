import './App.scss';
import memoryIcon from './assets/images/icon-memory.svg';
import reactionIcon from './assets/images/icon-reaction.svg';
import verbalIcon from './assets/images/icon-verbal.svg';
import visualIcon from './assets/images/icon-visual.svg';
import DataJson from './data.json';
function App() {

  return (
    
    <div className='container'>
      <div className='containerCard'>
        <div className='containerCardLeft'>
          <h2 className='title'>Your Result</h2>
          <div className='containerCircle'>
            <h1 className='number'>76</h1>
            <span>of 100</span>
          </div>
          <h1 className='rating'>Great</h1>
          <p className="description">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className='containerCardRight'>
          <h2 className='title'>Summary</h2>

          <div className="CardRightContainer">
            {DataJson && DataJson.map((element, index)=>{
              console.log(DataJson)
            return (<div key={index} className="row">
              <div className="textImage">
                  {element.category === 'Reaction' && (
                  <img src={reactionIcon} alt="Reaction" />
                  )}
                  {element.category === 'Memory' && (
                    <img src={memoryIcon} alt="Memory" />
                  )}
                  {element.category === 'Verbal' && (
                    <img src={verbalIcon} alt="Verbal" />
                  )}
                  {element.category === 'Visual' && (
                    <img src={visualIcon} alt="Visual" />
                  )}
                <span>{element.category}</span>
              </div>
              <div className="score">
                <span className="pontuation">{element.score}</span>
                <span className="bar">/</span>
                <span className="total">100</span>
              </div>
            </div>)
            })}
          </div>
            <div className="containerButton">
              <button>Continue</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
