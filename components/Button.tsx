import styles from "./Button.module.css";

export type ButtonVariant = "icon" | "ghost";
export type ButtonTone = "dark" | "light";

/**
 * The design system's control primitive, for buttons that perform an action
 * rather than navigate. ActionLink covers the navigational case.
 *
 *   icon   square bordered control (carousel arrows)
 *   ghost  bare control, used where the surrounding chrome supplies the frame
 *
 * All four states — rest, hover, active, focus-visible — are defined here so
 * no caller re-implements them.
 */
export function Button({
  variant = "icon",
  tone = "dark",
  label,
  onClick,
  children,
  className,
  disabled,
}: {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  /** Accessible name — required, since these are usually icon-only. */
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${className ?? ""}`}
      data-variant={variant}
      data-tone={tone}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
