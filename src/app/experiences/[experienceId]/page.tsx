import experiences from "@/app/data/experiences";
//@ts-ignore
export default function Home({params}) {

    return (
      <div className="">
        {experiences[Number(params.experienceId)].title}
      </div> 
    ); 
}