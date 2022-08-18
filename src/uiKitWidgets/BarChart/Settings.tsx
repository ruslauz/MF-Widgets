import React from "react";
import SettingsPanel from "../../components/SettingsPanel/SettingsPanel";
import Widgets from "../../constants/widgets";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const Settings = ({ visible, onClose }: Props) => (
  <SettingsPanel
    visible={visible}
    title={Widgets.AreaChart.widgetName}
    onClose={onClose}
  >
    {Widgets.AreaChart.widgetName} Settings
  </SettingsPanel>
);

export default Settings;
