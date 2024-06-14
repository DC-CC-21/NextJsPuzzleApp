export default function PuzzleImageSkeleton({image, children}:{image: string, children: React.ReactNode}) {
 return  <div className="flex h-full flex-col overflow-hidden rounded-lg border-[3px] border-fuchsia-500 bg-blue-500">
 <div className="h-full w-full">
    {children}
 </div>
 <h2 className="p-2 text-center">{image}</h2>
</div>
}