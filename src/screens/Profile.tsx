import { Feather } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  NavigationProp,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { images } from "@src/assets";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import ProfileMenu from "@src/utils/ProfileData";
import { StackParamList, TabParamList } from "@src/utils/type";
import React, { useState } from "react";
import styled from "styled-components/native";

interface ProfileProps {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, "Profile">,
    NativeStackNavigationProp<StackParamList, "Root">
  >;
}

const Profile = ({ navigation }: ProfileProps) => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("chikatest@gmail.com");

  const onPress = (action: string, screen?: string) => {
    switch (action) {
      case "NAVIGATE":
        navigation.navigate(screen as never);
        break;
      case "LOGOUT":
        console.log("Logout");
        break;
      default:
        console.log("OPEN MODAL");
        break;
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Overlay
            source={images.profile_overlay}
            style={{ top: 20, left: 20 }}
          />
          <Overlay
            source={images.profile_overlay}
            style={{ top: 20, right: 20 }}
          />
          <HeaderText>Profile</HeaderText>
          <ProfileContainer>
            <ProfileImgCnt activeOpacity={1} style={{ elevation: 8 }}>
              <ProfileImage source={images.defaultImg} resizeMode="cover" />
            </ProfileImgCnt>
            <PhotoPicker>
              <Feather name="camera" color={colors.white} size={14} />
            </PhotoPicker>
          </ProfileContainer>
          <Username>{username}</Username>
          <Email>{email}</Email>
        </Header>
      </HeaderContainer>
      <RowBetween>
        {ProfileMenu[0].map((item, index) => {
          return (
            <UserDetailAction key={index} style={{ elevation: 4 }}>
              {item.icon}
              <Label>{item.label}</Label>
            </UserDetailAction>
          );
        })}
      </RowBetween>
      <MenuList showsVerticalScrollIndicator={false}>
        {ProfileMenu[1].map((item, index) => {
          return (
            <MenuAction style={{ elevation: 4 }} key={index}>
              <MenuActionLeft>
                {item.icon}
                <Label style={{ marginLeft: 8 }}>{item.label}</Label>
              </MenuActionLeft>
              <MoreButton onPress={() => onPress(item.action, item?.screen)}>
                <Feather
                  name={"chevron-right"}
                  size={22}
                  color={colors.primary}
                />
              </MoreButton>
            </MenuAction>
          );
        })}
      </MenuList>
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;
const MenuList = styled.ScrollView`
  flex: 1;
  padding: 0 ${metrics.spacing}px;
  margin-top: ${metrics.spacing}px;
`;
const MoreButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
const MenuAction = styled.View`
  background-color: ${colors.white};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${metrics.screenWidth - metrics.spacing * 2}px;
  height: 50px;
  border-radius: 8px;
  padding: 0 ${metrics.spacing}px;
  margin-bottom: ${metrics.spacing}px;
`;

const MenuActionLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const Label = styled.Text`
  font-size: 16px;
  font-family: "SF_REGULAR";
  color: ${colors.textGrey};
`;
const RowBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${metrics.spacing}px;
`;
const UserDetailAction = styled.TouchableOpacity`
  width: ${metrics.screenWidth / 3 - metrics.spacing}px;
  height: 80px;
  background-color: ${colors.white};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
const Username = styled.Text`
  font-size: 20px;
  font-family: "SF_SEMIBOLD";
  text-align: center;
  color: ${colors.textGrey};
  margin-top: ${metrics.spacing}px;
`;
const Email = styled.Text`
  font-size: 16px;
  font-family: "SF_REGULAR";
  text-align: center;
  color: ${colors.primary};
  margin-top: 6px;
`;
const HeaderContainer = styled.View`
  width: ${metrics.screenWidth}px;
  height: ${metrics.screenHeight * 0.4}px;
`;
const Header = styled.View`
  width: ${metrics.screenWidth}px;
  height: ${metrics.screenHeight * 0.2}px;
  padding-top: ${metrics.spacing * 2}px;
  border-bottom-right-radius: 38px;
  border-bottom-left-radius: 38px;
  background-color: ${colors.primaryAccent};
`;
const ProfileContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
  margin-top: ${metrics.spacing * 2}px;
`;
const ProfileImgCnt = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${colors.white};
`;
const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;
const PhotoPicker = styled.TouchableOpacity`
  width: 30px;
  height: 20px;
  background-color: ${colors.primary};
  position: absolute;
  bottom: 5px;
  right: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-family: "SF_MEDIUM";
  color: ${colors.white};
  text-align: center;
`;

const Overlay = styled.Image`
  width: 100px;
  height: 100px;
  position: absolute;
  opacity: 0.5;
`;
