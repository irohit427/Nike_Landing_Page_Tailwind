const Button = ({ label, icon }) => {
  return (
    <button className="flex bg-orange-500 
      justify-center items-center gap-2 px-7 py-4 text-lg border leading-none
      rounded-full text-white font-montserrat border-coral-red
    ">      
      {label}
      {icon && <img alt='arrow' src={icon}  className="rounded-full ml-2 w-5 h-5"/>}
    </button>
  )
}

export default Button