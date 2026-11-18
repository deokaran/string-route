"use client";

interface SideMenuProps {
  activeNav?: string;
  onSelectNav?: (name: string) => void;
}

const navigation = [
  { name: "Dashboard", icon: "" },
  { name: "Routes", icon: "" },
  { name: "Logs", icon: "" },
  { name: "Settings", icon: "" },
];

export default function SideMenu({
  activeNav = "Dashboard",
  onSelectNav,
}: SideMenuProps) {
  return (
    <aside className="flex h-screen w-[230px] shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="flex h-[54px] items-center gap-2.5 border-b border-slate-200 px-5">
        <span className="text-sm font-bold tracking-tight text-[#0B192C]">
          StringRoute
        </span>
      </div>

      <div className="flex-1 px-3 py-5">

        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => onSelectNav?.(item.name)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs transition cursor-pointer ${
                  isActive
                    ? "bg-[#0B192C] font-semibold text-white shadow-xs"
                    : "text-slate-600 hover:bg-[#F0F4F8] hover:text-[#0B192C]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
