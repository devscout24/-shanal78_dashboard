export default function RecentActivity() {
  return (
    <div className="rounded-[12px] border border-[#E9EAEB] p-6">
      <h2 className="text-lg font-bold text-[#101828]">Recent activity</h2>

      <div className="mt-4 divide-y divide-[#E5EBF2]">
        {recentActivities.map((item, index) => (
          <div
            key={item.id ?? index}
            className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
          >
            {/* Left: Name and Action */}
            <div className="flex items-center gap-16">
              <span className="w-32 text-sm font-semibold text-[#10172A]">
                {item.user}
              </span>
              <span className="text-sm font-normal text-[#475467]">
                {item.action}
              </span>
            </div>

            {/* Right: Timestamp */}
            <span className="text-sm font-normal text-[#98A2B3]">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const recentActivities = [
  {
    id: 1,
    user: "Olivia Rhye",
    action: "Asked about California overtime rules",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: "Chris Simmons",
    action: "Added New York to coverage",
    time: "Yesterday",
  },
  {
    id: 3,
    user: "Olivia Rhye",
    action: "Downloaded Employee Handbook Template",
    time: "2 days ago",
  },
  {
    id: 4,
    user: "System",
    action: "HRBP add-on renewed",
    time: "5 days ago",
  },
];
