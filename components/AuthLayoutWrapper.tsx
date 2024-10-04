export default function AuthLayoutWrapper({
  children,
  displayName,
}: Readonly<{ children: React.ReactNode; displayName: string }>) {
  return (
    <div className="flex justify-between h-full">
      <aside className="hidden md:flex md:flex-1 md:bg-slate-800">
        <div>image</div>
      </aside>
      <div className="flex flex-col gap-10 flex-1 items-center bg-stone-500 px-2">
        <h1 className="text-4xl font-bold mt-20">{displayName}</h1>
        {children}
      </div>
    </div>
  );
}
