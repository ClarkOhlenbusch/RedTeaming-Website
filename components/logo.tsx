import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center px-0", className)}>
      <Image
        src="/images/redteaming-logo.png"
        alt="RedTeaming Logo"
        width={160}
        height={40}
        className="w-auto h-full max-h-full object-contain"
        priority
      />
    </div>
  )
}
