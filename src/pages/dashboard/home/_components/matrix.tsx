export default function Matrix() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {matrixData.map((item, index) => (
        <div
          key={index}
          className="rounded-[12px] border-2 border-[#E9EAEB] p-5"
        >
          <p className="text-[13px] font-medium text-[#899AB3]">{item.title}</p>
          <p className="text-[28px] font-bold text-[#101828]">{item.value}</p>
          <p className="text-xs text-[#00B5C6]">{item.change}</p>
        </div>
      ))}
    </div>
  );
}

const matrixData = [
  {
    title: "ACTIVE STATES COVERED",
    value: "18",
    change: "+3 this month",
  },
  {
    title: "TEAM MEMBERS",
    value: "4 / 4",
    change: "Team plan limit reached",
  },
  {
    title: "AI CHAT QUERIES",
    value: "1,204",
    change: "+312 this month",
  },
  {
    title: "MONTHLY SPEND",
    value: "$950",
    change: "Team + HRBP add-on",
  },
];
