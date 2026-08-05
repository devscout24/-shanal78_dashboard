import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function SummeryNotification() {
  return (
    <ul>
      <li className="border-border flex items-center justify-between border-b pb-3">
        <span className="font-sans text-sm leading-5 font-medium">
          Daily summary
        </span>
        <ButtonGroup className="border-border rounded-sm border">
          <Button variant="outline">None</Button>
          <Button variant="outline">In-app</Button>
          <Button variant="outline">Email</Button>
        </ButtonGroup>
      </li>

      <li className="border-border flex items-center justify-between border-b py-3">
        <span className="font-sans text-sm leading-5 font-medium">
          Weekly summary
        </span>
        <ButtonGroup className="border-border rounded-sm border">
          <Button variant="outline">None</Button>
          <Button variant="outline">In-app</Button>
          <Button variant="outline">Email</Button>
        </ButtonGroup>
      </li>

      <li className="border-border flex items-center justify-between border-b py-3">
        <span className="font-sans text-sm leading-5 font-medium">
          Monthly summary
        </span>
        <ButtonGroup className="border-border rounded-sm border">
          <Button variant="outline">None</Button>
          <Button variant="outline">In-app</Button>
          <Button variant="outline">Email</Button>
        </ButtonGroup>
      </li>

      <li className="flex items-center justify-between pt-3">
        <span className="font-sans text-sm leading-5 font-medium">
          Quarterly summary
        </span>
        <ButtonGroup className="border-border rounded-sm border">
          <Button variant="outline">None</Button>
          <Button variant="outline">In-app</Button>
          <Button variant="outline">Email</Button>
        </ButtonGroup>
      </li>
    </ul>
  );
}
