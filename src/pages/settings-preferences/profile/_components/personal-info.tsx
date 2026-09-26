import Icon from "@/components/shared/Icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/config/firebase";
import { useFetcher } from "react-router";

export default function PersonalInfo() {
  const fetcher = useFetcher();
  const user = auth.currentUser || null;

  if (!user) {
    return null;
  }

  return (
    <div className="mt-8 flex items-stretch gap-8 py-4">
      <div className="w-fit max-w-xs">
        <h4 className="font-sans text-sm leading-5 font-semibold">
          Personal info
        </h4>
        <p className="text-muted-foreground font-sans text-sm leading-5 font-normal">
          Update your photo and personal details.
        </p>
      </div>

      <div className="border-border flex-1 rounded-[12px] border bg-white">
        <fetcher.Form
          method="post"
          action="/user-management/profile?_action=update-personal-info"
        >
          <div className="grid grid-cols-2 gap-6 space-y-5 p-6">
            <fieldset className="space-y-1.75">
              <Label
                htmlFor="first-name"
                className="text-card-foreground font-sans text-sm leading-5 font-medium"
              >
                First Name*
              </Label>
              <div className="relative">
                <Input
                  placeholder="Enter your First name"
                  className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                  type="text"
                  name="first-name"
                  defaultValue={user?.displayName?.split(" ")[0] || ""}
                />
              </div>
            </fieldset>

            <fieldset className="space-y-1.75">
              <Label
                htmlFor="last-name"
                className="text-card-foreground font-sans text-sm leading-5 font-medium"
              >
                Last Name*
              </Label>
              <div className="relative">
                <Input
                  placeholder="Enter your Last name"
                  className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                  type="text"
                  name="last-name"
                  defaultValue={user?.displayName?.split(" ")[1] || ""}
                />
              </div>
            </fieldset>

            <fieldset className="col-span-2 space-y-1.75">
              <Label
                htmlFor="email"
                className="text-card-foreground font-sans text-sm leading-5 font-medium"
              >
                Email address*
              </Label>
              <div className="relative">
                <Input
                  placeholder="Enter your email"
                  className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                  type="email"
                  name="email"
                  defaultValue={user?.email || ""}
                />
              </div>
            </fieldset>

            <fieldset className="col-span-2 space-y-1.75">
              <div className="flex gap-5">
                <Avatar className="size-15">
                  <AvatarImage
                    src={user.photoURL || "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>
                    {user.displayName?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <label
                    htmlFor="file-upload"
                    className="border-border flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] border-2 border-dashed px-6 py-8 transition-colors hover:bg-gray-50"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      const file = e.dataTransfer.files[0];
                      if (file) console.log("dropped:", file);
                    }}
                  >
                    <div className="border-border flex size-10 items-center justify-center rounded-[10px] border shadow-xs">
                      <Icon src="/icons/file-upload.svg" className="size-5" />
                    </div>
                    <div className="text-center">
                      <p className="font-sans text-sm">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-muted-foreground font-sans text-xs">
                        SVG, PNG, JPG or GIF (max. 800×400px)
                      </p>
                    </div>
                    <Input
                      id="file-upload"
                      type="file"
                      name="file"
                      accept=".svg,.png,.jpg,.jpeg,.gif"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) console.log("selected:", file);
                      }}
                    />
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="border-border mt-6 flex items-center justify-end gap-3 border-t p-6">
            <Button
              variant="outline"
              className="h-10 cursor-pointer border-2 border-[#D5D7DA]! bg-white px-4 py-2 font-sans text-sm leading-5 font-semibold"
              type="reset"
              disabled={fetcher.state === "submitting"}
            >
              Cancel
            </Button>
            <Button
              className="from-primary to-secondary h-10 cursor-pointer bg-linear-to-r px-4 py-2 font-sans text-sm leading-5 font-semibold"
              type="submit"
              disabled={fetcher.state === "submitting"}
            >
              Save changes
            </Button>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
}
