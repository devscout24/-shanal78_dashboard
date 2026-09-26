import { cn } from "@/lib/utils";
import ChangeRole from "./change-role";

export default function Members() {
  return (
    <div className="space-y-3 rounded-[12px] border border-[#E9EAEB] p-6">
      {members.map((member) => (
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[15px] font-bold">{member.name}</p>
            <p className="text-xs text-[#899AB3]">{member.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="w-25 text-sm text-[#101828]">{member.role}</p>
            <p
              className={cn("rounded-full px-2.5 py-1 text-sm font-medium", {
                "bg-[#E6F5EE] text-[#00994C]": member.status === "Active",
                "bg-[#FFFCEE] text-[#BF8C00]": member.status === "Invited",
              })}
            >
              {member.status}
            </p>

            <ChangeRole />

            <button className="cursor-pointer rounded-full px-3.5 py-3 text-[13px] font-medium text-[#D13333]">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const members = [
  {
    name: "Olivia Rhye",
    email: "olivia.rhye@example.com",
    role: "Admin",
    status: "Active",
  },

  {
    name: "Chris Simmons",
    email: "chris.simmons@a2hr.com",
    role: "Member",
    status: "Active",
  },
  {
    name: "Jordan Lee",
    email: "jordan@a2hr.com",
    role: "Member",
    status: "Active",
  },
  {
    name: "Priya Nair",
    email: "priya@a2hr.com",
    role: "Member",
    status: "Invited",
  },
];
