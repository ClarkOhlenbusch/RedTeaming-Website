import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center h-full py-2", className)}>
      <Image
        src="/images/redteaming-logo.png"
        alt="RedTeaming Logo"
        width={220}
        height={60}
        className="w-auto h-full max-h-full object-contain"
        priority
      />
    </div>
  )
}
