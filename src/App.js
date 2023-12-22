import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id' : 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '731024',
  'gender': '남자',
  'job': '회사원'
  },
  {
    'id' : 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이순신',
    'birthday': '031024',
    'gender': '남자',
    'job': '군인'
    },
    {
      'id' : 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '윤석렬',
      'birthday': '501024',
      'gender': '남자',
      'job': '검사'
      }
]

function App() {
  return (
    <div>
        {
          customers.map( c=> { return (
                              <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
                              );
                              }
          )
        }
    </div>
    )
  }

export default App;
