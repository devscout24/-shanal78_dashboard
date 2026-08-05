import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Switch } from "@/components/ui/switch";

export default function GeneralNotification() {
  return (
    <ul>
      <li className="border-border flex items-center justify-between border-b pb-3">
        <span className="font-sans text-sm leading-5 font-medium">
          I’m mentioned in a message
        </span>
        <Switch />
      </li>

      <li className="border-border flex items-center justify-between border-b py-3">
        <span className="font-sans text-sm leading-5 font-medium">
          Someone replies to any message
        </span>
        <ButtonGroup className="border-border rounded-sm border">
          <Button variant="outline">None</Button>
          <Button variant="outline">In-app</Button>
          <Button variant="outline">Email</Button>
        </ButtonGroup>
      </li>

      <li className="border-border flex items-center justify-between border-b py-3">
        <span className="font-sans text-sm leading-5 font-medium">
          I’m assigned a task
        </span>
        <ButtonGroup className="border-border rounded-sm border">
          <Button variant="outline">None</Button>
          <Button variant="outline">In-app</Button>
          <Button variant="outline">Email</Button>
        </ButtonGroup>
      </li>

      <li className="border-border flex items-center justify-between border-b py-3">
        <span className="font-sans text-sm leading-5 font-medium">
          A task is overdue
        </span>
        <ButtonGroup className="border-border rounded-sm border">
          <Button variant="outline">None</Button>
          <Button variant="outline">In-app</Button>
          <Button variant="outline">Email</Button>
        </ButtonGroup>
      </li>

      <li className="flex items-center justify-between pt-3">
        <span className="font-sans text-sm leading-5 font-medium">
          A task status is updated
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
