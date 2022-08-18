import { FC, useState } from "react";
import DropdownMenu from "@semcore/dropdown-menu";
import Kebab from "@semcore/icon/Kebab/m";
import Edit from "@semcore/icon/Edit/m";
import { useDispatch } from "react-redux";
import { Text } from "@semcore/ui/typography";
import Trash from "@semcore/icon/Trash/m";
import React from "react";
import actions from "dashboard/actions";
import useStoreInjection from "dashboard/useStoreInjection";

import SettingsPanel, {
  SettingsPanelProps,
} from "../SettingsPanel/SettingsPanel";

import styles from "./Menu.module.scss";

interface Props
  extends Pick<SettingsPanelProps, "onSave" | "title" | "onCancel"> {
  id: string;
  disablePortals?: boolean;
}

const Menu: FC<Props> = ({ children, id, disablePortals }) => {
  const dispatch = useDispatch();
  useStoreInjection(id, (state = {}, action) => state);
  const [isSettingsVisible, setSettingsVisible] = useState(false);
  const handleEdit = () => setSettingsVisible(true);
  const handleSettingsClose = () => setSettingsVisible(false);

  return (
    <>
      <DropdownMenu disablePortal placement="bottom-end">
        <DropdownMenu.Trigger className={styles.close}>
          <Kebab interactive color="gray-300" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Menu>
          <DropdownMenu.Item onClick={handleEdit}>
            <Edit ml={3} />
            <Text ml={3} mr={3}>
              Edit
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => {
              dispatch({ type: actions.REMOVE_LAYOUT, payload: id });
              dispatch({
                type: actions.REMOVE_FROM_WIDGETS_MAP,
                payload: id,
              });
            }}
          >
            <Trash ml={3} />
            <Text ml={3} mr={3}>
              Delete
            </Text>
          </DropdownMenu.Item>
        </DropdownMenu.Menu>
      </DropdownMenu>
      <SettingsPanel
        disablePortal={disablePortals}
        visible={isSettingsVisible}
        onClose={handleSettingsClose}
      >
        {children}
      </SettingsPanel>
    </>
  );
};

export default Menu;
