import { Switch } from "@headlessui/react";
import classNames from "classnames";

interface MyComponentProps {
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  enabled: boolean;
  enabledLabel: string;
  disabledLabel: string;
}

const FancySwitch: React.FC<MyComponentProps> = ({
  enabled,
  setEnabled,
  enabledLabel,
  disabledLabel,
}) => {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-black" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-500 ease-in-out"
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3 text-sm">
        <span className="font-medium text-gray-900">
          {!enabled ? disabledLabel : enabledLabel}
        </span>
      </Switch.Label>
    </Switch.Group>
  );
};
export default FancySwitch;
