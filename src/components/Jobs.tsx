import Job from "./Job";
interface Job {
    name: string,
    id:number,
    status:boolean
}

interface Props {
    job:Job[]
}
export default function Jobs(props:Props) {
    // console.log(111111111,props);
    const { job} = props;
  return (
    <div>Jobs
        {job.map((item,index) =>{
            return <Job nameJob={item.name}></Job>
        })}
    </div>
  )
}
