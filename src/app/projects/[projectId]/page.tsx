import projects from "@/app/data/projects";
//@ts-ignore
export default function Home({params}) {

    return (
      <div className="">
        {projects[Number(params.projectId)].title}
      </div> 
    ); 
}