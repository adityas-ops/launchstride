import { useRouter } from "next/router"



const data = [
    {
        id:1,
        img:"/images/landingPage/ccc1.png"
    },
    {
        id:2,
        img:"/images/landingPage/ccc2.png"
    },
    {
        id:3,
        img:"/images/landingPage/ccc3.png"
    }
]

function Id() {
    const router = useRouter()
    const { id } = router.query


  return (
    <>
    <div className="w-full h-full flex justify-center">
    <div className="container object-cover">
   {
         data.map((item)=>{
                if(item.id == id){
                    return(
                        <img key={id} src={item.img} alt="balaji" className="w-full" />
                    )
                }
            }
            )

   }
   </div>
   </div>
    </>
  )
}

export default Id