import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { images } from "@src/assets";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import React, { useState } from "react";
import styled from "styled-components/native";

const ProfileMenu = [
  {
    icon: <Feather name="user" size={24} color={colors.primary} />,
    label: "About me",
  },
  {
    icon: <Feather name="map-pin" size={24} color={colors.primary} />,
    label: "My Address",
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
  },
];
const Profile = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("chikatest@gmail.com");
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
        {ProfileMenu.map((item, index) => (
          <ProfileMenuItem style={{ elevation: 5 }} key={index}>
            {item.icon}
            <Label>{item.label}</Label>
          </ProfileMenuItem>
        ))}
      </RowBetween>
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
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
const ProfileMenuItem = styled.TouchableOpacity`
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
