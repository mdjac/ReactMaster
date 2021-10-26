export function DisplayList(props) {
  return (
    <div>
      <ul>
      {props.timestamps.map((time,index)=>{
          return <li key={index}>{time.toLocaleTimeString()}</li>
      })}
      </ul>
    </div>
  );
}