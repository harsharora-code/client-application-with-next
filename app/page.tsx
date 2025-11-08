
import {getServerSession} from "next-auth";
export default async function Home() {
  const sessiion = await getServerSession();

  return (
    <div>
      {JSON.stringify(sessiion)}
    
    </div>
   
  )
}
 
