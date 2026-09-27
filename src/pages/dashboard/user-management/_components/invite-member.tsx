import InviteMemberForm from "./invite-member-form";

export default function InviteMember() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-[#101828]">User Management</h2>
        <p className="text-sm text-[#899AB3]">
          Team plan · 4 / 4 users · manage roles & access
        </p>
      </div>
      <InviteMemberForm />
      {/* If team member reached limit, show limit reached message */}
      {/* <LimitReached /> */}
    </div>
  );
}
