import { BackButton } from "@src/components";
import colors from "@src/theme/colors";
import React, { useEffect, useState } from "react";
import { PermissionsAndroid } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Order = () => {
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [lat, setLat] = useState<number>(14.7645042);
  const [long, setlong] = useState<number>(-17.3660286);

  useEffect(() => {
    (async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "EATIC APP Location Permission",
            message: "EATIC  needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setShowUserLocation(true);
        } else {
          setShowUserLocation(false);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  useEffect(() => {
    async () => {
      const currentPos = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLat(currentPos.coords.latitude);
      setlong(currentPos.coords.longitude);
    };
  }, []);

  return (
    <Container>
      <Header>
        <BackButton />
        <HeaderText>Track Order</HeaderText>
        <EmptyView />
      </Header>
      <MapViewContainer>
        <StyledMapView
          showsUserLocation={showUserLocation}
          region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        />
      </MapViewContainer>
    </Container>
  );
};

export default Order;
const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.white};
`;
const MapViewContainer = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${colors.lightgrey};
`;
const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 16px 16px;
`;
const EmptyView = styled.View`
  width: 40px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  color: ${colors.textGrey};
  font-family: "SF_MEDIUM";
`;

const StyledMapView = styled(MapView)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
