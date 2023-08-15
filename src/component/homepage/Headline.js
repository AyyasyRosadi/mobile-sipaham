import React from "react";
import { View } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";
import { useSelector } from "react-redux";

function Headline() {
  const { img, loadingSantri } = useSelector((state) => state.santri);
  return (
    <View className="bg-white h-[30vh]">
      {img.length > 0 ? (
        <ImageSlider
          data={img}
          autoPlay={true}
          timer={5000}
          caroselImageContainerStyle={{ marginTop: -52, marginBottom: -20 }}
        />
      ) : (
        <></>
      )}
    </View>
  );
}

export default Headline;
