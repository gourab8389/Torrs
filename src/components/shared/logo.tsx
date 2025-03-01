import { cn } from "@/lib/utils";

interface LogoProps{
        className?:  string;         
}

const Logo = (
        {className}: LogoProps
) => {
  return (
    <div className={cn("text-3xl font-bold", className)}>
      Logo
    </div>
  )
}

export default Logo
