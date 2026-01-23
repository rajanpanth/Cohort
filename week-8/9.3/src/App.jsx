import { useState } from "react"


// function App() {

//   return (
//     <div style={{ background: "#dfe6e9", height: "100vh", }}>
//       <div style={{ display: "flex", justifyContent: "center", }}>
//         <div>
//           <div>
//             <PostComponent
//               name={"Rajan"}
//               subtitle={"20 Followers"}
//               time={"3m ago"}
//               image={"https://wctour-images.worldchess.com/media/user_avatars/Q/J/L/f5437d66-e1ee-428a-bef2-9e2a95530963.png"}
//               description={"hello its me rajan pantha i amm a computer science student currently studying bsc csit in samriddhi college..."}
//             />
//             <br />
//           </div>
//           <div>
//             <PostComponent
//               name={"shyan"}
//               subtitle={"Promoted"}
//               image={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"}
//               description={"hello its me shyan karki i amm a computer science student currently studying bsc csit in samriddhi college..."}
//             />
//             <br />
//           </div>
//           <div>
//             <PostComponent
//               name={"karan"}
//               subtitle={"20 Followers"}
//               time={"3m ago"}
//               image={"https://images.pexels.com/photos/18718906/pexels-photo-18718906.jpeg?cs=srgb&dl=pexels-best-photography-748452391-18718906.jpg&fm=jpg"}
//               description={"hello its me karan singh i amm a computer science student currently studying bsc csit in samriddhi college..."}
//             />
//             <br />
//           </div>
//         </div>
//       </div>
//        <Toggle/>
//     </div>
   
//   )
// }
// const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20, }


// function PostComponent({name, subtitle, time,  image, description}) {
//   return (
//     <div style={style}>
//       <div style={{ display: "flex" }}>
//         <img src={image} style={{
//           width: 30,
//           height: 30,
//           borderRadius: 20
//         }}></img>
//         <div style={{ fontSize: 10, marginLeft: 10, }}>
//           <b>{name}</b>
//           <div>{subtitle}</div>
//           {time != undefined &&  <div style={{display: "flex"}}>
//   <div>{time}</div>
//   <img src="https://static.vecteezy.com/system/resources/previews/000/633/173/original/clock-icon-symbol-sign-vector.jpg" style={{height: 12, width: 15}}/>
//           </div> }
         
//         </div>
//       </div>
//       <div style={{ fontSize: 12 }}>
//         {description}
//       </div>
//     </div>
//   )
// }

// //try to do profiole card

// function ProfileCard() {

// }

function App(){
  return(<div>
    <Toggle/>
  </div>)
}

function Toggle(){
let [toggle, setToggle] = useState(false)
  return(
    <div>
<button onClick={() =>setToggle(!toggle)}>Toggle</button>
{toggle && <p>This is the content after toggle</p>}
    </div>
  )
}

export default App

