import React from "react";
import { CProps } from "@semcore/core";
import SidePanel, {
  ISidePanelProps,
  ISidePanelContext,
  OnCloseType,
} from "@semcore/side-panel";
import Button from "@semcore/button";

export interface SettingsPanelProps
  extends CProps<ISidePanelProps, ISidePanelContext> {
  title?: string;
  children?: React.ReactNode;
  onSave?: () => void;
  onCancel?: () => void;
}

const SettingsPanel = (props: SettingsPanelProps) => {
  const { title, children, visible, onClose, onSave, onCancel, ...rest } =
    props;
  const handleCancel: OnCloseType = (trigger) => {
    onClose?.(trigger);
    onCancel?.();
  };
  const handleSave: OnCloseType = (trigger) => {
    onClose?.(trigger);
    onSave?.();
  };

  return (
    <SidePanel visible={visible} onClose={onClose} {...rest}>
      <SidePanel.Close />
      <SidePanel.Header>
        <SidePanel.Title>{title}</SidePanel.Title>
      </SidePanel.Header>
      <SidePanel.Body>{children}</SidePanel.Body>
      <SidePanel.Footer justifyContent="center" pt={2}>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button use="primary" ml={2} onClick={handleSave}>
          Save
        </Button>
      </SidePanel.Footer>
    </SidePanel>
  );
};

export default SettingsPanel;
