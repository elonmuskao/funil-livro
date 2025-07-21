"use client"

interface LoadingSpinnerProps {
  size?: number
  color?: string
  thickness?: number
}

export function LoadingSpinner({ size = 48, color = "#d97706", thickness = 2 }: LoadingSpinnerProps) {
  return (
    <div
      className="border-transparent rounded-full animate-spin"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${thickness}px`,
        borderTopColor: color,
        borderRightColor: color,
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        animationDuration: "1s",
      }}
    />
  )
}
