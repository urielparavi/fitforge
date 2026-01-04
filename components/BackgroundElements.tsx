export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse-slower"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl animate-pulse-slowest"></div>
    </div>
  );
}
