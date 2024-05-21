export default function ModuleBox({
    children,
    clickable = false,
}: {
    children: React.ReactNode;
    clickable?: boolean;
}) {
    return (
        <div
            className={`flex items-center justify-center bg-zinc-50 rounded-md p-4 min-w-[350px] shadow-md ${clickable ? 'cursor-pointer' : ''}`}
        >
            {children}
        </div>
    );
}