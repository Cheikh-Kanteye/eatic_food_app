import { BackButton, Button } from "@src/components";
import colors from "@src/theme/colors";
import * as Location from "expo-location";
import React, { useEffect, useRef, useState } from "react";
import { PermissionsAndroid } from "react-native";
import MapView, { AnimatedRegion, MapMarker, Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Order = () => {
  const [lat, setLat] = useState<number>(14.716677);
  const [long, setlong] = useState<number>(-17.467686);
  const [region, setRegion] = useState({
    latitude: 14.716677,
    longitude: -17.467686,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  const marker = useRef<MapMarker>();

  const [coordinate, setCoordinate] = useState(new AnimatedRegion(region));

  useEffect(() => {
    (async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Eatic Location Permission",
            message: "Eatic App needs access to your Location ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        const currentPosition = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setlong(currentPosition.coords.longitude);
          setLat(currentPosition.coords.latitude);
        } else {
          return;
        }
      } catch (err) {
        console.log("Access denied");
      }
    })().catch((err) => {
      throw err;
    });
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
          region={region}
          onRegionChange={() =>
            setRegion({
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            })
          }
        >
          {/* @ts-ignore */}
          <Marker.Animated ref={marker} coordinate={coordinate} />
        </StyledMapView>
        <Button btnType="solid" label="Order More Items" onPress={() => null} />
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
  justify-content: flex-end;
  align-items: center;
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
