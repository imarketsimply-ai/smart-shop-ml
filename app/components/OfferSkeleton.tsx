export default function OfferSkeleton() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 animate-pulse">
      <div className="h-6 w-24 bg-neutral-700 rounded-full mb-4" />
      <div className="h-5 w-full bg-neutral-700 rounded mb-2" />
      <div className="h-5 w-3/4 bg-neutral-700 rounded mb-6" />
      <div className="h-10 w-full bg-neutral-700 rounded-xl" />
    </div>
  );
}
