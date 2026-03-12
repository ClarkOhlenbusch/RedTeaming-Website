import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "white"
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const src =
    variant === "white"
      ? "/images/redteaming-logo-white.png"
      : "/images/redteaming-logo.png"

  return (
    <div className={cn("flex items-center px-0", className)}>
      <Image
        src={src}
        alt="RedTeaming Logo"
        width={160}
        height={40}
        className="w-auto h-full max-h-full object-contain"
        priority
      />
    </div>
  )
}
