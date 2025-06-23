export default function SkeletonLoader({ className }: { className?: string }) {
  return (
    <div
      className={`bg-gray-300 animate-pulse rounded-md dark:bg-gray-700  ${
        className ?? "h-6 w-full"
      }`}
    />
  );
}
