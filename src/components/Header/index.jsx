import background from "../../assets/imgs/bgImg.png";


export function Header() {

  return (
    <div>
      <div  
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          padding: "160px 0",
          margin: "0 0 30px 0",
        }}>
      </div>

    </div>
  )
}
