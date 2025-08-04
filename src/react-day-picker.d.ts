import "react-day-picker";

declare module "react-day-picker" {
  interface CustomComponents {
    IconLeft?: React.FC<{ className?: string }>;
    IconRight?: React.FC<{ className?: string }>;
  }
}
