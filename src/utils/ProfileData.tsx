import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "@src/theme/colors";

const ProfileMenu = [
  [
    {
      icon: <Feather name="user" size={24} color={colors.primary} />,
      label: "About me",
      action: "MODAL",
    },
    {
      icon: <Feather name="map-pin" size={24} color={colors.primary} />,
      label: "My Address",
      action: "MODAL",
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="crown-outline"
          size={24}
          color={colors.primary}
        />
      ),
      label: "Membership",
      action: "MODAL",
    },
  ],
  [
    {
      icon: <Feather name="shopping-bag" size={22} color={colors.primary} />,
      label: "My order",
      action: "NAVIGATE",
      screen: "Order",
    },
    {
      icon: <FontAwesome name="first-order" size={22} color={colors.primary} />,
      label: "Transactions",
      action: "NAVIGATE",
      screen: "Transactions",
    },
    {
      icon: (
        <Ionicons name="ios-wallet-outline" size={22} color={colors.primary} />
      ),
      label: "Wallet",
      action: "NAVIGATE",
      screen: "Wallet",
    },
    {
      icon: (
        <Ionicons name="help-circle-outline" size={22} color={colors.primary} />
      ),
      label: "Help",
      action: "NAVIGATE",
      screen: "Help",
    },
    {
      icon: <MaterialIcons name="logout" size={22} color={colors.primary} />,
      label: "Logout",
      action: "LOGOUT",
    },
  ],
];

export const Helps = [
  {
    id: "001",
    label: "I'm facing a problem placing an order",
  },
  {
    id: "002",
    label: "Account released issues",
  },
  {
    id: "003",
    label: "My all support request",
  },
  {
    id: "004",
    label: "Get help with my refund account",
  },
  {
    id: "005",
    label: "Eatic for business",
  },
  {
    id: "006",
    label: "FAQ",
  },
  {
    id: "007",
    label: "Report an issue",
  },
];

export default ProfileMenu;
