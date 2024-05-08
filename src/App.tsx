import Jobs from './components/Jobs'

export default function App() {
  let jobs = [
    {
      name:'code',
      id:1,
      status:false,
    },
    {
      name:'coffe',
      id:2,
      status:false,
    },
    {
      name:'da bong',
      id:3,
      status:false,
    }
  ]
  return (
    <div>
      <h2>Danh sach cong viec</h2>
      <input type="text" />
      <button>Them</button>
      <Jobs job={jobs}></Jobs>
    </div>
  )
}
