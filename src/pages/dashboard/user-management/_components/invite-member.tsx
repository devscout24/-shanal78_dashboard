export default function InviteMember() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-[#101828]">User Management</h2>
        <p className="text-sm text-[#899AB3]">
          Team plan · 4 / 4 users · manage roles & access
        </p>
      </div>

      <button className="cursor-pointer rounded-[8px] bg-[#99999E] px-4.5 py-2.5 text-sm font-medium text-white">
        + Invite member (seat limit reached)
      </button>
    </div>
  );
}
