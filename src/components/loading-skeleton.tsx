import { Skeleton } from "./ui/skeleton";

export function WeatherSkeleton() {
  return (
    <div>
      <div className="grid gap-2 md:grid-cols-5 my-6">
        <Skeleton className="w-[100px] h-[200px] w-full rounded-lg" />
        <Skeleton className="w-[100px] h-[200px] w-full rounded-lg" />
        <Skeleton className="w-[100px] h-[200px] w-full rounded-lg" />
        <Skeleton className="w-[100px] h-[200px] w-full rounded-lg" />
        <Skeleton className="w-[100px] h-[200px] w-full rounded-lg" />
      </div>
      <div className="space-y-6">
        <div className="grid gap-6">
          {/* <Skeleton className="h-[300px] w-full rounded-lg" /> */}
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <div className="grid gap-6 md:grid-cols-2">
            <Skeleton className="h-[300px] w-full rounded-lg" />
            <Skeleton className="h-[300px] w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}